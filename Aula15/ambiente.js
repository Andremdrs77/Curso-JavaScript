let num = [5, 8, 2, 9, 3]

num.push(1) // Atribui o valor 1 ao final do vetor
num.sort() // Põe o vetor em ordem crescente

console.log(num)
console.log(`A array tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) // mostra a primeira index de um valor específico. Se o valor não for encontrado, retornará -1.
if (pos == -1) {
    console.log('O valor 8 não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

