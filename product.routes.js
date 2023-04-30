module.exports = server =>
{

    const product = require("../controllers/product.controller.js");
    var router = require("express").Router();

    //Métodos http usados para cada método del crud implementados
    //en la clase controladora:

    router.post("/", product.create);

    router.get("/", product.findAll);

    router.get("/:id", product.findOne);

    router.put("/:id", product.update);

    router.delete(":/id", product.deleteOne);

    router.delete("/", product.deleteAll);

    server.use("server/products");    
};