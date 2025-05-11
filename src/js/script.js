const btn = document.querySelector("#calcular");

const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const resultado = document.querySelector("#resultado");

function element(elemento) {
  return document.createElement(elemento);
}

function calcularIMC(altura, peso) {
  let alturaConvertida = altura / 100;
  let result = peso / (alturaConvertida * alturaConvertida);
  return Number(result).toFixed(2);
}

btn.addEventListener("click", (e) => {
  const imc = calcularIMC(Number(altura.value), Number(peso.value));
  if (imc < 18.5) {
    resultado.innerHTML = `<b style="color:orange;">${imc }: </b>  baixo peso`;
  }
  if (imc > 18.5 && imc < 24.9) {
    resultado.innerHTML = `<b style="color:green;">${imc }: </b>  eutrofia (peso adequado)`;
  }
  if (imc >= 25 && imc < 29.9) {
    resultado.innerHTML = `<b style="color:orange">${imc }: </b>  sobrepeso`;
  }
  if (imc >= 30 && imc < 34.9) {
    resultado.innerHTML = `<b style="color:red">${imc}: </b>  <i>obesidade grau 1`;
  }
  if (imc >= 35 && imc < 39.9) {
    resultado.innerHTML = `<b style="color:red">${imc }: </b>   obesidade grau 2`;
  }
  if (imc > 40) {
    resultado.innerHTML = `<b style="color:red">${imc }: </b>  obesidade extrema`;
  }

  console.log(imc);
});
