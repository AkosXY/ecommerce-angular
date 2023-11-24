import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {CookieService} from 'ngx-cookie-service';

import { HomeComponent } from './components/home/home.component';
import { SharedMaterialModule } from './shared/shared.material.module';
import { ProductCardComponent } from './components/shared-product/product-card/product-card.component';
import { ProductDetailDialogComponent } from './components/shared-product/product-detail-dialog/product-detail-dialog.component';
import { ProductGridModule } from './components/product-grid/product-grid.module';





@NgModule({
  declarations: [
    AppComponent,
    

    ToolbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedMaterialModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,

  ],
/*   exports:[    ProductDetailDialogComponent,
    ProductCardComponent], */
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
