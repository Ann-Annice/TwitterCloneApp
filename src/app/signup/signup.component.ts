import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name=""
  dob=""
  phone_number=""
  place=""
  email=""
  password=""
  confirm_password=""

  readValues=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phone_number":this.phone_number,
      "place":this.place,
      "email":this.email,
      "password":this.password,
      "confirm_password":this.confirm_password
    }
    console.log(data)
  }
 

  ngOnInit(): void {
  }

}
