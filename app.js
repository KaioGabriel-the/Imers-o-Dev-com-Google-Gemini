// Função que realiza a busca e atualiza o conteúdo da seção com os resultados dos animes
async function buscar() {
    // Obtém o elemento HTML com o ID 'resultados-pesquisa'
    let selection = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor do campo de pesquisa. Supondo que o campo tenha o ID 'campo-pesquisa'.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
    
    if (!campoPesquisa) {
        return selection.innerHTML = "<p>Nenhum resultado encontrado. Digite o nome do anime</p>";
    }

    // Faz uma requisição para a API
    try {
        let response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(campoPesquisa)}&limit=10`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();

        // Inicializa uma variável 'result' com uma string vazia para acumular o HTML
        let result = "";

        // Itera sobre cada objeto de anime na lista 'animes'
        for (let anime of data.data) {
            // Converte os campos para minúsculas para comparação
            let nome = anime.title.toLowerCase();
            let descricao = anime.synopsis.toLowerCase();
            let tags = anime.genres.map(genre => genre.name).join(', ').toLowerCase();

            // Verifica se o nome, descrição ou tags do anime incluem o texto do campo de pesquisa
            if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // Adiciona o HTML para cada anime à variável 'result'
                result += `<div class="item-resultado">
                    <h2>${anime.title}</h2> <!-- Nome do anime -->
                    <p class="descricao-meta">${anime.type}</p> <!-- Tipo do anime -->
                    <p class="descricao-meta">${anime.year ? anime.year : 'Ano desconhecido'}</p> <!-- Ano de lançamento do anime -->
                    <p class="descricao-meta">${anime.synopsis}</p> <!-- Descrição do anime -->
                    <p class="descricao-meta">Tags: ${anime.genres.map(genre => genre.name).join(', ')}</p> <!-- Tags do anime -->
                </div>`;
            }
        }

        // Se nenhum anime for encontrado, mostra uma mensagem apropriada
        if (result === "") {
            result = "<p>Nenhum resultado encontrado</p>";
        }

        // Atualiza o conteúdo HTML do elemento com ID 'resultados-pesquisa' com o HTML acumulado
        selection.innerHTML = result;

    } catch (error) {
        console.error('Error fetching data:', error);
        selection.innerHTML = "<p>Erro ao buscar os dados. Tente novamente mais tarde.</p>";
    }
}

// Certifica-se de que a função 'buscar' seja chamada em algum momento após o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("campo-pesquisa").addEventListener('input', buscar);
});
