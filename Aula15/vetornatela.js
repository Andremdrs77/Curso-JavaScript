let valores = [5, 8, 6, 2, 9]

valores.sort()
for (let pos in valores) { // Para cada posição em valores...
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Printa essa posição e o valor da array nessa posição
}