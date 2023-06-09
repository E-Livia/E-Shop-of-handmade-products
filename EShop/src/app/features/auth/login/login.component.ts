import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responsedata: any;

  constructor(private service: AuthServiceService, private router: Router) {
    localStorage.clear();
  }

  Login = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  ProceedLogin() {
    if (this.Login.valid) {
      this.service.ProceedLogin(this.Login.value).subscribe(
        {
          next: (response) => {
            console.log(response);
            if (response) {
              localStorage.setItem('Role', response.Role);
              localStorage.setItem('Username', response.Username);
              localStorage.setItem('token', response.JWTToken);
              localStorage.setItem('refreshToken', response.RefreshToken);

              if(response.Role==="admin"){
                this.router.navigate(['admin-main-page']);
              }
              else
              this.router.navigate(['']);
            }
          },
          error: (error) => {
            console.error(error);
            alert("Username sau parola invalide!");
          }
        }

      );
    } else {
      alert("Username sau parola invalide!");
      Object.values(this.Login.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
