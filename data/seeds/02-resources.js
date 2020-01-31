
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'classroom no.1', description:'located in building A'},
        {id: 2, name: 'mulifunction printer', description:'located in building B,room 201'},
        {id: 3, name: 'Math Teacher', description:'teaching AP Calculus subjects'}
      ]);
    });
};
 