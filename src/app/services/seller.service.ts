import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http',

export class SellerService {

  constructor(private http : HttpClient) { }
  userSellerSignUp(data:SignUp){
    // console.log("Service called");
    return this.http.post('http://localhost:3000/seller',data)
    
  }
}
