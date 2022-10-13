import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit,DoCheck, AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit, OnDestroy {
  quantidade:number=0

  constructor() { }
  ngOnDestroy(): void {
    console.log("Good Bye!")
  }

  adicionar(){
    this.quantidade+=1;
  }
  
  descrementar(){
    this.quantidade-=1;
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentCheckd")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentinit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngOnInit(): void {
  }

}
