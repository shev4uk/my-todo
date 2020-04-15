import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
