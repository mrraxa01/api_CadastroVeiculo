 const express = require("express");
 const env = require("dotenv");
 const {PORT, HOSTNAME} = env.config().parsed;

 const app = express();
  app.use(express.json());

 //MAPEAR ROTAS
 const userRouters = require("../routers/userRouters");
 const vehicleRouters = require("../routers/vehicleRouters");
 app.use("/users", userRouters);
 app.use("/vehicles", vehicleRouters);

 app.listen(PORT, ()=>{
    console.log(`Server is running in ${HOSTNAME}:${PORT}/`);
 });