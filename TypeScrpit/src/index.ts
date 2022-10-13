type hero={
    name:string,
    vulgo:string;
}

function printaObjeto(pessoa:hero):void{
    console.log(pessoa)
}

printaObjeto({name:"bruce",vulgo:"batman"})
console.log("Ola mundo")

//Tipo de dados

let altura:number=1.9;
let nome:string="Hugo";
let ligado:boolean=false;

let nulo:null=null;
let indefinido:undefined=undefined;

let retorn:void
let retornoView:any=false

// objetos

//Generico
let produto:object = {
    name:"felipe",
    cidade:"sp",
    idade:30
}

//Shepando um objeto

type ProdutoLoja ={
    nome:string;
    preco:number;
    unidade:number;
};

let meuProduto:ProdutoLoja ={
    nome:"Tenis",
    preco:100,
    unidade:1
}

//Arrays

//Duas maneiras 
let dados:string[]=["Felipe","Ana","Adrianu"]
let dadods2:Array<string>=["Felipe","Ana","Adrianu"]

//Arrays de MultiTipos
let infos:(string| number)[]=["Alo",12,"Vem",32,"Com o Pai"]

//Tuplas

let boleto:[string,number,number]=["Ado",12,12]

//Array metodos

dados.pop()

//Date

let aniversario:Date=new Date("2022-12-01 06:00")
console.log(aniversario.toString());

//Function

function addNumber(x:number,y:number):number{
    return x+y
}

let soma:number=addNumber(4,2);

function addToHello(nome:string):string{
    return `Hello ${nome}`
}

console.log(addToHello("Hugo"))

//MultiFuncoes
function callTOPhone(phone:number|string):number|string{
    return phone;
}

//Funcoes Assincrona

async function getDatabase(id:number):Promise<string>{
    return "felipe"
}

//Interfaces x type/

//tipagem mais de variaveis
type robot ={
    id:number|string,
    name:string;
}

const bot: robot={
    id:1,
    name:"megamen"
}


//Normalmente utilizado com classe
interface robot2{
    readonly id:number,
    name:string
    sayHello():string;
}

const bot2: robot2={
    id: 1,
    name: "megaen",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}


class Pessoa implements robot2{
    id:number;
    name: string;

    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }

    sayHello(): string {
        return "hello";
    }
}


const p = new Pessoa(1,"gustman")
console.log(p.sayHello())


//Classes e Data modifiers

class Character {
    public name?: string;
    private stregth:number;
    protected skill:number;

    constructor(stregth:number,skill:number){
        
        this.stregth=stregth;
        this.skill=skill
    }
    attack():void{
        console.log(`Attck With ${this.skill} points`)
    }
}

//Subclasses

class Magician extends Character {
    magicPoints:number
    constructor(stregth:number,skill:number, magicPontis:number){
        super(stregth,skill)
        this.magicPoints=magicPontis
    }
}

//generics

function concatArray<T>(...itens:T[]):T[]{
    return new Array().concat(...itens);
}

const numArray=concatArray<number[]>([1,4],[3])
const stgArray= concatArray<string[]>(["Felipe","goku"],["vegete"])
console.log(numArray)

//decorators

function ExibirNome(target:any){
    console.log(target);
}

@ExibirNome
class Funcionario{}


function apiVersion(version:string){
    return (target:any)=>{
        Object.assign(target.prototype,{__version:version,__name:"Hugo"})
    }
}

//atribute decorator
function minLength(length:number){
    return(target:any,key:string)=>{
        let _value=(target[key])

        const getter=()=>_value;
        const setter=(value:string)=>{
            if(value.length<length){
                throw new Error(`Tamanho inferio a ${length}`)
            }else{
                _value=value
            }
        };
        Object.defineProperty(target,key,{
            get:getter,
            set:setter,
        });
    };
};

@apiVersion("1.10")
class Api{
    @minLength(3)
    name:string
    constructor(name:string ){
        this.name=name
    }
}

const api= new Api("produtos");
//console.log(api.__version,api.__name);//so existe apos rodar as propriedades
console.log(Api.name)

