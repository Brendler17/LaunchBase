function mult(number1, number2, callback) {
    setTimeout(() => {
        if (number1 > 0) {
            callback((number1 * 2) + number2)
        }
        else {
            callback('Número inválido')
        }
    }, 100)
}

mult(5, 0, (result) => {
    console.log(result)
    mult(12, result, (result) => {
        console.log(result)
        mult(2, result, (result) => {
            console.log(result)
        })
    })
})
