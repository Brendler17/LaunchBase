const Chef = require('../models/chef')
const Recipe = require('../models/recipe')

module.exports = {
    index(req, res) {

        Recipe.all((recipes) => {

            return res.render("site/index", { items: recipes })
        })
    },
    about(req, res) {

        return res.render("site/about")
    },
    recipes(req, res) {

        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(recipes){

                const pagination = {
                    page,
                    total: Math.ceil(recipes[0].total / limit)
                }
                
                if(filter){
                    return res.render("site/search", {items: recipes, pagination, filter})
                }

                return res.render("site/recipes", {items: recipes, pagination})
            }
        }

        Recipe.paginate(params)
    },
    show(req, res) {

        Recipe.find(req.params.index, (recipe) => {

            return res.render("site/recipe", { item: recipe })
        })
    },
    chefs(req, res) {
        Chef.all((chefs) => {
            return res.render("site/chefs", { items: chefs })
        })
    }
}