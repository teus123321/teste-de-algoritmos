import { getDadosAlgoritmo1, getDadosAlgoritmo2 } from '../inputs/inputText.js';
import Resposta from "../button/result.js"

const btn = document.getElementById('executar');
//logica botao primario
btn.addEventListener('click', () => {

    const dadosOne = getDadosAlgoritmo1();
    const dadosTwo = getDadosAlgoritmo2();
    if (dadosOne.dados.trim() !== '' && dadosTwo.dados.trim() !== '') {
        Resposta()
        alert(`Os valores dos inputs é: ${dadosOne.dados} / ${dadosTwo.dados}`);
    } else {
        alert('Por favor, insira um valor no input antes de enviar.');
    }
});