const Projects = require('../project/projectModel');


module.exports = (req,res, next) => {
    const id = req.params.id;
    Projects.findById(id)
    .then( () => next())
    .catch(err => res.status(404).json({
        message: `No project ID# ${id} exists in the server`
    }))
    
 

}