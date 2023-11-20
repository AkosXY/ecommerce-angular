import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]

})
export class CartModule { }
