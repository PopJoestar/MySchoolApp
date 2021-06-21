import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


const material = [
  ButtonModule,
  InputTextModule,
  ToolbarModule,
  FileUploadModule,
  ToggleButtonModule,
  ConfirmDialogModule,
  ToastModule,
  DialogModule,
  RadioButtonModule,
  InputNumberModule,
  DynamicDialogModule
];

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
