const nome = 'Gustavo'
const peso = '98'
const altura = '1.92'
const sexo = 'H'

const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`${nome}, você está acima do peso`)
}
else{
    console.log(`${nome}, você não está acima do peso`)
}