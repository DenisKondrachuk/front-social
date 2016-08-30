import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from '@angular/common';
import { ValidationService} from '../../../validation.custom';

@Component({
    selector:'resetpw-component',
    template: require('./resetpw-component.html'),
    styleUrls: ['./resetpw-component.css']
})

export class ResetpwComponent implements OnInit{

    isReset = false;
    resetForm:Object;
    isSubmitted = false;

    constructor(fb: FormBuilder) {
        this.resetForm = fb.group({
            email:["", Validators.compose([Validators.required, ValidationService.emailValidator])],
        });

    }

    ngOnInit(){
        console.log(this.isReset)
    }

    triggerResetPassword(event:any, form:any) {
    this.isSubmitted = true;
    console.log(form)
        if (form.valid) {
        event.preventDefault();
        this.isReset = true;
        }
    }
}
