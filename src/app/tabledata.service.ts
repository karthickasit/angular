import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {
  details;

  constructor(private ht:HttpClient) { }
  getdata()
  {
this.ht.get("https://jsonplaceholder.typicode.com/comments").subscribe(res=>this.details=res)
  }
}
