import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-prvi',
  templateUrl: './prvi.component.html',
  styleUrls: ['./prvi.component.css']
})
export class PrviComponent implements OnInit {

  signupForm: FormGroup;
  spol = 'neki spol';
  userdataemail = 'start useddata email';
  userdata: {};
  userdataname = 'Ajmoo';
  projekt: string;
  genders = ['male', 'female', 'nesto'];
  forbiddenUsernames = ['ana', 'tin'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('female'),
      'hobi': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log('signupForm.valueChanges.subscribe');
      console.log(value);
    });

    this.signupForm.statusChanges.subscribe((value) => {
      console.log('signupForm.valueChanges.subscribe');
      console.log(value);
    });

  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobi')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobi')).controls;
  }

    forbiddenNames(control: FormControl): {[s: string]: boolean} {
      if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
        return {'nameIsForbiden': true};
      }
      return null;
    }

    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1000);
      });
      return promise;
    }

  mojaFunkcija() {
    this.spol = this.signupForm.get('gender').value;
    this.userdataname = this.signupForm.get('userData.username').value;
    this.userdataemail = this.signupForm.get('userData.email').value;
    console.log(this.signupForm);
  }

}
