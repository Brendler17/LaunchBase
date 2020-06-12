const data = require('../data.json')

module.exports = {
    fields: function(obj){
        const keys = Object.keys(obj)

        for(key of keys){
            if(obj[key] == "" && key != 'information'){
                return "Erro"
            }
        }
        return
    },
    search: function(recipeIndex){
        for(let i=0 ; i < data.recipes.length ; i++){
            if(i == recipeIndex){

                const item = {
                    ...data.recipes[i],
                    index: i
                }

                return item
            }
        }
        return "Erro"
    }
}