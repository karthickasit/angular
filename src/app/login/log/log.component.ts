import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private fb:FormBuilder,private s:) { }

  ngOnInit() {
  }
  LoginForm = this.fb.group({
    username: [null],
    password: [null]
  });
 
sub()
{
  console.log(this.LoginForm.value);
  this.s.send(this.LoginForm.value).subscribe(res=>{console.log(res);
  localStorage.setItem("tkn",res['authorization']);
 
  });
}
}
