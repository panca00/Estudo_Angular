"use strict";
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({ name: "bruce", vulgo: "batman" });
console.log("Ola mundo");
//Tipo de dados
let altura = 1.9;
let nome = "Hugo";
let ligado = false;
let nulo = null;
let indefinido = undefined;
let retorn;
let retornoView = false;
// objetos
//Generico
let produto = {
    name: "felipe",
    cidade: "sp",
    idade: 30
};
let meuProduto = {
    nome: "Tenis",
    preco: 100,
    unidade: 1
};
//Arrays
//Duas maneiras 
let dados = ["Felipe", "Ana", "Adrianu"];
let dadods2 = ["Felipe", "Ana", "Adrianu"];
//Arrays de MultiTipos
let infos = ["Alo", 12, "Vem", 32, "Com o Pai"];
//Tuplas
let boleto = ["Ado", 12, 12];
//Array metodos
dados.pop();
//Date
let aniversario = new Date("2022-12-01 06:00");
console.log(aniversario.toString());
//Function
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 2);
function addToHello(nome) {
    return `Hello ${nome}`;
}
console.log(addToHello("Hugo"));
