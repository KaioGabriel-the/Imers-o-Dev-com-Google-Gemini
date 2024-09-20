function buscar() {
    let selection = document.getElementById("resultados-pesquisa");
    let campoPesquisar = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisar) {
        selection.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um anime válido</p>";
        return;
    }

    campoPesquisar = campoPesquisar.toLowerCase();

    let resultados = "";

    for (let dado of animes) {
        let nome = dado.nome.toLowerCase();
        let autor = dado.autor.toLowerCase();
        let ano = dado.ano;
        let personagensPrincipais = dado.personagensPrincipais.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (nome.includes(campoPesquisar) || 
            personagensPrincipais.includes(campoPesquisar) ||  
            tags.includes(campoPesquisar)) {
            
            resultados += `<div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.autor}</p>
                <p class="descricao-meta">${dado.ano}</p>
                <p class="descricao-meta">${dado.personagensPrincipais}</p>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>`;
        }
    }

    if (resultados === "") { // Verificando se 'resultados' está vazio
        resultados = "<p>Nada foi encontrado</p>";
    }

    selection.innerHTML = resultados;
}
