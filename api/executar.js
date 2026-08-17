
// Função para lidar com a requisição
export default async function Handler(req, res) {

    if (req.method !== "POST") {
        res.status(405).json({ message: "Método não permitido" });
        return;
    }

    const { codigo, linguagemId } = req.body;

    try {
        const rapidApiResponse = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            },
            body: JSON.stringify({
                "language_id": linguagemId,
                "source_code": codigo
            })
        })
        const dados = await rapidApiResponse.json()
        return res.status(200).json(dados)
    }
    catch (error) {
        return res.status(500).json({ error: 'Falha ao processar código na API'})
    }

}