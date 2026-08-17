
// função para enviar dados para serem executados
export default async function EnviarDados() {
    const algoritmo1 = document.getElementById('algoritmo1').value;
    const algoritmo2 = document.getElementById('algoritmo2').value;
    
    const idLinguagem = 22;

    try{
        const response = await fetch('/api/executar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                codigo: algoritmo1,
                linguagemId: idLinguagem
            })
        })
        
        const result = await response.json()
        console.log('Dados processados pelo Judge0:', result);
    }catch{
        console.error('Erro ao chamar a Serverless Function:', error);
    }
}