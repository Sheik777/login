import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })
  useronvalid: boolean = false
  constructor(private route: Router) { }
  ngOnInit(): void { }
  login() {
    if (this.loginform.controls.username.value != 'sheik' ||
      this.loginform.controls.password.value != 'sheik123') {
      this.useronvalid = true;


    } else {
      this.useronvalid = false;
      this.route.navigateByUrl('/home');
      localStorage.setItem('username', this.loginform.controls.username.value);

    }
  }
}
