const Project =require("../controllers/index.controller");

module.exports=app=>{
    app.get("/api/project", Project.findAll);
    app.get("/api/project/:id", Project.findOne);
    app.put("/api/project/:id", Project.update);
    app.post("/api/project/", Project.create);
    app.delete("/api/project/:id", Project.delete);
};