
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pro-res').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('pro-res').insert([
        {id: 1, project_id: 1, resource_id: 2},
        {id: 2, project_id: 1, resource_id: 3},
        {id: 3, project_id: 2, resource_id: 2},
        {id: 4, project_id: 3, resource_id: 3},
        {id: 5, project_id: 2, resource_id: 1}
      ]);
    });
};
