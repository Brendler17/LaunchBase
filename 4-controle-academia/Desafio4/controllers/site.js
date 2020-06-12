const data = require('../data.json')
const { search } = require('./utils')

exports.index = function(req,res){
    return res.render("site/index", {items: data.recipes})
}

exports.about = function(req,res){
    return res.render("site/about")
}

exports.recipes = function(req,res){
    return res.render("site/recipes", {items: data.recipes})
}

exports.show = function (req, res) {   
    const response = search(req.params.index)
    if(response == "Erro"){
        return res.send("Receita não encontrada.")
    }

    return res.render("site/recipe", { item: response })
}