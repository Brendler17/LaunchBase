const users = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['Javascript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

for(let i=0 ; i < users.length ; i++){
    console.log(`${users[i].nome} trabalha com ${users[i].tecnologias}`)
}