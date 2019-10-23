const app = require('express')();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('./user/user-router');
const authRouter = require('./auth/auth-router');
const ResultsRouter = require('./results/results-router.js');
const SymptomRouter = require('./symptom/symptom-router')
require('dotenv').config();

const {NODE_ENV} = require('./config');
const morganOptions = 'common';
const EventRouter = require('./event/event-router')
const FoodRouter = require('./food/FoodRouter')
app.use(helmet());
app.use(cors());
app.use(morgan(morganOptions));

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/results', ResultsRouter);
app.use('/api/food', FoodRouter)
app.use('/api/event', EventRouter)
app.use('/api/symptom', SymptomRouter);
app.get('/',(req,res)=>{
  res.status(200).send('Hello world');
});


//error handle
app.use((err, req, res, next)=>{
  let response;
  if(NODE_ENV === 'production'){
    response = {error: 'Critical Server Error'};
  }else{
    response = {error:err.message};
    console.log(err);
  }
  res.status(500).json(response);
});
module.exports = app;