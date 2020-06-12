const fs = require('fs')
const data = require('./data.json')

exports.post = function(req,res){

    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == ""){
            return res.send("Preencha todos campos corretamente.")
        }
    }

    let { avatar_url, name, birth, schooling, class_type, subjects } = req.body

    birth = Date.parse(birth)
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        schooling,
        class_type,
        subjects
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Erro na gravação do arquivo.")
        
        return res.redirect("/teachers")
    })
}