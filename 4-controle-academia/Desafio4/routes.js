const { Router } = require('express')
const routes = Router()
const site = require("./controllers/site")
const recipes = require("./controllers/recipes")

//website
routes.get("/", site.index)                             //mostra página inicial
routes.get("/about", site.about)                        //mostra pagina sobre
routes.get("/recipes", site.recipes)                    //mostra receitas
routes.get("/recipes/:index", site.show)                //mostra receita unica

//admin
routes.get("/admin/recipes", recipes.index)             //mostra lista receitas
routes.get("/admin/recipes/create", recipes.create)     //formulário nova receita
routes.get("/admin/recipes/:index", recipes.show)       //exibir uma receita
routes.get("/admin/recipes/:index/edit", recipes.edit)  //formulário edição
routes.post("/admin/recipes", recipes.post)             //envia nova receita
routes.put("/admin/recipes", recipes.put)               //edita receita
routes.delete("/admin/recipes", recipes.delete)         //deleta receita

module.exports = routes

// arrumar pastas, rotas website
// arrumar página receita receber novos dados
// scripts.js função click