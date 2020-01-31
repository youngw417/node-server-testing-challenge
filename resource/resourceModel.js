const db = require("../data/db-config");
module.exports = {
  getResources,
  addResource

};

// get all resources

function getResources() {
  return db("resources");
}

// add a resource

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(id => {
      const [myid] = id;
      return db("resources")
        .where("id", myid)
        .first();
    });
}

