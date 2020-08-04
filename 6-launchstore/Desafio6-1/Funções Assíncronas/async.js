function mult(number1, number2) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (number1 > 0) {
                resolve((number1 * 2) + number2)
            }
            else {
                reject('Número inválido')
            }
        }, 100)
    })
}

async function doTheJob() {
    try {
        let result
        result = await mult(5, 0)
        console.log(result)
        result = await mult(12, result)
        console.log(result)
        result = await mult(2, result)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

doTheJob()