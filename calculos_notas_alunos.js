//O array abaixo lista os nomes dos alunos de uma turma:

//const alunos = ["Jason", "Kimberly", "Zack", "Trini", "Billy", "Tommy"]

//A matriz abaixo lista as 4 notas bimestrais de cada um dos alunos, na mesma ordem.

//const notas = [
//    [9.5, 7.0, 8.0, 7.5],
//    [6.0, 7.0, 8.0, 9.0],
//    [8.0, 7.0, 8.5, 7.5],
//    [9.5, 10.0, 9.75, 9.0],
//    [9.75, 9.5, 9.0, 9.5],
//    [5.5, 4.5, 3.0, 7.0]
//]

// Faça um programa que responda:

//    A média de cada aluno.
//    A média da turma.
//    A maior nota de cada aluno e o bimestre correspondente.
//    A pior nota de cada aluno e o bimestre correspondente.
//    A maior nota da turma, o aluno que a tirou e o bimestre correspondente.
//    A pior nota da turma, o aluno que a tirou e o bimestre correspondente.


const alunos = ["Jason", "Kimberly", "Zack", "Trini", "Billy", "Tommy"];

const notas = [
    [9.5, 7.0, 8.0, 7.5],
    [6.0, 7.0, 8.0, 9.0],
    [8.0, 7.0, 8.5, 7.5],
    [9.5, 10.0, 9.75, 9.0],
    [9.75, 9.5, 9.0, 9.5],
    [5.5, 4.5, 3.0, 7.0]
]


// * A média de cada aluno.
console.log(`\n A MÉDIA DE CADA ALUNO`);

let soma = 0;
let mediasIndividuais=[];

for(i=0; i<notas.length; i++){
    for(j=0; j<4;j++){
        soma+=notas[i][j];    
    }
    mediasIndividuais.push(soma/4)
    soma = 0;
    console.log(`A média de ${alunos[i]} é ${mediasIndividuais[i]}`);
}

//* A média da turma.
console.log(`\n A MÉDIA DA TURMA`);

let mediaGeral;

for(i=0; i<notas.length; i++){
    for(j=0; j<4;j++){
        soma+=notas[i][j];    
    }
}

mediaGeral = (soma/(4*6));
console.log(`A média da Turma é ${mediaGeral}`);

//* A maior nota de cada aluno e o bimestre correspondente.
console.log(`\n A MAIOR NOTA DE CADA ALUNO E O BIMESTRE CORRESPONDENTE`);

let maiorNotaIndividual=[];
let semestreMaiorNota=[];
let maior;
let semestre;

for(i=0; i<notas.length; i++){
    maior = notas[i][0];
    for(j=0; j<4;j++){
        if(notas[i][j]>=maior){
            maior=notas[i][j];
            semestre = j;
        }
    }
    maiorNotaIndividual.push(maior);
    semestreMaiorNota.push(semestre);
    console.log(`A maior nota de ${alunos[i]} foi ${maiorNotaIndividual[i]} no ${semestreMaiorNota[i]+1}º bimestre`);
}


//* A pior nota de cada aluno e o bimestre correspondente.
console.log(`\n A MENOR NOTA DE CADA ALUNO E O BIMESTRE CORRESPONDENTE`);

let menorNotaIndividual=[];
let semestreMenorNota=[];
let menor;
let semestreMenor;

for(i=0; i<notas.length; i++){
    menor = notas[i][0];
    for(j=0; j<4;j++){
        if(menor>=notas[i][j]){
            menor=notas[i][j];
            semestreMenor = j;
        }
    }
    menorNotaIndividual.push(menor);
    semestreMenorNota.push(semestreMenor);
    console.log(`A menor nota de ${alunos[i]} foi ${menorNotaIndividual[i]} no ${semestreMenorNota[i]+1}º bimestre`);
}

//* A maior nota da turma, o aluno que a tirou e o bimestre correspondente.
console.log(`\n A MAIOR NOTA DA TURMA, O ALUNO QUE A TIROU E O BIMESTRE CORRESPONDENTE`);

let maiorGeral = 0;

for(i=0; i<notas.length; i++){
    for(j=0; j<4;j++){
        if(maiorGeral<=notas[i][j]){
            maiorGeral=notas[i][j];
            semestreMaiorIndividual = j;
            alunoMaiorIndividual = i;
        }  
    }
}

console.log(`A maior nota da turma foi de ${alunos[alunoMaiorIndividual]} que tirou ${maiorGeral} no ${semestreMaiorIndividual+1}º bimestre`);


//* A pior nota da turma, o aluno que a tirou e o bimestre correspondente.
console.log(`\n A PIOR NOTA DA TURMA, O ALUNO QUE A TIROU E O BIMESTRE CORRESPONDENTE`);

let menorGeral = 10;

for(i=0; i<notas.length; i++){
    for(j=0; j<4;j++){
        if(menorGeral>=notas[i][j]){
            menorGeral=notas[i][j];
            semestreMenorIndividual = j;
            alunoMenorIndividual = i;
        }  
    }
}

console.log(`A menor nota da turma foi de ${alunos[alunoMenorIndividual]} que tirou ${menorGeral} no ${semestreMenorIndividual+1}º bimestre`);


