lista = []
res = document.querySelector('#res')

function Adicionar() {
    var select = document.getElementById('seltab')
    var txtnum = document.querySelector('#txtnum')

    if (txtnum.value != '') {
        num = Number(txtnum.value)
        if (!lista.includes(num)) {
            res.innerHTML = ''

            lista.push(num)

            var item = document.createElement('option')
            item.innerHTML = `Você adicionou o número ${num}`

            select.appendChild(item)
        } else {
            window.alert('O número já foi adicionado!')
        }

    } else {
        window.alert('Insira um valor para adicionar.')
    }
    
}

function mostrarInfo() {

    function calcularMedia(l) {
        soma = 0
        for (let pos in l) {
            soma += l[pos]
        }
        media = soma/l.length
        return {soma, media}
    }

    function MaiorMenor(l) {
        let maior = l[0]
        let menor = l[0]
    
        for (let pos in l) {
            if (pos == 0) {
                maior = l[pos]
                menor = l[pos]
            } else {
                if (l[pos] > maior) {
                    maior = l[pos]
                } else if (l[pos] < menor) {
                    menor = l[pos]
                }
            }
        }
    
        return {maior, menor}
    }

    if (lista.length == 0) {
        window.alert('Adicione algum valor antes de finalizar')
    } else if (lista.length == 1) {
        res.innerHTML = ''
        res.innerHTML = `<p>Apenas o número ${lista[0]} foi adicionado.</p>`
    } else {
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p><br/>`
        res.innerHTML += `<p>O maior valor informado foi ${MaiorMenor(lista).maior}.</p><br/>`
        res.innerHTML += `<p>O menor valor informado foi ${MaiorMenor(lista).menor}.</p><br/>`
        res.innerHTML += `<p>A soma dos valores digitados é ${calcularMedia(lista).soma}.</p><br/>`
        res.innerHTML += `<p>A média dos valores digitados é ${calcularMedia(lista).media.toFixed(2)}</p>`
    }
}