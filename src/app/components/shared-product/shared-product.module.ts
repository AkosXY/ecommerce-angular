import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        ProductDetailDialogComponent,
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule

    ],
    exports: [
        ProductDetailDialogComponent,
        ProductCardComponent
    ]

})
export class SharedProductModule{ }
