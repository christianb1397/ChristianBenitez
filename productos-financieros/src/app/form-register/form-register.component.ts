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
    this.productService.createProducts(this.product).subscribe({
      
    })
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
