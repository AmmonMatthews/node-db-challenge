
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_description:"package.json file first", task_notes:"npm i express, npm init -y", task_completed:false, project_id:1},
        {task_description:"three gets and 3 posts", task_notes:"", task_completed:false, project_id: 2},
        {task_description:"knex migrate:make <name>", task_notes:"", task_completed:false, project_id: 3},
        {task_description:"sqlite3, knex, express, knex-cleaner", task_notes:"", task_completed:false, project_id: 4},
      
      ]);
    });
};
