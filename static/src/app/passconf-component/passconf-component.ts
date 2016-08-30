import {Component} from "@angular/core";
import {FormBuilder, Validators} from '@angular/common';
import { ValidationService} from '../../../validation.custom';
@Component({
    selector:'passconf-component',
    template: require('./passconf-component.html'),
    styleUrls: ['./passconf-component.css']
})

export class PassconfComponent {

    isConfirm = false;
    confirmForm:Object;
    submitted = false;

    constructor(fb: FormBuilder) {
        this.confirmForm = fb.group({
        matchingPassword: fb.group({
            password: ['', Validators.compose([Validators.required,ValidationService.passwordValidator,Validators.minLength(8)])],
            repeatPassword: ['', Validators.required]
        }, {validator: ValidationService.matchingPasswords('password', 'repeatPassword')})
        });

    }

    triggerConfirmPassword(event:any, form:any) {
    this.submitted = true;
    console.log(form)
        if (form.valid) {
        event.preventDefault();
        this.isConfirm = true;
        }
    }
}
