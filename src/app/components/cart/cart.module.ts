import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedProductModule } from "../shared-product/shared-product.module";
import { CartItemComponent } from './cart-item/cart-item.component';



const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];


@NgModule({
    declarations: [
        CartComponent,
        CartItemComponent
    ],
    exports: [RouterModule],
    imports: [
        CommonModule,
        SharedMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedProductModule
    ]
})
export class CartModule { }
