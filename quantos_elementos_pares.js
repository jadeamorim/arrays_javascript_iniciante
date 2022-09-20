//Crie um código que, dado um array, informe quantos elementos dele são pares.

let arrayUser = [];
let repeat;
let quantidadePar = 0;

arrayUser.push(prompt("Vamos descobrir quantos números são pares dado uma sequência? \n Digite um dos números da sua sequência:"));

while(repeat != 'n' && repeat != 'N'){
    repeat = prompt ("Quer analisar mais números? Se sim, coloca aí, se não, digite n");
    if(repeat!= 'n' && repeat != 'N'){
        arrayUser.push(repeat);
    } 
}

for (let i =0; i<arrayUser.length; i++) {
    if(arrayUser[i]%2===0){
        quantidadePar += 1;
    } 
}

alert(`A quantidade de números pares na sua sequência é: ${quantidadePar}`);
