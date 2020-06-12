const programador = {
    nome: 'Gustavo',
    idade: 24,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        },
        {
            nome: 'Phyton',
            especialidade: 'Data Science',
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile',
        },
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`)