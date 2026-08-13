document.addEventListener('DOMContentLoaded', () => {
    const btnEscolher = document.getElementById('escolher');
    const lista = document.querySelector('.lista');
    const itensLista = document.querySelectorAll('.lista li');

    let linguagemSelecionada = '';

    btnEscolher.addEventListener('click', () => {
        event.stopPropagation();
        lista.classList.toggle('mostrar');
    });

    itensLista.forEach(item => {
        item.addEventListener('click', () => {
            linguagemSelecionada = item.textContent;
            btnEscolher.textContent = linguagemSelecionada;
            lista.classList.remove('mostrar');

            console.log(`Linguagem selecionada: ${linguagemSelecionada}`);
        });
    })

    document.addEventListener('click', (event) => {
        if (!btnEscolher.contains(event.target) && event.target !== btnEscolher) {
            lista.classList.remove('mostrar');
        }

    })
})