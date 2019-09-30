const SymptomService = {
  patchSymptom(db, user_id, updates) {
    return db
    .from('user_symptom')
    .where({user_id})
    .update(updates)
    .returning('*')
  },

  deleteSymptomType(db, user_id, symptom_id) {
    return db
      .from('user_symptom')
      .where({user_id, id: symptom_id})
      .delete()
      .then(res => {
        return res;
      })
  }
}

module.exports = SymptomService;