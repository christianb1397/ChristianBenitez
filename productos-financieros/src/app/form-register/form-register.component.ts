import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  formulario: FormGroup;

  constructor(private form: FormBuilder){
    this.formulario = this.form.group({
      id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      logo: ['', [Validators.required]],
      date_release: ['', [Validators.required]],
      date_revision: [{value:'', disabled:true}, [Validators.required]]
    })

  }

  sendProduct() {
    console.log(this.formulario)
  }

  clean() {
    this.formulario.patchValue({
      id: '',
      name: '',
      description: '', 
      logo: '',
      date_release: '',
      date_revision: ''
    });
  }
}
