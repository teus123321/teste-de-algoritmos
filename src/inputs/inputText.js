const textOne = document.getElementById('algoritmo1');
const textTwo = document.getElementById('algoritmo2');


// Cria um objeto com os dados do input algoritmo1
export function getDadosAlgoritmo1() {
    return {
        dados : textOne.value,
    };
};

// cria um objeto com os dados do inputo algoritmo2
export function getDadosAlgoritmo2(){
    return{
        dados : textTwo.value
    };
};