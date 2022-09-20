//Faça um programa que pede para o usuário digitar o CPF e verifica se ele é válido. 
//Para isso, primeiramente o programa deve multiplicar cada um dos 9 primeiros dígitos do CPF pelos números de 10 a 2 e somar todas as respostas. 
//O resultado deve ser multiplicado por 10 e dividido por 11. 
//O resto dessa divisão deve ser igual ao primeiro dígito verificador (10º dígito).
//Em seguida, o programa deve multiplicar cada um dos 10 primeiros dígitos do CPF pelos números de 11 a 2 e repetir o procedimento anterior para verificar o segundo dígito verificador.

let cpf = prompt("Me diga seu CPF - sem ponto e sem traço, te imploro - que direi quem tú és:");

let elementosCpf = cpf.split("");

console.log(elementosCpf);

let numerosCpf = elementosCpf.map(Number);

console.log(numerosCpf);

let x = 0;
let i = 0;

for(j=10; j>1; j--){
    x+=numerosCpf[i]*j;
    i++;
}

let primeiroTeste = (x*10)%11;
let resultadoPrimeiroTeste = false;

if(primeiroTeste==numerosCpf[9]|| (primeiroTeste==10 && numerosCpf[9]==0)){
    resultadoPrimeiroTeste = true;
}

let y = 0;
i = 0;

for(j=11; j>1; j--){
    y+=numerosCpf[i]*j;
    i++;
}

let segundoTeste = (y*10)%11;
let resultadoSegundoTeste = false;

if(segundoTeste==numerosCpf[10]|| (segundoTeste==10 && numerosCpf[10]==0)){
    resultadoSegundoTeste = true;
}

if(resultadoPrimeiroTeste==true && resultadoSegundoTeste==true){
    console.log(`Parabéns! Você não é um golpista \n Esse CPF é válido :D`);
} else {
    console.log(`Já estou chamando a polícia para te prender, seu falsário`);
}
