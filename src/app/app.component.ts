import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'nesto'];

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('nesto'),
      'hobi': new FormArray([])
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobi')).push(control);
  }

  // getControls() {
  //   return (<FormArray>this.signupForm.get('hobi')).controls;
  // }


  mojaFunkcija() {
    console.log(this.signupForm);
  }
}
