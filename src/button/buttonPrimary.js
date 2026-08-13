import { getDadosAlgoritmo1 } from '../main.js';

const btn = document.getElementById('executar');

//logica botao primario
btn.addEventListener('click', () => {
    // alert(`O valor do input é: ${textOne.value}`);
    const dados = getDadosAlgoritmo1();
    if (dados.dados.trim() !== '') {
        alert(`O valor do input é: ${dados.dados}`);
    }else {
        alert('Por favor, insira um valor no input antes de enviar.');
    }
});