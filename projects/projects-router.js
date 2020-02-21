const express = require('express')


const Projects = require('./projects-modules.js');

const router = express.Router();

router.post('/projects', (req, res) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({ error: "couldn't not add project"})
    })
})

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({ error: "couldn't not add resource"})
    })
})

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({ error: "couldn't not add task"})
        })
})

router.get('/resources', (req, res) => {
    Projects.findResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({ error: "couldn't not find resources"})
        })

})

router.get('/projects', (req, res) => {
    Projects.findProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({ error: "couldn't not find projects"})
    })
})

router.get('/tasks', (req, res) => {
    Projects.findTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({ error: "couldn't not find tasks"})
        })
})

module.exports = router