let ligado: boolean = false;
let nome: string = "abraao";
let idade: number = 21;
let altura: number = 1.8;
// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;
// tipos abrangentes: any, void
let coisa: any = "Eu sou qualquer tipo de dado.";
let retorno: void

// objeto
let produto: object = {
    nome: 'Camisa', preco: 70.50,
    cidade: 'Fortaleza',
    idade: 270,

};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

// tuplas
let pessoa: [string, number] = ["Abraão", 34];
pessoa[0] = "Levi" // alterando o valor da posição zero
console.log(pessoa);
// Datas
let dataLimite: Date = new Date();
let aniversario: Date = new Date("2024-01-04 11:00")
console.log(aniversario)
// Funções
function saudacao(nome: string): string {
    return `Olá ${nome}!`;
}
console.log(saudacao("Abia"));
function soma(a: number, b: number): number {
    return a + b;
};
console.log(soma(6, 9));
function funcaoRegular(a: number, b?: number) {
    if (b === undefined) {
        return `${a}`;
    } else {
        return `${a}+${b}=${a + b}`;
    }
};
console.log(funcaoRegular(8));
// interface
interface PessoaInterface {
    nome: string;
    sobrenome?: string;
    };
    let fulano: PessoaInterface = {
        nome: "Fulano",
        sobrenome: "Mengano"
        };
        console.log(fulano);
        // enumeração
        enum Cor {
            Verde = 1,
            Azul = 2,
            Branco = 3
            };
            console.log(Cor.Verde);
            // classes
            class Pessoa {
                sayHello(): any {
                    throw new Error("Method not implemented.");
                }
                public nome: string;
                private sobrenome: string;
                protected idade: number;
                constructor(n: string, s: string, i: number) {
                    this.nome = n;
                    this.sobrenome = s;
                    this.idade = i;
                    };
                    saudação(): string {
                        return `Olá ${this.nome} ${this.sobrenome}`;
                        };
                        mostradorDeIdade() {
                            return `A idade do usuário é ${this.idade}`;
                            };
                            };