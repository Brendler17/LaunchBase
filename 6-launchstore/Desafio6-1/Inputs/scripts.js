const Mask = {
    apply(input, func) {
        setTimeout(() => {
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatCPF(value) {
        value = value.replace(/\D/g, "")                     //Substitui todo não dígito por ""
        value = value.replace(/(\d{3})(\d)/, "$1.$2")        //Adiciona . entre o terceiro e quarto dígito
        value = value.replace(/(\d{3})(\d)/, "$1.$2")        //Adiciona . entre o sexto e sétimo dígito  
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")  //Adiciona - entre o nono e décimo dígito

        return value
    },
    // formatNumber(value) {
    //     value = value.replace(/\D/, "")
    //     value = value.replace(/(\d+)(\d{4})/, "$1,$2")       //Adiciona , após 4 digitos
    //     value = value.replace(/(\d+)(\d{3}\,)/, "$1.$2")     //Adiciona . do milhar                  

    //     return value

    // }
}