import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../student.entity';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public defaultSort: any[] = [
    { field: 'firstname', order: 1 },
    { field: 'lastname', order: 1 }
  ];

  public datatype: string = 'student';
  public students: Student[] = [];
  public cols: any[] = [];

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this._studentService.getStudents()
      .subscribe(result => this.students = result);

    this.cols = [
      { field: 'firstname', header: 'Firstname' },
      { field: 'lastname', header: 'Lastname' },
      { field: 'registrationNumber', header: 'Registration ID' },
    ]

  }

}
