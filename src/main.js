const textOne = document.getElementById('algoritmo1');
const btn = document.getElementById('executar');

// Cria um objeto com os dados do input
const dadosAlgoritmo1 = {
    dados : textOne.value,
}

// Adiciona um evento de clique ao botão
btn.addEventListener('click', () => {
    // alert(`O valor do input é: ${textOne.value}`);
    if (textOne.value.trim() !== '') {
        EnviarDados();
        alert(`O valor do input é: ${textOne.value}`);
    }else {
        alert('Por favor, insira um valor no input antes de enviar.');
    }
});

// Enviar os dados para o backend
async function EnviarDados() {
    try {
        const response = await fetch('http://localhost:3000/algoritmo1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAlgoritmo1)
        });
        const result = await response.json();
        console.log('Dados enviados com sucesso:', result);
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
}
;