
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Creating company website', 
        description: 'This is long-term project which started planing in year 2019.', completed: false},
        {id: 2, name: 'Opening AP Calcus Class for Summer', 
        description: 'The class is for both preview and preparation for AP test in May 2020', completed: false},
        {id: 3, name: 'Meeing in Italy for Candace\'s wedding', 
        description: 'Wedding is planned to be held August, 2020', completed: true}
      ]);
    });
};
