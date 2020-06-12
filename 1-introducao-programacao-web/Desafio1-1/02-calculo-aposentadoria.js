const nome = 'Gustavo'
const sexo = 'H'
const idade = 24
const contribuicao = 2

if(sexo == 'H'){
    if(contribuicao >= 35){
        if((idade + contribuicao) >= 95){
            console.log(`${nome}, você já pode se aposentar.`)
        }
        else{
            console.log(`${nome}, você ainda não pode se aposentar.`)
        }
    }
    else{
        console.log('Tempo de contribuição insuficiente.')
    }
}

if(sexo == 'M'){
    if(contribuicao >= 30){
        if((idade + contribuicao) >= 85){
            console.log(`${nome}, você já pode se aposentar.`)
        }
        else{
            console.log(`${nome}, você ainda não pode se aposentar`)
        }
    }
    else{
        console.log('Tempo de contribuição insuficiente.')
    }
}