const db = require('../../config/db')

module.exports = {
    all(callback){
        const query = `SELECT chefs.*, count (recipes) AS total_recipes
        FROM chefs
        LEFT JOIN recipes ON chefs.id = recipes.chef_id
        GROUP BY chefs.id
        ORDER BY name ASC`

        db.query(query, (err, results) => {
            if(err) throw `Erro no banco de dados! ${err}`

            callback(results.rows)
        })
    },
    create(data, callback){
        const query = `INSERT INTO chefs (
            name,
            avatar_url,
            created_at
        ) VALUES ($1, $2, $3)
        RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url,
            new Intl.DateTimeFormat("pt-BR").format(Date.now())
        ]

        db.query(query, values, (err, results)=>{
            if (err) throw `Erro na base de dados! ${err}`

            callback()
        })
    },
    find(id, callback){
        const query = `SELECT chefs.*, count(recipes) AS total_recipes
        FROM chefs
        LEFT JOIN recipes ON (chefs.id = recipes.chef_id)
        WHERE chefs.id = $1
        GROUP BY chefs.id`

        db.query(query, [id], (err, results)=>{
            if(err) throw `Erro no banco de dados! ${err}`

            callback(results.rows[0])
        })
    },
    update(data, callback){

        const query = `UPDATE chefs SET 
            name = ($1),
            avatar_url = ($2)
        WHERE id = $3`

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback()
        })
    },
    delete(data, callback){
        const query = `DELETE FROM chefs
        WHERE id = $1`

        db.query(query, [data.id], (err, results) => {
            if (err) throw `Erro no banco de dados! ${err}`

            callback()
        })
    },
    selectRecipes(id, callback){
        const query = `SELECT chefs.*, recipes.image AS image, recipes.title AS title, recipes.id AS id
        FROM chefs
        INNER JOIN recipes ON (chefs.id = recipes.chef_id)
        WHERE chefs.id = $1`

        db.query(query, [id], (err, results)=> {
            if(err) throw `Erro no banco de dados! ${err}`

            callback(results.rows)
        })
    }
}