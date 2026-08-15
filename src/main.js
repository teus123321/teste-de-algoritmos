/*const textOne = document.getElementById('algoritmo1');
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
}; */





// Chave da API do RapidAPI
const RAPIDAPI_KEY = "";

// Enviar os dados para o backend
export async function EnviarDados() {
    try {
        const response = await fetch('http://localhost:3000/algoritmo1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(getDadosAlgoritmo1())
        });
        const result = await response.json();
        console.log('Dados enviados com sucesso:', result);
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    };
    
}
;