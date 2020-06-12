const { Router } = require('express')
const routes = Router()
const site = require("./app/controllers/site")
const recipes = require("./app/controllers/recipes")
const chefs = require("./app/controllers/chefs")

//website
routes.get("/", site.index)                             //mostra página inicial
routes.get("/about", site.about)                        //mostra pagina sobre
routes.get("/recipes", site.recipes)                    //mostra receitas
routes.get("/recipes/:index", site.show)                //mostra receita unica
routes.get("/chefs", site.chefs)                        //mostra chefes
routes.get("/search", site.recipes)                      //busca receitas

//admin
routes.get("/admin/recipes", recipes.index)             //mostra lista receitas
routes.get("/admin/recipes/create", recipes.create)     //formulário nova receita
routes.get("/admin/recipes/:index", recipes.show)       //exibir uma receita
routes.get("/admin/recipes/:index/edit", recipes.edit)  //formulário edição
routes.post("/admin/recipes", recipes.post)             //envia nova receita
routes.put("/admin/recipes", recipes.put)               //edita receita
routes.delete("/admin/recipes", recipes.delete)         //deleta receita

routes.get("/admin/chefs", chefs.index)
routes.get("/admin/chefs/create", chefs.create)
routes.get("/admin/chefs/:index", chefs.show)
routes.get("/admin/chefs/:index/edit", chefs.edit)
routes.post("/admin/chefs", chefs.post)
routes.put("/admin/chefs", chefs.put)
routes.delete("/admin/chefs", chefs.delete)

module.exports = routes