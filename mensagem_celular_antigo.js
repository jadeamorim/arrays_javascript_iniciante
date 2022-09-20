// Crie um código que, dada uma mensagem, terá que informar quais teclas e quantas vezes cada tecla deverá ser pressionada para que a mensagem seja digitada 
// corretamente em um celular antigo com teclado físico, como o Nokia 1100.


let TextoDaAnalise = prompt("Bora ver como a vida a uns 15 anos atrás era mais difícil?\n Digita uma frase e te direi como era digitar nos anos 2000:");

var caracteres = TextoDaAnalise.split("");

console.log(caracteres);

let funcionamentoTeclado1=[];
let funcionamentoTeclado2=[];
let funcionamentoTeclado3=[];

funcionamentoTeclado1 = [
    ['a', 'b', 'c', ],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
]

funcionamentoTeclado2 = [
['A','B','C'],
['D','E','F'],
['G','H','I'],
['J','K','L'],
['M','N','O'],
['P','Q','R','S'],
['T','U','V'],
['W','X','Y','Z']
]

let tecla;
let tecla1;
let vezes;
let vezes1;

caracteres.forEach(caracter => {

    for(k=0; k<funcionamentoTeclado2.length; k++){
        for(z=0; z<4; z++){
            if(caracter==funcionamentoTeclado2[k][z]){
                tecla1=k+2;
                vezes1=z+1;
                console.log(`# - 1 vez\n`);
                console.log(`${tecla1} - ${vezes1} vez(es)\n`);
            }


        }
    }

    for(i=0; i<funcionamentoTeclado1.length; i++){
        for(j=0; j<4; j++){
            if(caracter==funcionamentoTeclado1[i][j]){
                tecla=i+2;
                vezes=j+1;
                console.log(`${tecla} - ${vezes} vez(es)\n`);
            }


        }
    }

    switch(caracter){
        case ',':
            console.log(`* - 1 vez`);
            break
        case '.':
            console.log(`* - 2 vezes`);
            break

        case '!':
            console.log(`* - 3 vezes`);
            break

        case '?':
            console.log(`* - 4 vezes`);
            break
        case ' ':
            console.log(`0 - 1 vez`);
    }

});

