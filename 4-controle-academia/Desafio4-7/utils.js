module.exports = {
    age: function(timestamp){

        const today = new Date() //2020
        const birthDate = new Date(timestamp)   //1995

        let age = today.getFullYear() - birthDate.getFullYear() //25
        const month = today.getMonth() - birthDate.getMonth()   // -5
        
        if( month < 0 || (month == 0 && today.getDate() < birthDate.getDate() )){
            age = age - 1
        }

        return age
    },
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() +1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso:`${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    graduation: function(value){
        if(value == 'EM'){
            return 'Ensino Médio Completo'
        }
        if(value == 'ES'){
            return 'Ensino Superior Completo'
        }
        if(value == 'M'){
            return 'Mestrado'
        }
        if(value == 'D'){
            return 'Doutorado'
        }
    },
    grade: function(value){
        if(value == '5EF'){
            return '5º Ano do Ensino Fundamental'
        }
        if(value == '6EF'){
            return '6º Ano do Ensino Fundamental'
        }
        if(value == '7EF'){
            return '7º Ano do Ensino Fundamental'
        }
        if(value == '8EF'){
            return '8º Ano do Ensino Fundamental'
        }
        if(value == '9EF'){
            return '9º Ano do Ensino Fundamental'
        }
        if(value == '1EM'){
            return '1º Ano do Ensino Médio'
        }
        if(value == '2EM'){
            return '2º Ano do Ensino Médio'
        }
        if(value == '3EM'){
            return '3º Ano do Ensino Médio'
        }

    }
}