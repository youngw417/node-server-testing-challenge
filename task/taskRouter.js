const router = require('express').Router();
const Projects = require('../project/projectModel');
const Tasks = require('./taskModel')
const idCheck = require('../middleware/idChecker');


module.exports = router;

// Get takes for a project

router.get('/:id', idCheck, (req, res, next) => {
    const { id } = req.params;
    Tasks.getTasks(id)
    .then(tasks => res.status(200).json(tasks))
    .catch(err => next(err));
})


// add a task

router.post('/:id', idCheck, (req, res, next) => {
    const { id } = req.params;
    Tasks.addTask(req.body, id)
    .then(task => res.status(201).json(task))
    .catch(err => next(err));
})