// Dado um array de usuários.
// Faça um programa para que uma pessoa possa digitar um email e retornar os dados do usuário encontrado. 
// Se não encontrarmos nenhum usuário, retornar uma mensagem padrão.


const usuarios = [
    {
      nome: "Zé",
      idade: 20,
      cpf: "123.456.789-01",
      email: "ze@uol.com.br",
    },
    {
      nome: "Maria",
      idade: 27,
      cpf: "123.456.789-02",
      email: "maria_meg_costa@outlook.com",
    },
    {
      nome: "Carla",
      idade: 37,
      cpf: "123.456.789-03",
      email: "carla@bol.com.br",
    },
    {
      nome: "Zeca",
      idade: 36,
      cpf: "123.456.789-03",
      email: "zecal3@msn.com",
    },
    {
      nome: "Mel",
      idade: 16,
      cpf: "123.456.789-03",
      email: "melsaf@gmail.com",
    },
  ]

let emailProcurado = prompt("Me passa o email que eu te passo os dados");

let resposta = 0;
let contatoEncontrado ={};

for(contato of usuarios){
    if(emailProcurado===contato.email){
        contatoEncontrado = contato;
        resposta = 2;
    }
    else {
        resposta += 0;
    }
}

if(resposta===0){
    console.log(`Desculpa, o email citado não foi encontrado na nossa base de dados, tente novamente`);
} else {
    console.log(`\n Nome: ${contatoEncontrado.nome}\n Idade: ${contatoEncontrado.idade}\n CPF: ${contatoEncontrado.cpf}\n Email: ${contatoEncontrado.email}`);
}

