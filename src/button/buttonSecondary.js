const buttonLimpar = document.getElementById("limpar");

// botão limpar
buttonLimpar.addEventListener("click", () => {
    const textOne = document.getElementById('algoritmo1');
    const textTwo = document.getElementById('algoritmo2');
    const buttonEscolher = document.getElementById('escolher');
    buttonEscolher.textContent = 'Escolher';
    textOne.value = '';
    textTwo.value = '';
})