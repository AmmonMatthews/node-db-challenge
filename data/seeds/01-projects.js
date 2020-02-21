
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name:"setup database", project_description:"", project_completed:false},
        {project_name:"routes", project_description:"", project_completed:false},
        {project_name:"migrate", project_description:"", project_completed:false},
        {project_name:"dependencies", project_description:"", project_completed:false},

        
      ]);
    });
};
