
import { numberAttribute } from '@angular/core';
import { AbstractControl, ValidationErrors} from '@angular/forms';

export function cellphoneNumber(control:AbstractControl):ValidationErrors|null|number{
    if (typeof control.value =='string'){
        return {
        Sesolicitanumero:true      
        }
}
return null
}
