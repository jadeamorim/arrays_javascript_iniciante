//Crie um script que recebe um texto e imprime um objeto representando um histograma das palavras do texto:

// os atributos (chaves) do objeto serão cada uma das palavras do texto.
// os valores associados a cada atributo será a contagem de ocorrências daquela palavra.


let TextoDaAnalise = prompt("Escreve aí a frase para o código analisar:");

var words = TextoDaAnalise.split(" ");

const objetoFrequencias = {};

for(value of words){
    objetoFrequencias[value] = objetoFrequencias[value] ? objetoFrequencias[value]+1 : 1;
}

console.log(objetoFrequencias);
