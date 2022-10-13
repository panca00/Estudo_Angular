class CardNews extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        
    }
    build(){
        const componetRoot =document.createElement("div");
        componetRoot.setAttribute("class","card");


        //Conteudo do div pai Card

        const cardLeft=document.createElement("div");
        cardLeft.setAttribute("class","card_left");

        const cardRigth=document.createElement("div");
        cardRigth.setAttribute("class","card_rigth");


        //Conteudo do CardLeft
        const autor=document.createElement("span");
        autor.textContent="By: "+(this.getAttribute("autor")|| "Anonymous");

        const titulo=document.createElement("a");
        titulo.textContent=this.getAttribute("titulo")
        titulo.href=this.getAttribute("urlLink")

        const newsContent = document.createElement("p");
        newsContent.textContent=this.getAttribute("Content")
        

        //Conteudo do CardRigth
        const newsImage=document.createElement("img") ;
        newsImage.src=this.getAttribute("image")|| "./assets/foto-default.jpg"
        newsImage.alt="Foto da noticia"


        //Linkando cada elemento pai com elemento filho
        
        //Div container com as subdivs de card
        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRigth);

        //CardLeft
        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(newsContent);
   

        //CardRight
        cardRigth.appendChild(newsImage);


        //Retornando o elemento completo
        return componetRoot;
    }

        styles(){
            const style=document.createElement("style");
            style.textContent =`
            
            .card{
                width: 40%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 7px 9px 23px 1px rgba(0,0,0,0.46);
                -webkit-box-shadow: 7px 9px 23px 1px rgba(0,0,0,0.46);
                -moz-box-shadow: 7px 9px 23px 1px rgba(0,0,0,0.46);
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card_left >span{
                font-weight: 400;
            }
            
            .card_left >a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                
            }
            
            .card_left >p{
                color: rgb(70, 70, 70);
            }
            img{
                width: 240px;
                height: 150px;
            }
            `
            return style
    }


}

customElements.define('card-news', CardNews);