import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrl: './account-information.component.scss'
})
export class AccountInformationComponent {
 
 public AccountForm = new FormGroup({
    Username: new FormControl(''),
    PhoneNumber: new FormControl(''),
  });
  onSubmit(): void {
    // Process checkout data here
    console.log(
    this.AccountForm.controls.Username.value,
      this.AccountForm.controls.PhoneNumber.value,
    );
  }
}
