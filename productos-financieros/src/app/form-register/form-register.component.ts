import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ProductInterface } from '../../../../be-productos-financieros/src/interfaces/product.interface';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  formulario: FormGroup;

  starDate: string = '';

  endDate: string = '';

  product: ProductInterface = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: new Date(),
    date_revision: new Date()
  };

  constructor(private form: FormBuilder, private productService: ProductService){

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
    console.log(this.formulario.value.description)
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

  hasErrorID(controlName: string, errorType: string){
    return this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched
  }

  updateDate() {
    this.starDate = this.formulario.get('date_release')?.value

    if(this.starDate) {
      const startDateAux = new Date(this.starDate)

      const nextYearDate = new Date(startDateAux.setFullYear(startDateAux.getFullYear() + 1 ));

      this.endDate = this.formatDate(nextYearDate);
      
      this.formulario.patchValue({
        date_revision: this.endDate
      });
    }
  }

  formatDate(date: Date){
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

}
