const fs = require('fs')
const data = require('./data.json')
const { age, graduation, date } = require("./utils")


exports.index = function(req,res){

    data.teachers.forEach(teacher => {
        teacher.subjectsArray = teacher.subjects.split(",")
    });
 
    return res.render("teachers/index", { teachers: data.teachers })
}

exports.create = function(req,res){
    return res.render("teachers/create")
}

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
    const created_at = Date.now()

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        schooling,
        class_type,
        subjects,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Erro na gravação do arquivo.")
        
        return res.redirect("/teachers")
    })
}

exports.show = function(req,res){
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher){
        return res.send("Professor não encontrado!")
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        schooling: graduation(foundTeacher.schooling),
        subjects: foundTeacher.subjects.split(","),
        created_at: Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
    }

    return res.render("teachers/show", { teacher })
}

exports.edit = function(req,res){

    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher){
        return res.send("Professor não encontrado!")
    }

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth),
    }

    return res.render("teachers/edit", { teacher })
}

exports.update = function(req,res){
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function(teacher, foundIndex){
        if(teacher.id == id){
            index = foundIndex

            return true
        }
    })

    if(!foundTeacher){
        return res.send("Professor não encontrado!")
    }

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Erro na escrita do arquivo!")

        return res.redirect(`teachers/${id}`)
    })

}

exports.delete = function(req,res){
    const { id } = req.body

    const filteredTeacher = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filteredTeacher

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err) return res.send("Erro na gravação do arquivo!")

        return res.redirect("/teachers")
    })
}