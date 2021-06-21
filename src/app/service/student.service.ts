import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url: string = "../assets/data/students.json";

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this._url);
  }
}
