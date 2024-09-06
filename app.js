// Função que realiza a busca e atualiza o conteúdo da seção com os resultados dos animes
function buscar() {
    // Obtém o elemento HTML com o ID 'resultados-pesquisa'
    let selection = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor do campo de pesquisa. Supondo que o campo tenha o ID 'campo-pesquisa'.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    if (!campoPesquisa){
        return selection.innerHTML = "<p>Nenhum resultado encontrado. Digite o nome do anime</p>"
    }
    // Inicializa uma variável 'result' com uma string vazia para acumular o HTML
    let result = "";
    let nome = " "
    let descricao = " "
    let tags = " "
    // Itera sobre cada objeto de anime na lista 'animes'
    for (let anime of animes) {
        nome = anime.nome.toLowerCase()
        descricao = anime.nome.toLowerCase()
        tags = anime.tags.toLowerCase()
        // Verifica se o nome do anime inclui o texto do campo de pesquisa
        if (nome.includes(campoPesquisa) || (descricao.includes(campoPesquisa)) || (tags.includes(campoPesquisa))){
            // Adiciona o HTML para cada anime à variável 'result'
            result += `<div class="item-resultado">
                <h2>${anime.nome}</h2> <!-- Nome do anime -->
                <p class="descricao-meta">${anime.autor}</p> <!-- Autor do anime -->
                <p class="descricao-meta">${anime.ano}</p> <!-- Ano de lançamento do anime -->
                <p class="descricao-meta">${anime.descricao}</p> <!-- Descrição do anime -->
                <p class="descricao-meta">Personagens principais: ${anime.personagensPrincipais}</p> <!-- Personagens principais do anime -->

            </div>`;
        }
    };

    if(!result){
        return selection.innerHTML = "<p>Nenhum resultado encontrado</p>"

    }
    // Atualiza o conteúdo HTML do elemento com ID 'resultados-pesquisa' com o HTML acumulado
    selection.innerHTML = result;
}

// Certifica-se de que a função 'buscar' seja chamada em algum momento após o carregamento da página
