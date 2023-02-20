import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {

  }

  onLogin() {
    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
    })
  }
}
