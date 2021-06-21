import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { SchoolClassesComponent } from './school-classes/school-classes.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeesComponent } from './fees/fees.component';
import { SchoolSettingsComponent } from './school-settings/school-settings.component';
import { P404Component } from './error/p404/p404.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'classes', component: SchoolClassesComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'settings', component: SchoolSettingsComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: '**', component: P404Component }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [
  StudentsComponent,
  TeachersComponent,
  AttendanceComponent,
  FeesComponent,
  SchoolClassesComponent,
  SchoolSettingsComponent,
  P404Component,
  StudentDetailsComponent
]