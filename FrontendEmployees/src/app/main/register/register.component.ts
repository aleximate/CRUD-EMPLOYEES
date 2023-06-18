import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Models/Employees';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  employees:Employees= new Employees()

  constructor(
    private service:EmployeesService,
    private router:Router
  )
  {}
  ngOnInit(): void {}

  saveEmployees(){
    this.service.saveEmployees(this.employees).subscribe({
      next:(res)=>{
          this.redirect()
      },error: () => {
        console.log("errores");
      }
    })
  }

  redirect(){
    this.router.navigate(['/main']);
  }

  onSubmitForm(){
    console.log(this.employees);
    this.saveEmployees();
  }


}
