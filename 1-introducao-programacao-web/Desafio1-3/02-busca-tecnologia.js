const users = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['Javascript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function workcss(usuario){
    for(let i=0 ; i < usuario.tecnologias.length ; i++){
        if(usuario.tecnologias[i] == 'CSS'){
            return true
        }
    }
    return false
}

for(let j=0 ; j < users.length ; j++){
    const usercss = workcss(users[j])
    if(usercss == true){
        console.log(`O usuário ${users[j].nome} trabalha com CSS`)
    }
    if(usercss == false){
         console.log(`O usuário ${users[j].nome} não trabalha com CSS`)
    }
}
