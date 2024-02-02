function gerarTabuada() {
    let txtnumero = document.querySelector('#txtnumero')
    var tab = document.querySelector('#seltab')

    if (txtnumero.value != '') {
        numero = Number(txtnumero.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option') //opção que vai em 'select' sendo criada
            item.text = `${c} x ${numero} = ${c * numero}` //texto que identifica visualmente a opção
            tab.appendChild(item)
        }
    } else {
        window.alert('Impossível formar tabuada vazia.')
    }
}