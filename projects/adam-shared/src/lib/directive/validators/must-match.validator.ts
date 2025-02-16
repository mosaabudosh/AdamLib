import { UntypedFormGroup } from '@angular/forms';


export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: UntypedFormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];


        if (!control || !matchingControl) {
          return null;
        }


        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }


        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
