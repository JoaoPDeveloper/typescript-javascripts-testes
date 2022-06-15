class Usuario{
    public nome;
    public idade;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

    class Player extends Usuario{
        public jogo;

        constructor(nome: string, idade: number, jogo: string){
            super (nome, idade);

            this.jogo = jogo;
        }
        dizerOJogoAtual(){
            return `Estou Jogando, no momento: ${this.jogo}`;
        }
        static queHorasSao(){
            return Date();
        }
    }

    const jogador = new Player ('João', 24, 'League Of Legends');
    // console.log(jogador.dizerOJogoAtual)

    //private é acessivel somente no campo que foi criada
    //public é acessivo em tudo
    //protected é acessivel apenas dentro da classe e subclasse


    class Jogo{
        protected nome;
        // private nome;


        constructor(nome: string){
            this.nome = nome;
        }

        dizerNome(){
            return `O Nome do Jogo é : ${this.nome}`; 
               }
    }

    // class JogoComDescricao extends Jogo{
    //     private descricao;
    //     constructor(nome: string, descricao: string){
    //         super(nome);

    //         this.descricao = descricao;
    //     }

    //     dizerNomeComDescricao(){
    //         return `O nome do jogo é ${this.nome}`;
    //     }

    // }

    // const LOL = new JogoComDescricao('League of Legends', 'é um jogo cheio de retardado');
    // console.log(LOL.dizerNome());

    interface IJogoComDescricao{
        // nome: string;
        descricao: string;
        dizerNomeComDescricao(): string;
    }

    //implements

    // class JogoComDescricao extends Jogo implements IJogoComDescricao {
    //     public descricao;

    //     constructor(nome: string, descricao: string){
    //         super(nome);

    //         this.descricao = descricao;
    //     }

    //     dizerNomeComDescricao(){
    //         return `O nome do jogo é ${this.nome}`;
    //     }

    // }

    type TJogoComDescricao = {
        descricao : string;
        dizerNomeComDescricao(): string;
    }

    const obj: IJogoComDescricao = {
        descricao: 'descricao do jogo',
        dizerNomeComDescricao(){{
            return '123'
        }}
    }