const db = require('../data/db-config');
const Projects = require('../project/projectModel');
module.exports = {

    getTasks,
    addTask

}

// get tasks for a project

function getTasks(id) {
    return db('tasks').where('project_id', id)
    .then(tasks => {
        tasks.map(el => {
            // if (el.completed)
            //     el.completed = 'true'
            // else 
            //     el.completed = 'false'
            // return el
            el.completed = Projects.convertCompleted(el.completed)
            return el;
        }
            )
        return tasks
    })
}




// add a taskes for a project

function addTask(task, id) {
    return db('tasks').insert({...task,
    project_id: id})
    .then( id => {
        const [ myid ] = id;
        return db('tasks').where('id', myid).first()
    })

}