import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  zadatakForma: FormGroup;
  name = 'kreni';
  spol = 'neki spol';
  userdataemail = 'start useddata email';
  userdata: {};
  userdataname = 'Ajmoo';
  email: string;
  projekt: string;
  genders = ['male', 'female', 'nesto'];
  forbiddenUsernames = ['Crish', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('', [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('nesto'),
      'hobi': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    });

    this.zadatakForma = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalid),
      'emailMoj': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
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
        }, 1500);
      });
      return promise;
    }


  mojaFunkcija() {
    this.spol = this.signupForm.get('gender').value;
    this.userdataname = this.signupForm.get('userData.username').value;
    this.userdataemail = this.signupForm.get('userData.email').value;
    console.log(this.signupForm);
  }


  onSaveProject() {
    this.email = this.zadatakForma.get('emailMoj').value;
    this.name = this.zadatakForma.get('projectName').value;
    this.projekt = this.zadatakForma.get('projectStatus').value;
    console.log(this.zadatakForma.value);
  }
}
