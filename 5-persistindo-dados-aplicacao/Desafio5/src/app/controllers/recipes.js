const Recipe = require('../models/recipe')
const { fields } = require("../../lib/utils")

module.exports = {
    index(req, res) {

        Recipe.all((recipes) => {
            return res.render("admin/recipes/index", { items: recipes })
        })

    },
    create(req, res) {
        const create = ""

        Recipe.chefsOption((chefs) => {

            return res.render("admin/recipes/create", { chefsArray: chefs, create })
        })
    },
    post(req, res) {

        const response = fields(req.body)
        if (response == 'Erro') {
            return res.send("Preencha todos os campos, por favor.")
        }

        Recipe.create(req.body, () => {

            return res.redirect("recipes")
        })
    },
    show(req, res) {

        Recipe.find(req.params.index, (recipe)=>{
            return res.render("admin/recipes/show", { item: recipe })
        })
    },
    edit(req, res) {
        
        
        Recipe.find(req.params.index, (recipe)=>{

            Recipe.chefsOption((chefs)=>{

                return res.render("admin/recipes/edit", { item: recipe, chefsArray: chefs })
            })
        })
    },
    put(req, res) {

        const response = fields(req.body)
        if (response == "Erro") {
            return res.send("Preencha todos os campos, por favor.")
        }

        Recipe.update(req.body, ()=>{

            return res.redirect("/admin/recipes")
        })
    },
    delete(req, res) {
        const id = req.body.id
        
        Recipe.delete(id, ()=>{

            return res.redirect("/admin/recipes")
        })

    }
}