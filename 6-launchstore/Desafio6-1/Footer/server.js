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
    const data = {
        img_url: "/images/logo.jpg",
        name: "Rocketseat",
        text: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        tech: ['React', 'React Native', 'Node.js'],
        link: [
            {name: "GitHub", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
        ]
    }
    server.use(function(req, res) {
        res.status(404).render("not-found");
      });

    return res.render("about", {data})
})

server.get("/", function(req,res){

    server.use(function(req, res) {
        res.status(404).render("not-found");
      });

    return res.render("courses", {items: cursos})
})


server.get("/:id", function(req,res){
    const id = req.params.id

    const curso = cursos.find(function(curso){
        return curso.id == id
    })

    if(!curso){
        return res.status(404).render("not-found");
    }

    return res.render("course", {item: curso})
})

server.listen(5000, function(){
    console.log('Server is running')
})