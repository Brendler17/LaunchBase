const Student = require("../models/student")
const { grade, date } = require("../../lib/utils")

module.exports = {
    index(req, res) {

        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 2
        offset = limit * (page - 1)

        const params = {
            filter,
            limit,
            offset,
            callback(students){

                let total = (students[0].total) / limit
    
                const pagination = {
                    total: Math.ceil(total),
                    page
                }

                return res.render("students/index", { students, filter, pagination })
            }
        }

        Student.paginate(params)
    },
    create(req, res) {

        Student.teacherOptions((options) => {
            
            return res.render("students/create", { teacherOptions: options })
        })
        
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

            Student.teacherOptions((options) => {

                return res.render("students/edit", { student, teacherOptions: options })
            })
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