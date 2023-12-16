function divisao(a,b){
    let resultado = a/b;
    return resultado;
};

function mult(a,b){
    let resultado2 = a*b;
    return resultado2;
};

function resposta(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    document.getElementById("resultado").innerHTML = "o resultado da divisão desses números é: " + divisao(num1,num2) + " e o resultado da multiplicação é: " + mult(num1,num2);
}