import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './components/shared/shared.component';
import { SharedDirective } from './directives/shared.directive';
import { SharedPipe } from './pipes/shared.pipe';



@NgModule({
  declarations: [
    SharedComponent,
    SharedDirective,
    SharedPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponent,
    SharedDirective,
    SharedPipe,
  ]
})
export class SharedModule { }
