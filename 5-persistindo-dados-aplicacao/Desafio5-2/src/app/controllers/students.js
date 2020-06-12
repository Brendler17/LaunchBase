const Student = require("../models/student")
const { grade, date } = require("../../lib/utils")

module.exports = {
    index(req, res) {

        Student.all((students) => {
            
            for(student of students){
                student.schooling = grade(student.schooling)
            }
            return res.render("students/index", { students })
        })
    },
    create(req, res) {

        return res.render("students/create")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Preencha todos campos corretamente.")
            }
        }

        Student.create(req.body, (student) => {

            return res.redirect(`/students/${student.id}`)
        })
    },
    show(req, res) {
        
        Student.find(req.params.id, (student) => {

            student.birth = date(student.birth).format
            student.schooling = grade(student.schooling)

            return res.render("students/show", { student })
        })
    },
    edit(req, res) {
        
        Student.find(req.params.id, (student) => {

            student.birth = date(student.birth).iso

            return res.render("students/edit", { student })
        })
    },
    update(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Preencha todos campos corretamente.")
            }
        }

        Student.update(req.body, () => {

            return res.redirect("/students")
        })
    },
    delete(req, res) {
        
        Student.delete(req.body.id, () => {

            return res.redirect("/students")
        })
    },
}