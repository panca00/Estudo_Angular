class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow=this.attachShadow({mode:"open"});
        
        //CRIAANDO UM ELEMENTO
        const componetRoot =document.createElement('h1');
        componetRoot.textContent=this.getAttribute("titulo");

        //CRIANDO UM ESTILO
        const style=document.createElement('style');
        style.textContent=`
        h1{
            color:red;
        }
        `

        //Enviando para o shadow

        shadow.appendChild(componetRoot);
        shadow.appendChild(style);
    }
}
//Criando um elemento customizado a partir da classe, com a tag card-news
customElements.define('titulo-dinamico',TituloDinamico)