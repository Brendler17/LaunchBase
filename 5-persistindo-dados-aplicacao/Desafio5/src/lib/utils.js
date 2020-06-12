const data = require('../../data.json')

module.exports = {
    fields(obj){
        const keys = Object.keys(obj)

        for(key of keys){
            if(obj[key] == "" && key != 'information'){
                return "Erro"
            }
        }
        return
    }
}