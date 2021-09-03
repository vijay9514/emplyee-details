import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {Employee} from '../module/employee'


@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  apiUrl = '  http://localhost:3000/EmployeeData'

  constructor(private http:HttpClient) { }
  //get all employee
  all(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl)
  }

  //get single data
  getone(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`)
  }
  create(data: any): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.apiUrl, data)
  }
 
}
