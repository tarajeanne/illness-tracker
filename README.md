# a template for express servers
# Testing a change


## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.


POST /user
  request:
    {
      username, 
      password, 
      display_name
    }
  response: 
    location

POST /auth/token
  request:
    {
      username,
      password
    }

  response:
    {
      jwt_token
    }
    
GET /user 
  request:
    {
      jwt_token
    }

  response:
    {
      username,
      display_name,
      events: 
        [
          {
            type: meal, 
            items: [
              {
                name: 'hamburger',
                ingredients: ['wheat', 'beef', 'salt', 'spices']
              },
              {
                name: 'fries'.
                ingredients: ['palm oil', 'potato', 'salt']
              }
            ]
            time: 2134234
          }, 
          {
            type: symptom, 
            symptom: ‘bloating’, 
            severity: 4, 
            time: 13o2847912378
          }
        ]
        symptoms: [‘bloating’, ‘headaches’]
    }

POST /event
  request:
    {
      type: 'symptom'
      symptom: ‘bloating’,
<<<<<<< HEAD
      severity: 3,
=======
      severity: 999999999999,
>>>>>>> 4faf139bf387fce8ad1ab9067d8384b4bf3e7cfc
      time: 134134234
    }
  response: 201 created

POST /event
  request(numbers are ids of foods selected in the USDA database):
    {
      type: meal,
      items: [123123, 234, 2345356, 1345, 4356546],
      time: 123123123
    }
  response: 201 created

POST /food

GET /food/search?term=butter
  response: 
  {
    total: 123,
    results:
    [
      {
        offset: 0,
        name: 'Super Excellent Butter',
        ndbno: 1231231,
        manu: 'Excellent Butter Company,
      },
      {
        name: 'Okay butter',
        ndbno: 123123,
        manu: 'Mediocre Butter Company'
      }
    ]
  }



  

