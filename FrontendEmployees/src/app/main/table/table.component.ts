import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Models/Employees';
import { EmployeesService } from 'src/app/Services/employees.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  employees:Employees[]

  constructor(
    private service:EmployeesService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.service.getAllEmpployees().subscribe(res=>
      {
        this.employees=res;
      }

    )
  }

  update(id:number){
    this.router.navigate(['/update-employee',id])
  }

  delete(id:number){
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.value){
        this.service.deleteEmployees(id).subscribe({
          next:(res)=>{
          console.log(res);
          this.getAllEmployees();
          swal.fire(
            'Employee delete',
            'The employee has been delete succesfully',
            'success'
          )
      }
    })
      }
    })
  }

}


