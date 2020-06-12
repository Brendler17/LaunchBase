const db = require('../../config/db')

module.exports = {
    all(callback) {
        const query = `SELECT recipes.*, chefs.name AS author
        FROM recipes
        LEFT JOIN chefs ON(recipes.chef_id = chefs.id)
        ORDER BY recipes.title ASC`

        db.query(query, (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback(results.rows)
        })
    },
    create(data, callback) {
        const query = `INSERT INTO recipes (
            chef_id,
            image,
            title,
            ingredients,
            steps,
            information,
            created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id`

        const values = [
            data.chef,
            data.image,
            data.title,
            data.ingredients,
            data.steps,
            data.information,
            new Intl.DateTimeFormat("pt-BR").format(Date.now())
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback()
        })
    },
    find(id, callback) {
        const query = `SELECT recipes.*, chefs.name AS author
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        WHERE recipes.id = $1`

        db.query(query, [id], (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback(results.rows[0])
        })
    },
    update(data, callback) {
        const query = `UPDATE recipes SET
            chef_id = ($1),
            image = ($2),
            title = ($3),
            ingredients = ($4),
            steps = ($5),
            information = ($6)
        WHERE id = $7`

        const values = [
            data.chef,
            data.image,
            data.title,
            data.ingredients,
            data.steps,
            data.information,
            data.id
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback()
        })
    },
    delete(id, callback) {
        const query = `DELETE FROM recipes
        WHERE id = $1`


        db.query(query, [id], (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback()
        })
    },
    chefsOption(callback) {
        const query = `SELECT name, id FROM chefs
        ORDER BY name ASC`

        db.query(query, (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback(results.rows)
        })
    },
    paginate(params) {
        const { filter, limit, offset, callback } = params

        let query = "",
        filterQuery = ""
        totalQuery = "( SELECT count(*) FROM recipes ) AS total "

        if (filter) {
            filterQuery = `WHERE recipes.title ILIKE '%${filter}%'`

            totalQuery = `( SELECT count(*) FROM recipes 
            ${filterQuery}
            ) AS total`
        }

        query = `SELECT recipes.id, recipes.image, recipes.title, chefs.name AS author, ${totalQuery}
        FROM recipes
        LEFT JOIN chefs ON recipes.chef_id = chefs.id
        ${filterQuery}
        GROUP BY recipes.id, chefs.id
        ORDER BY recipes.title ASC
        LIMIT $1 OFFSET $2`
        
        db.query(query, [limit, offset], (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback(results.rows)
        })
    }
}