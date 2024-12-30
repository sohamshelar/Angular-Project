import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
 {
  name:string='';
  email:string='';
  password:string='';
  errorMessage:string='';
  loggedIn:boolean=false;
  clickMessage:string='';

  correctEmail:string='sohamshelar007@gmail.com';
  correctPassword:string='pass123';
  
  onSubmit(){
    if(this.email !== this.correctEmail)
    {
      this.errorMessage='incorrect email Id .Please retry again';

    }
    else if(this.password !== this.correctPassword)
    {
      this.errorMessage='Incorrect Password .Please retry again';
    }
    else
    {
        this.errorMessage='';
        this.loggedIn= true;
        this.clickMessage='';
    }
   }
   onImageClick()
   {
    if(!this.loggedIn)
      this.clickMessage='Please login first to access the content';
   }
  
  
  }
