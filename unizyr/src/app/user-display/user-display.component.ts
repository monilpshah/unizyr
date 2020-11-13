import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../classes/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  usersData:user[];
  flatNumber:string[]=[];
  addressLineOne:string[]=[];
  addressLineTwo:string[]=[];
  city:string[]=[];
  state:string[]=[];
  pincode:string[]=[];
  i:number;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    this._userService.getAllUser().subscribe(
      (data:any)=>{
        // console.log(data);
        this.usersData = data;
        for(this.i=0;this.i<this.usersData.length;this.i++){
          this.flatNumber[this.i] = data[this.i].address.split(";;;")[0];
          this.addressLineOne[this.i] = data[this.i].address.split(";;;")[1];
          this.addressLineTwo[this.i] = data[this.i].address.split(";;;")[2];
          this.city[this.i] = data[this.i].address.split(";;;")[3];
          this.state[this.i] = data[this.i].address.split(";;;")[4];
          this.pincode[this.i] = data[this.i].address.split(";;;")[5];
        }
      }
    );
  }

}
