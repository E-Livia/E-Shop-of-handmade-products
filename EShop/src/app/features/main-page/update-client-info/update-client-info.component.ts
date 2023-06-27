import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { ClientServiceService } from 'src/app/core/services/client-service.service';

@Component({
  selector: 'app-update-client-info',
  templateUrl: './update-client-info.component.html',
  styleUrls: ['./update-client-info.component.scss']
})
export class UpdateClientInfoComponent implements OnInit {
  loggedInUsername:string;

  constructor(private authService:AuthServiceService, private clientService:ClientServiceService, private router:Router) {
    this.loggedInUsername=authService.getLoggedInUsername();
   }

  ngOnInit(): void {
  }

  autoTips: Record<string, Record<string, string>> = {
    ro: {
      required: 'Campurile trebuie completate'
    }
  }

  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    emailAddress: new FormControl("", [Validators.required, Validators.email]),
    phoneNo: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")])
  });

  submitForm() {
    if (this.form.valid) {
      const firstName = this.form.get('firstName')?.value || '';
      const lastName = this.form.get('lastName')?.value || '';
      const emailAddress = this.form.get('emailAddress')?.value || '';
      const phoneNo = this.form.get('phoneNo')?.value || 0;

      this.clientService.updateClientInfo(this.loggedInUsername, firstName, lastName, emailAddress, phoneNo)
      .subscribe(
        (response) => {
          console.log('Datele au fost actualizate în baza de date.');
          this.router.navigate(['profile']);
        },
        (error) => {
          console.error('A apărut o eroare la actualizarea bazei de date:', error);
        }
      );
    }
    else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  goBack(){
    this.router.navigate(['profile']);
  }
}
