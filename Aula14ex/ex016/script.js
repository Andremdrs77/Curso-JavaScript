function contar() {
    let txtinicio = document.querySelector('#txtinicio')
    let txtfim = document.querySelector('#txtfim')
    let txtpasso = document.querySelector('#txtpasso')

    var res = document.querySelector('#res')

    if (txtinicio.value == '' || txtfim.value == '') {
        res.innerHTML = 'Impossível contar!'
    } else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        
        if (txtpasso.value > 0) {
            var passo = Number(txtpasso.value)
        } else {
            window.alert('Passo será considerado como 1.')
            var passo = 1
            txtpasso.value = 1
        }

        if (inicio <= fim) {
            for (num = inicio; num <= fim; num += passo) {
            if (num == inicio) {
                var resposta = `<p>${num}`
            } else {
                resposta += ` → ${num}`
            }
        }
        res.innerHTML = resposta + ' → FIM!🏁</p>'
    } else {
        for (num = inicio; num >= fim; num -= passo) {
            if (num == inicio) {
                var resposta = `<p>${num}`
            } else {
                resposta += ` → ${num}`
            }
        }
        res.innerHTML = resposta + ' → FIM!🏁</p>'
    }

        }

}