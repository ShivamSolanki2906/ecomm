import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { SignUp } from '../data.type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller : SellerService , private router : Router  ) { }
  showLogin = false;
  authErrorMsg:string = "";
  ngOnInit(): void {
    this.seller.relodeSeller()
  } 
    
  signUpForm(data:SignUp):void{
     this.seller.userSellerSignUp(data)  
  }
  
    
  logInForm(data:SignUp):void{
    this.authErrorMsg = "";
    // console.log(data);
    this.seller.userLogin(data);
    this.seller.isSellerLogInError.subscribe((isError)=> {
      if(isError){
        this.authErrorMsg  = "Email or PassWord in Not Correct"
      }
    })
    
 }
  openLogIn(){
    this.showLogin= true
  }
  openSingUp(){
    this.showLogin = false
  }
}
