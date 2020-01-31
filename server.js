const express = require('express');
const ProjectRouter = require('./project/projectRouter');
const TaskRouter = require('./task/taskRouter');
const ResourceRouter = require('./resource/resourceRouter');
const server = express();

server.use(express.json());

// project Router

server.use('/api/projects', ProjectRouter);

server.use('/api/projects/tasks', TaskRouter);

server.use('/api/resources', ResourceRouter);

server.use((err, req, res, next) => {
    console.log('err', err);
    res.status(500).json({
        message: 'Failed by Server Error....'
    })
})

module.exports = server;
