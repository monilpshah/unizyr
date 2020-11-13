import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {user} from '../classes/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  constructor(private _userService:UserService,private _router:Router) { }
  name:string;
  email:string;
  mobile:number;
  flatNumber:string;
  addressLineOne:string;
  addressLineTwo:string;
  city:string;
  state:string;
  pincode:number;
  address:string;

  ngOnInit(): void {
  }
  submitForm( ){
    if(this.name=="" || this.name.includes(";;;")){
      alert("Name Invalid");
    }
    else if(this.email=="" || !(this.email.includes('@')) || this.email.includes(";;;")){
      alert("Email Invalid");
    }
    else if(String(this.mobile)=="" || String(this.mobile).includes(";;;") || (isNaN(this.mobile)) ){
      alert("Mobile Number Invalid");
    }
    else if(this.address=="" || this.flatNumber.includes(";;;") || this.addressLineOne.includes(";;;") || this.addressLineTwo.includes(";;;") || this.city.includes(";;;") || this.state.includes(";;;")){
      alert("Address Invalid");
    }
    else{
      this.address = this.flatNumber+";;;"+this.addressLineOne+";;;"+this.addressLineTwo+";;;"+this.city+";;;"+this.state+";;;"+this.pincode;
      this._userService.addUser(new user(this.name,this.email,String(this.mobile),this.address)).subscribe(
          (data:any)=>{
            alert("Submitted Successfully");
          }
        );
    }

  }

}
