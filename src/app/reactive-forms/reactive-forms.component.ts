import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { cellphoneNumber } from '../utils/custom-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  userForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ){
    this.userForm=this.formBuilder.group({
      name:['',[Validators.required]],

      cellphone:['',[Validators.required,cellphoneNumber]], 
      email:['',[Validators.required,Validators.email]],

      password:['',Validators.required]

    })
  }
  get emailControl(){

    return this.userForm.controls['email']
  }

  get emailControlsInvalid(){
    return this.emailControl.invalid && this.emailControl.touched
  }

  onSubmit():void {
    
    console.log(this.userForm)


    
    if(this.userForm.invalid){
      alert('No ha ingresado los datos correctamente')
    }
    else{
      console.log(this.userForm.value)

    }
  }
    

}
