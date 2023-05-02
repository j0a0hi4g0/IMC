function selecionarCalculadora() {
    var idade = document.getElementById("idade").value;
    if (idade == "idoso") {
      document.getElementById("peso").value = "";
      document.getElementById("altura").value = "";
      document.getElementById("resultado").innerHTML = "";
    }
  }
  
  function calcularIMC() {
    var idade = document.getElementById("idade").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = 0;
    if (idade == "adulto") {
      imc = peso / (altura * altura);
    } else if (idade == "idoso") {
      imc = 1.3 * peso / (altura * altura);
    }
    document.getElementById("resultado").innerHTML = "Seu IMC é " + imc.toFixed(2);
  }
  