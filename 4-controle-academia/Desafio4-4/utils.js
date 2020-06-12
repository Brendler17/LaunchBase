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
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() +1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}