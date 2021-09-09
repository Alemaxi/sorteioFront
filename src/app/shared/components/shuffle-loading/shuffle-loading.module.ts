import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuffleLoadingComponent } from './shuffle-loading.component';



@NgModule({
  declarations: [
    ShuffleLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShuffleLoadingComponent,
  ]
})
export class ShuffleLoadingModule { }
