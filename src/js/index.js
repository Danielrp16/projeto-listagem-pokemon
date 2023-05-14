// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para a lua

// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// passo 3 - dar um jeito de identificar o clique do usuario no botao de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    //passo 6 - verificar se o body ja tem a classe modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    // este comando faz com que nao precise ter remove e add pois ele tem a funcao de ALTERNAR
    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
         // passo 7 - remover a classe do modo-escuro do body
         body.classList.remove("modo-escuro");

         //passo 8 - trocar imagem do botao de alterar tema para o botao do sol
         imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

     } else { 
        //passo 4 - adicionar a classe modo-escuro no body
         body.classList.add("modo-escuro");
     
             //passo 5 - trocar a imagem do botao de alterar tema para lua
     
             imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});