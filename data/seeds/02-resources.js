
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name:"laptop", resource_description:"need a new one"},
        {resource_name:"mouse", resource_description:"wireless"},
        {resource_name:"training kit", resource_description:"week two of node unit"},

       
      ]);
    });
};
