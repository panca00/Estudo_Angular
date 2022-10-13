import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:String[]=[]

  menuType:string="a"

  constructor() { 
    this.produtos=[
    "mouse",
    "teclado",
    "cabo",
    "fonte"
  ]

  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("Hugo")
  }
  remover(i:number){
    this.produtos.splice(i,1)
  }

}
