function mult(number1, number2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number1 > 0) {
                resolve((number1 * 2) + number2)
            }
            else {
                reject('Número inválido')
            }
        }, 100)
    })
}

mult(5, 0)
    .then(response => {
        console.log(response)
        mult(12, response).then(
            response => {
                console.log(response)
                mult(2, response).then(
                    response => {
                        console.log(response)
                    }
                )
            }
        )
    })
    .catch(response => {
        console.log(response)
    })