/**
 * Created by deniskondrachuk on 22.08.16.
 */

import { FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES } from '@angular/common';

export class ValidationService {
    static emailValidator(control:Control):{[s: string]: boolean} {
        var EMAIL_REGEXP = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return {"incorrectMailFormat": true};
        }

        return null;
    }

    static  vatValidator(control:Control):{[s: string]: boolean} {
        var VAT_REGEXP = /[A-Z0-9]/i;

        if (control.value != "" && (control.value.length <= 8 || !VAT_REGEXP.test(control.value))) {
            return {"incorrectVatFormat": true};
        }

        return null;
    }

    static  numberValidaton(control:Control):{[s: string]: boolean} {
        var NUMBER_REGEXP = /[0-9]/i;

        if (control.value != "" && (control.value.length <= 2 || !NUMBER_REGEXP.test(control.value))) {
            return {"incorrectNumberFormat": true};
        }

        return null;
    }

    static  zipValidation(control:Control):{[s: string]: boolean} {
        var ZIP_REGEXP = /^\d{5}(?:[-\s]\d{2,8})?$/i;

        if (control.value != "" && (control.value.length <= 4 || !ZIP_REGEXP.test(control.value))) {
            return {"incorrectZipFormat": true};
        }

        return null;
    }

    static  nameValidation(control:Control):{[s: string]: boolean} {
        var name_REGEXP = /^[a-zA-Z ]{2,30}$/i;

        if (control.value != "" && (control.value.length <= 1 || !name_REGEXP.test(control.value))) {
            return {"incorrectNameFormat": true};
        }

        return null;
    }

    static  cardValidation(control:Control):{[s: string]: boolean} {
        var CARD_REGEXP = /^(\d{4}[- ]){3}\d{4}|\d{16}$/i;

        if (control.value != "" && (control.value.length <= 15 || !CARD_REGEXP.test(control.value))) {
            return {"incorrectCardFormat": true};
        }

        return null;
    }

    static addressValidation(control:Control):{[s: string]: boolean} {
        var ADDRESS_REGEX = /^[A-z0-9\.\,\-\_\\\/ ]{2,30}$/i;

        if (control.value != "" && (control.value.length <= 5 || !ADDRESS_REGEX.test(control.value))) {
            return {"incorrectAddressFormat": true};
        }

        return null;
    }

    static matchingPasswords(passwordKey:string, passwordConfirmationKey:string) {
        return (group:ControlGroup) => {
            let passwordInput = group.controls[passwordKey];
            let passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
        }
    }

    static passwordValidator(control:Control):{[s: string]: boolean} {
        var PASSWORD_REGEXP = /^[a-zA-Z0-9]+$/i;

        if (control.value != "" && (control.value.length <= 8 || !PASSWORD_REGEXP.test(control.value))) {
            return {"incorrectPasswordFormat": true};
        }

        return null;
    }

    static  taxPayerValidation(control:Control):{[s: string]: boolean} {
        var TAX_REGEXP = /^[a-zA-Z0-9\.\, ]{2,30}$/i;

        if (control.value != "" && (control.value.length <= 3 || !TAX_REGEXP.test(control.value))) {
            return {"incorrectTaxPayerFormat": true};
        }

        return null;
    }

    static  phoneNumberValidaton(control:Control):{[s: string]: boolean} {
        var PHONENUMBER_REGEXP = /[0-9\\\-\+ ]/i;

        if (control.value != "" && (control.value.length <= 2 || !PHONENUMBER_REGEXP.test(control.value))) {
            return {"incorrectNumberFormat": true};
        }

        return null;
    }
}