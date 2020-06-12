const express = require('express')
const nunjucks = require('nunjucks')

const receitas = require('./data')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")
nunjucks.configure("views",{
    express:server,
    noCache: true
})

server.get("/", function(req,res){

    return res.render("index", {items: receitas})
})


server.get("/about", function(req,res){
    
    return res.render("sobre")
})

server.get("/recipes", function(req,res){

    return res.render("receitas", {items: receitas})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
  
    for(let i=0 ; i < receitas.length ; i++){
        if(i == recipeIndex){
            return res.render("receita", {item: receitas[i]})
        }
    }   
})

server.listen(5000,function(){
    console.log('Server is running')
})