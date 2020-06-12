const express = require('express')
const nunjucks = require('nunjucks')

const cursos = require('./data')
const server = express()   

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/about", function(req,res){

    server.use(function(req, res) {
        res.status(404).render("not-found");
      });

    return res.render("about")
})

server.get("/", function(req,res){

    server.use(function(req, res) {
        res.status(404).render("not-found");
      });

    return res.render("courses")
})

server.listen(5000, function(){
    console.log('Server is running')
})