import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService,private router:Router) {}

  ngOnInit() {
  }
  signOut() {
    this.authenticationService.SignOut();
    this.router.navigate(['/home']);
  }
}
