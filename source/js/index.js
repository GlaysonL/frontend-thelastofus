/*

1 - Capturar o elemento html dos botoes

2 - Identificar o clique do mouse

3 - Desmarcar o botão selecionado anteriormente

4 - Marcar o botão clicado

5 - Esconder a imagem de fundo anterior

6 - Atualizar a imagem para o novo botao selecionado

*/

//  Objetivo 1
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
// Objetivo 2

botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // Objetivo 3
        desativarBotaoSelecionado();

        // Objetivo 4
        botao.classList.add('selecionado');


        //objetivo 5
        esconderImagemAtiva();

        //objetivo 6 
        imagens[indice].classList.add('ativa');
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
