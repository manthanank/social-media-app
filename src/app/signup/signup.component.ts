import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(private http: HttpClient, private authservice: AuthService) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.authservice.signup(this.signupForm.value).subscribe(data => {
      console.log(data);
    })
  }
}
