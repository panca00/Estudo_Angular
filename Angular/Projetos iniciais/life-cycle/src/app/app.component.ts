import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';

  isAliveCheckSample:boolean=true

  destroi():void{
    this.isAliveCheckSample=false
  }
}
