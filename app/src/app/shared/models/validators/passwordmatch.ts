import { AbstractControl } from "@angular/forms"

export const PasswordsMatchValidator = (pass:string,conf:string) => {
    const validator = (form:AbstractControl) => {
        const passwordControl = form.get(pass);
        const confirmPasswordControl = form.get(conf);

        if (!passwordControl || !confirmPasswordControl) return;

        if (passwordControl.value !== confirmPasswordControl.value){
            confirmPasswordControl.setErrors({notMatch:true})
        }
        else {
            const errors= confirmPasswordControl.errors;
            if (!errors) return;

            delete errors.notMatch;
            confirmPasswordControl.setErrors(errors);

        }
    }
    return validator
}