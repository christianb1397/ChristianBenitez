import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { FormRegisterComponent } from './form-register/form-register.component';

const routes: Routes = [
  {path: 'bp/products', component: ProductListComponent},
  {path: 'bp/products/create', component: FormRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
