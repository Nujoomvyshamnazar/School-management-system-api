const http = require('http');
require('dotenv').config();
const app = require("../app/app");





const PORT = process.env.PORT || 2020;
const server = http.createServer(app);
server.listen(PORT,()=>{

    console.log(`listening to Port:${PORT}`)

})
