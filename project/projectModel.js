const db = require('../data/db-config');
module.exports = {

    getProjects,
    findById,
    addProject,
    convertCompleted,
    getResourcesTasks,
    deleteProject

}

function convertCompleted(bool) {
    if (bool)
        return 'true'
    else
        return 'false'

  
}

// get projects - getProjects()

function getProjects() {
    return db('projects')
    .then(projects => {
        projects.map(el => {
            // if (el.completed)
            //     el.completed = 'true'
            // else 
            //     el.completed = 'false'
            // return el
            el.completed = convertCompleted(el.completed)
            return el;
        }
            )
        return projects
    })
}

// get a single project by id

function findById(id) {
    return db('projects').where({id}).first()
    .then( project => {
        project.completed = convertCompleted(project.completed)
        return project
    } )
    
    
}


// Create project - addProject()

function addProject(project) {
    return db('projects').insert(project)
    .then( id => {
        const [ myid ] = id;
        return findById(myid);
    })

}

// getResourcesTasks

function getResourcesTasks(id){
    return db('projects').where({id}).first()
    .then( async project => {
       const myTasks = await db('tasks').where('project_id', id);
        const tasks = myTasks.map(el=> {
            el.completed = convertCompleted(el.completed)
            return el
        } ) 
        const myResources = await db('pro-res as PR').select('R.id', 'R.name', 'R.description')
        .join('resources as R', 'PR.resource_id', 'R.id')
        .join('projects as P', 'PR.project_id', 'P.id')
        .where('P.id', id);
       
        return {
            ...project,
            tasks:tasks,
            resources: myResources
            
        }
    })
}
// delete a project
function deleteProject(id){
    return db('projects').where({id})
    .del();
  }