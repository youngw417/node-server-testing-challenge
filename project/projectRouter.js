const router = require('express').Router();
const Projects = require('./projectModel');
const idChecker = require('../middleware/idChecker');

module.exports = router;


// Get projects

router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(err => next(err))
})

// Get single Project
router.get('/:id', idChecker, (req, res, next) => {
    const { id } = req.params;
     Projects.findById(id)
    .then(project => res.status(200).json(project))
    .catch(err => next(err))
})


// add projects

router.post('/', (req, res, next) => {
    Projects.addProject(req.body)
    .then(project => res.status(201).json(project))
    .catch(err=> next(err));
})



// get a project with all related resources and tasks ---### Stretch ###----

router.get('/:id/resources/tasks', (req, res, next) => {
    const { id } = req.params;
    Projects.getResourcesTasks(id)
    .then(items => res.status(200).json(items))
    .catch(err => next(err))
})

// delete a project
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Projects.deleteProject(id)
    .then(() => res.status(204).end())
    .catch( err => next(err));
})