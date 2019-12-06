import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authenticationService: AuthenticationService,private router:Router) {
    
  }

  ngOnInit() {
    this.authenticationService.userData.subscribe(res=>{
      console.log('res',res);
      if(res){
        console.log('res',res);
        this.router.navigate(['/dashboard']);
      }
    });
  }
  signUp() {
    console.log('signUp');
    this.authenticationService.SignUp(this.email, this.password);
    this.email='';
     this.password='';
  }

  signIn() {
    console.log('signIn');
    this.authenticationService.SignIn(this.email, this.password);
     this.email='';
     this.password='';
  }
}
