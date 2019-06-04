import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data ={
    title :'First Angular App'
  }
  onButtonClick() {
    alert("Hello");
  }
  onKeyUp(newTitle:string){
    this.data.title=newTitle;
  }
}
