const express =require("express");
const cors=require("cors");

const app =express();

require("./server/config/index.config")

app.use(express.json(), express.urlencoded({extended:true}), cors());

require("./server/routes/index.routes")(app);

app.listen(8000, ()=>console.log("Running on port 8000"));