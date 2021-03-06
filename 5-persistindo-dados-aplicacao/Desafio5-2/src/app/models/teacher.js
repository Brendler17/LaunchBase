const db = require("../../config/db")
const { date } = require("../../lib/utils")

module.exports = {
    all(callback){
        db.query(`SELECT * FROM teachers ORDER BY name ASC`, (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback(results.rows)
        })
    },
    create(data, callback){
        const query = `
            INSERT INTO teachers (
                avatar_url,
                name,
                birth,
                schooling,
                class_type,
                subjects,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.schooling,
            data.class_type,
            data.subjects,
            date(Date.now()).iso
        ]

        db.query(query, values, (err, results) => {
            if(err) throw `Erro no banco de dados! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback){
        db.query(`SELECT * FROM teachers WHERE id = $1`, [id], (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback(results.rows[0])
        })
    },
    update(data, callback){

        const query = `
            UPDATE teachers SET
                avatar_url=($1),
                name=($2),
                birth=($3),
                schooling=($4),
                class_type=($5),
                subjects=($6)
            WHERE id = $7        
        `

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.schooling,
            data.class_type,
            data.subjects,
            data.id
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback()
        })

    },
    delete(id, callback){
        db.query(`DELETE FROM teachers WHERE id = $1`, [id], (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback()
        })
    }
}