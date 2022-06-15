const pessoa = {
    nome : 'Joao',
    sobrenome: 'Pedro',
    idade: '24',
    profissao: 'reporter',
};


// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

let {nome, idade, profissao, } = pessoa;

console.log(nome, idade, profissao);
