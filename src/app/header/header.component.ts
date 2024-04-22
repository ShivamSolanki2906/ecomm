import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType:String = "default"

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
        // console.log(val.url); 
        if(val.url){
          console.log(val.url);
          if(localStorage.getItem('seller') && val.url.includes('seller')){
            this.menuType ="seller"
            console.log("seller area");   
          }else{
            console.log("not seller area");
            this.menuType= "default"
            
          }
        } 
    })
  }

}
