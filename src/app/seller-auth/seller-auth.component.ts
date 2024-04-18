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

  ngOnInit(): void {
    this.seller.relodeSeller()
  } 
  
 
  
  signUpForm(data:SignUp):void{
     this.seller.userSellerSignUp(data)
    
  }

}
