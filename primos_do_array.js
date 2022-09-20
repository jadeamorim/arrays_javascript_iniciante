\\Dado o array abaixo:
\\const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
\\Faça um programa que cria um novo array contendo apenas os números primos do array original.


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let indexNotPrimo; 

//Verifica se é menor que dois pois não existe primo negativo (zero e um também não são)
for (let i=0; i<(array.length+1); i++) {
    if(array[i]<2){
        indexNotPrimo = i;
        i=-1;
        array.splice(indexNotPrimo,1);
    }
}

//Retira os primos positivos maiores que dois
for (let i=0; i<(array.length+1); i++) {
    for(j=2; j<array[i]; j++){
        if(array[i]%j==0){
            indexNotPrimo = i;
            i=-1;
            array.splice(indexNotPrimo,1);
        }
    }
}

for (let i=0; i<(array.length+1); i++) {
    console.log(`Novo array será se ${array}`);
}
