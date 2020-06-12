const Chef = require('../models/chef')
const { fields } = require('../../lib/utils')

module.exports = {
    index(req, res) {

        Chef.all((chefs) => {
            return res.render("admin/chefs/index", { items: chefs })
        })

    },
    create(req, res) {
        return res.render("admin/chefs/create")
    },
    post(req, res) {

        const response = fields(req.body)
        if (response == "Erro") {
            return res.send("Preencha todos os campos, por favor.")
        }

        Chef.create(req.body, () => {
            return res.redirect("chefs")
        })

    },
    show(req, res) {

        Chef.find(req.params.index, (chef) => {

            Chef.selectRecipes(req.params.index, (recipes) => {

                return res.render("admin/chefs/show", { item: chef, recipes })
            })
        })
    },
    edit(req, res) {

        Chef.find(req.params.index, (chef) => {
            const total_recipes = chef.total_recipes

            return res.render("admin/chefs/edit", { item: chef, total_recipes })
        })
    },
    put(req, res) {

        const response = fields(req.body)
        if (response == "Erro") {
            return res.send("Preencha todos os campos, por favor.")
        }

        Chef.update(req.body, () => {
            return res.redirect("chefs")
        })
    },
    delete(req, res) {


        Chef.delete(req.body, () => {

            return res.redirect("chefs")
        })

    }
}