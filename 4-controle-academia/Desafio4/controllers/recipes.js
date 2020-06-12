const data = require("../data.json")
const fs = require("fs")
const { fields, search } = require('./utils')

exports.index = function(req,res){
    return res.render("admin/index", { items: data.recipes })
}

exports.create = function(req,res){

    const create = ""

    return res.render("admin/create", { create })
}

exports.post = function(req,res){

    const response = fields(req.body)
    if(response == 'Erro'){
        return res.send("Preencha todos os campos, por favor.")
    }

    data.recipes.push({
        ...req.body
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), err => {
        if(err){
            return res.send("Erro na gravação do arquivo!")
        }
        return res.redirect("admin/recipes")
    })
}

exports.show = function(req,res){

    const response = search(req.params.index)
    if(response == "Erro"){
        return res.send("Receita não encontrada.")
    }

    return res.render("admin/show", { item: response })
}

exports.edit = function(req,res){
    
    const response = search(req.params.index)
    if(response == "Erro"){
        return res.send("Receita não encontrada.")
    }
    
    return res.render("admin/edit", { item: response })    
}

exports.put = function(req,res){

    const recipeIndex = req.body.index

    const response = fields(req.body)
    if(response == "Erro"){
        return res.send("Preencha todos os campos, por favor.")
    }

    for(let i=0 ; i<data.recipes.length ; i++){
        if(recipeIndex == i){

            const item = {
                ...data.recipes[i],
                image: req.body.image,
                title: req.body.title,
                author: req.body.author,
                ingredients: req.body.ingredients,
                steps: req.body.steps,
                information: req.body.information
            }

            data.recipes[i] = item

        }
    }
    
    fs.writeFile("data.json", JSON.stringify(data, null, 4), err => {
        if(err){
            return res.send("Erro na gravação do arquivo!")
        }

        return res.redirect("/admin/recipes")
    })

}

exports.delete = function(req,res){
    const recipeIndex = req.body.index
    const recipes = []

    for(let i=0 ; i<data.recipes.length ; i++){
        if(i != recipeIndex){
            recipes.push({
                ...data.recipes[i]
            })
        }
    }

    data.recipes = recipes

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Erro na gravação do arquivo!")
        }

        return res.redirect("/admin/recipes")
    })
}