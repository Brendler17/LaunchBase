const Teacher = require("../models/teacher")
const { date, age, graduation } = require('../../lib/utils')

module.exports = {
    index(req, res) {

        Teacher.all((teachers) => {
            return res.render("teachers/index", { teachers })
        })
    },
    create(req, res) {
        return res.render("teachers/create")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Preencha todos campos corretamente.")
            }
        }

        Teacher.create(req.body, (teacher) => {
            return res.redirect(`/teachers/${teacher.id}`)
        })
    },
    show(req, res) {

        Teacher.find(req.params.id, (teacher) => {

            teacher.age = age(teacher.birth)
            teacher.schooling = graduation(teacher.schooling)
            teacher.subjects = teacher.subjects.split(",")
            teacher.created_at = date(teacher.created_at).format

            return res.render("teachers/show", { teacher })
        })
    },
    edit(req, res) {

        Teacher.find(req.params.id, (teacher) => {

            teacher.birth = date(teacher.birth).iso

            return res.render("teachers/edit", { teacher })
        })
    },
    update(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Preencha todos campos corretamente.")
            }
        }

        Teacher.update(req.body, () => {
            return res.redirect("/teachers")
        })
    },
    delete(req, res) {

        Teacher.delete(req.body.id, () => {

            return res.redirect("/teachers")
        })
    },
}