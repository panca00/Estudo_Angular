import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute:ActivatedRoute,
    private navegador:Router
    
    ) {
    //recuperando informação de id diretas
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
    //recuperando informação de id de elementos filhos
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.queryParams.subscribe(
      resul=>console.log(resul)
    )


  }

  ngOnInit(): void {

    /*setInterval(()=>{
      //Forçando a mudar de rota apos um certo tempo
      this.navegador.navigate(['/'])
    },5000)*/
  }

}
