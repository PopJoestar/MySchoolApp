import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule } from '../app/core/core.module';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './shared/table/table.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DialogService } from 'primeng/dynamicdialog';
import { StudentEditComponent } from './edit/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TableComponent,
    StudentDetailsComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    TableModule,
    HttpClientModule
  ],
  entryComponents: [
    StudentEditComponent
  ],
  providers: [ConfirmationService, MessageService, DialogService],
  bootstrap: [AppComponent],

})
export class AppModule { }
