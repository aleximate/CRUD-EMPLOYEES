import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../Models/Employees';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http : HttpClient){}

  saveEmployees(employees:Employees): Observable<Object>{
    return this.http.post(environment.baseUrl+'/api/v1/employees',employees,{responseType: 'text'});
  }

  getEmployeesById(id:number):Observable<Employees>{
    return this.http.get<Employees>(environment.baseUrl+'/api/v1/employees'+id);
  }

  updateEmployees(id:number,employees:Employees):Observable<Object>{
    return this.http.put(environment.baseUrl+'/api/v1/employees/'+id,employees,{responseType: 'text'});
  }
  getAllEmpployees():Observable<Employees[]>{
    return this.http.get<Employees[]>(environment.baseUrl+'/api/v1/employees')
  }

  deleteEmployees(id:number):Observable<Object>{
    return this.http.delete(environment.baseUrl+'/api/v1/employees/'+id,{responseType: 'text'});
  }

}
