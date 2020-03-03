import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-drugi',
  templateUrl: './drugi.component.html',
  styleUrls: ['./drugi.component.css']
})
export class DrugiComponent implements OnInit {

  // signupForm: FormGroup;
  zadatakForma: FormGroup;
  name = 'kreni';
  email: string;
  projekt: string;

  ngOnInit() {
    this.zadatakForma = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalid),
      'emailMoj': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });

    this.zadatakForma.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.zadatakForma.statusChanges.subscribe((value) => {
      console.log(value);
    });

  }

  onSaveProject() {
    this.email = this.zadatakForma.get('emailMoj').value;
    this.name = this.zadatakForma.get('projectName').value;
    this.projekt = this.zadatakForma.get('projectStatus').value;
    console.log(this.zadatakForma.value);
  }

}
