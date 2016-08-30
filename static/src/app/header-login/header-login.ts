import {Component} from "@angular/core";
import {FormBuilder, Validators} from '@angular/common';
import {ValidationService} from "../validation-component";


@Component({
    selector:'header-login',
    template:require("./header-login.html"),
    styleUrls: ['./header-login.css']
})

export class HeaderLogin{

    loggedIn = false;
    loginForm:Object;
    isSubmitted = true;

    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            email:["",Validators.compose([Validators.required, ValidationService.emailValidator])],
            password:["",Validators.compose([Validators.required, ValidationService.passwordValidator])]
        });
    }

    doLogin(event:any, form:any) {
    this.isSubmitted = true
        if (form.valid) {
            console.log(form.value);
            event.preventDefault();
            this.loggedIn = true;
        }
    }
}


