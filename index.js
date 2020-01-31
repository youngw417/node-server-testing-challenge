const server = require('./server');


const PORT = process.env.PORT || 5005;


server.listen(PORT, () => console.log(`*** Server is running at port ${PORT}`));
