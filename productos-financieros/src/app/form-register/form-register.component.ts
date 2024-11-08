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

  created: boolean = false;

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
      date_revision: ['', [Validators.required]]
    })
  }

  sendProduct() {
    this.formulario.patchValue({
      id: this.getId(),
      name: this.getName(),
      description: this.getDescription(), 
      logo: this.getLogo(),
      date_release: this.getDateRelease(),
      date_revision: this.convertDate(this.getDateRevision())
    })

    this.product = this.formulario.value

    if (this.formulario.valid){
      if(this.formulario.valid){
        this.productService.createProducts(this.product).subscribe(response => {
          console.log(response);
          this.formulario.reset()
          this.created = true
        })
      }
    } else {
      this.created = false
    }


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

  convertDate(date: string): string {
    const [day, month, year] = date.split('/').map(Number);

    const dateAux = new Date(year, month - 1, day)

    const formatterDate = dateAux.toISOString().split('T')[0];

    return formatterDate
  }

  getId() {
    return this.formulario.get('id')?.value
  }

  getName() {
    return this.formulario.get('name')?.value
  }

  getDescription() {
    return this.formulario.get('description')?.value
  }

  getLogo() {
    return this.formulario.get('logo')?.value
  }

  getDateRelease() {
    return this.formulario.get('date_release')?.value
  }

  getDateRevision() {
    return this.formulario.get('date_revision')?.value
  }

}
