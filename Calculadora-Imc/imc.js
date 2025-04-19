function Calcular() {
    var peso = document.getElementById("txtimc").value;
    var altura = document.getElementById("txtalt").value;
    var imc = peso / (altura * altura);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Seu IMC é: " + imc.toFixed(1) + "<br>";
    resultado.innerHTML += "Classificação: ";

    if (imc < 18.5) {
        resultado.innerHTML += "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML += "Peso normal! a balança agradece!";
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML += "Sobrepeso! Cuidado com a balança!";
    } else if (imc >= 30 && imc < 34.9) {
        resultado.innerHTML += "Obesidade grau 1! Cuidado com a balança!";
    } else if (imc >= 35 && imc < 39.9) {
        resultado.innerHTML += "Obesidade grau 2! Cuidado com a balança!";
    } else {
        resultado.innerHTML += "Obesidade grau 3! Cuidado com a balança!";
    }
}