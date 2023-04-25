var h1Title = document.createElement('h1');
h1Title.textContent = 'Cálculo do IMC';
var h3Subtitle = document.createElement('h3');
h3Subtitle.textContent = 'Descubra seu índice de Massa Corporal';
document.querySelector('.header').appendChild(h1Title);
document.querySelector('.header').appendChild(h3Subtitle);

var inputPeso = document.createElement('input');
inputPeso.setAttribute('type', 'number');
var inputAltura = document.createElement('input');
inputAltura.setAttribute('type', 'number');
inputAltura.setAttribute('maxlength', '3');
var textPeso = document.createElement('label');
textPeso.textContent = 'Peso (Kg)';
var textAltura = document.createElement('label');
textAltura.textContent = 'Altura (m)';
inputAltura.addEventListener('keyup', () => {
  mascaraPonto(inputAltura);
});

document.querySelector('.input-area').appendChild(textPeso);
document.querySelector('.input-area').appendChild(inputPeso);
document.querySelector('.input-area').appendChild(textAltura);
document.querySelector('.input-area').appendChild(inputAltura);

var button = document.createElement('button');
button.textContent = 'Calcular';
button.classList.add('btn-calc');
document.querySelector('.main').appendChild(button);
button.addEventListener('click', () => {
  calcIMC(inputPeso.value, inputAltura.value);
});

var h4Result = document.createElement('h4');
h4Result.textContent = 'Seu índice de massa corporal é:';
document.querySelector('.res-area-text').appendChild(h4Result);

var result = document.createElement('h3');
document.querySelector('.res-area-text').appendChild(result);

var error = document.createElement('h4');
error.classList.add('error-msg');
document.querySelector('.res-area-text').appendChild(error);

var svg = document.createElement('img');
//document.querySelector('.res-area-img').appendChild(svg);
var areaImage = document.querySelector('.res-area-img');

document.querySelector('.res-area-text').appendChild(svg);

function calcIMC(inputPeso, inputAltura) {
  //Cálculo
  var calc = inputPeso / Math.pow(inputAltura, 2);

  //Setando os textos e imagens
  if (calc < 18.5) {
    result.textContent = 'Abaixo do peso';
    if (svg == true) {
      areaImage.removeChild(areaImage.firstChild);
    } else {
      svg.setAttribute('src', '../img/abaixo-do-peso.svg');
    }
  } else if (calc >= 18.5 && calc < 24.9) {
    if (svg == true) {
      areaImage.removeChild(areaImage.firstChild);
    } else {
      svg.setAttribute('src', '../img/abaixo-do-peso.svg');
    }
    result.textContent = 'Peso normal';
  } else if (calc >= 24.9 && calc < 29.9) {
    if (svg == true) {
      areaImage.removeChild(areaImage.firstChild);
    } else {
      svg.setAttribute('src', '../img/sobrepeso.svg');
    }
    result.textContent = 'Sobrepeso';
  } else if (calc >= 30 && calc < 34.9) {
    if (svg == true) {
      areaImage.removeChild(areaImage.firstChild);
    } else {
      svg.setAttribute('src', '../img/obesidade-grau-i.svg');
    }
    result.textContent = 'Obesidade grau I';
  } else if (calc >= 35 && calc < 39.9) {
    if (svg == true) {
      areaImage.removeChild(areaImage.firstChild);
    } else {
      svg.setAttribute('src', '../img/obesidade-grau-ii.svg');
    }
    result.textContent = 'Obesidade grau II';
  } else if (calc >= 40) {
    if (svg == true) {
      areaImage.removeChild(areaImage.firstChild);
    } else {
      svg.setAttribute('src', '../img/obesidade-grau-iii.svg');
    }
    result.textContent = 'Obesidade grau III ou mórbida';
  }

  //Verificação dos inputs
  if (!inputAltura.length || !inputAltura.length) {
    error.textContent =
      'Para fazer o cálculo é necessário que todos os campos sejam preenchidos.';
    return false;
  } else {
    error.remove();
  }
}

function mascaraPonto(inputAltura) {
  let value = inputAltura.value.replace(/[^\d]+/gi, '');
  let resultado = '';
  let mask = '#.##';
  for (let x = 0, y = 0; x < mask.length && y < value.length; ) {
    if (mask.charAt(x) != '#') {
      resultado += mask.charAt(x);
      x++;
    } else {
      resultado += value.charAt(y);
      y++;
      x++;
    }
  }
  inputAltura.value = resultado;
}
