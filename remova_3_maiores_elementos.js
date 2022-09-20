//Crie um código que remova os 3 maiores elementos de um array de inteiros.


let arrayUser = [];
let repeat;
let maior1;
let maior2;
let maior3;

alert("Vamos retirar os três maiores números de uma sequência? O resultado final estará no console");

for(let j=0; j<3; j++){
    arrayUser.push(Number(prompt("Digite um dos números da sua sequência:")));
}

while(repeat != 'n' && repeat != 'N'){
    repeat = prompt("Quer analisar mais números? Se sim, coloca aí, se não, digite n");
    if(repeat!= 'n' && repeat != 'N'){
        arrayUser.push(Number((repeat)));
    } 
}

for (let i=0; i<arrayUser.length; i++) {
    console.log(`Esse é da sua sequência original: ${arrayUser[i]} `);
}

//Maior 1

maior1 = arrayUser[0];

for (let i=1; i<(arrayUser.length+1); i++) {
    if(arrayUser[i]>maior1){
        maior1 = arrayUser[i];
    }
}

let indexMaior1 = arrayUser.indexOf(maior1);

if(indexMaior1> -1){
    arrayUser.splice(indexMaior1, 1);
}

//Maior 2

maior2 = arrayUser[0];

for (let i=1; i<(arrayUser.length+1); i++) {
    if(arrayUser[i]>maior2){
        maior2 = arrayUser[i];
    }
}

let indexMaior2 = arrayUser.indexOf(maior2);

if(indexMaior2> -1){
    arrayUser.splice(indexMaior2, 1);
}

//Maior 3

maior3 = arrayUser[0];

for (let i=1; i<(arrayUser.length+1); i++) {
    if(arrayUser[i]>maior3){
        maior3 = arrayUser[i];
    }
}

let indexMaior3 = arrayUser.indexOf(maior3);

if(indexMaior3> -1){
    arrayUser.splice(indexMaior3, 1);
}

for (let i=0; i<arrayUser.length; i++) {
    console.log(`Já esse é da versão final da sua sequência: ${arrayUser[i]}`);
}
