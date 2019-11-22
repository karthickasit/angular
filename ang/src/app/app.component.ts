import { Component } from '@angular/core';
declare var require: any
var capsLock = require("capslock");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';
  st;
  constructor()
  {
  
   
  }
 ngOnInit()
  {
    capsLock.observe(function (status) {
      console.log(status);
      this.st=status;
      alert(this.st);
      document.getElementById('g').innerHTML=this.st;
   });
  }
}
