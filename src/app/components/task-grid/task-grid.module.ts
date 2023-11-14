import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TaskGridComponent } from './task-grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: TaskGridComponent
  }
];


@NgModule({
  declarations: [
    TaskGridComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]

})
export class TaskGridModule { }
