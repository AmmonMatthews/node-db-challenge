const db = require('../data/dbConfig.js')

module.exports= {
    addResource,
    addProject,
    addTask,
    findResources,
    findProjects,
    findTasks,
}

function addResource(resource){
    return db('resource')
        .select('resurce_completed')
        .insert(resource, "id");
}

function addProject(project){
    return db('project')
        .insert(project, "id");
}

function addTask(task){
    return db('task')
        .insert(task, "id");
}

function findResources(){
    return db('resource')
}

function findProjects(){
    return db('project')
}

function findTasks(){
    return db('task as t')
    .join('project as p', 't.project_id', 'p.id')
    .select('t.*', 'p.project_name as ProjectName', 'p.project_description as ProjectDescription')   
}
