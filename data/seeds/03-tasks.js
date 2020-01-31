
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'curriculum for chapter 1', notes: 'this is good start if we can finish by May, 2020', completed: true, project_id: 2},
        {id: 2, description: 'camera staff setup', notes: 'will visit Feb.2020 to make a contract', completed: false, project_id: 3},
        {id: 3, description: 'I need to make a bank deposit before trip', notes: 'this is has to be done by candace trip to Italy', completed: false, project_id: 3}
      ]);
    });
};
