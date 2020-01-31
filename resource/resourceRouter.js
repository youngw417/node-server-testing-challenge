const router = require('express').Router();
const Resources = require('./resourceModel');

module.exports = router;

// Get resources

router.get('/', (req, res, next) => {
    Resources.getResources()
    .then(resources =>  res.status(200).json(resources))
    .catch(err => next(err));
})




// add a resource

router.post('/', (req, res, next) => {
    Resources.addResource(req.body)
    .then( resource => res.status(201).json(resource))
    .catch( err =>  {
        console.log('err for add resource', err);
        next(err);
    })
})

