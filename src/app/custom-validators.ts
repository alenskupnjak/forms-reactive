import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators {
  static invalidProjectName (control: FormControl):{[s: string]: boolean} {
    if (control.value === 'test1') {
      return {'invalidProjectName': true};
    }
    return null;
  }

  static asyncInvalid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test2') {
          resolve({'invalidProjectName': true});
        } else {
          resolve (null);
        }
      }, 1500);
    });
    return promise;
  }
}
