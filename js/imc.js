function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    document.getElementById("resultado").innerHTML = "Seu IMC é " + imc.toFixed(2);
  }
  