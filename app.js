//Inciar a função que será responsável por gerar a pesquisa
function iniciarPesquisa(){

 let section = document.getElementById("resultadosPesquisa");
//Coleta os dados do elemento de pesquisa do HTML
let pesquisa = document.getElementById("pesquisa").value;
// Cria uma variável vazia de de texto que será responsável por carregar a div do item pesquisado
let resultados ="";
//Caso a pesquisa seja vazia não irá retornar nenhum resultado.
if(!pesquisa){
    section.innerHTML = "<h2>Nenhum Resultado encontrado</h2>"
    return;
}else{
    pesquisa = pesquisa.toLowerCase();
};
//variavel criada para transformar os titulos em letras minusculas
let nome = "";
let descricao = "";

//validar os valores da pesquisa
//Eu posso receber o valor da pesquisa, percorrer um loop para encontrar qual valor inserido é quivalente ao da pesquisa
for(let dado of bolo){

    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();

    if(nome.includes(pesquisa)||descricao.includes(pesquisa)){
    resultados +=`
    <div class="item-resultado">
        <h2>${dado.nome}</h2>
            <p>
               ${dado.descricao}
            </p>
            <a href=${bolo.link} target="_blank">Veja a
            receita</a>
    </div>`
    }
}

if(!resultados){
    resultados = "<h2>Nenhum Resultado encontrado</h2>"
}

section.innerHTML = resultados
}
