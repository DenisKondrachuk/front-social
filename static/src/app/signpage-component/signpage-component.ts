import {Component} from "@angular/core";
import {Validators, FormBuilder} from "@angular/common";
import {ValidationService} from "../validation-component";

@Component({
    selector:'signpage-component',
    template: require('./signpage-component.html')
})

export class SignpageComponent {

    signSuccess = false;
    signForm:Object;
    isSubmitted = false;

    constructor(fb: FormBuilder) {
        this.signForm = fb.group({
            name:["",Validators.compose([Validators.required, ValidationService.nameValidation])],
            email:["",Validators.compose([Validators.required, ValidationService.emailValidator])],
            password:["",Validators.compose([Validators.required, ValidationService.passwordValidator])]
        });
    }

    doSign(event:any, form:any) {
        this.isSubmitted = true
        if (form.valid) {
            console.log(form.value);
            event.preventDefault();
            this.signSuccess = true;
        }
    }

}