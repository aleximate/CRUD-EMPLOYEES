package com.example.demo.Controller;

import com.example.demo.Repositories.EmployeeRepositorie;
import com.example.demo.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class EmployeeController {
    @Autowired
    private EmployeeRepositorie employeeRepositorie;
    @GetMapping("/empleados")
    public List<Employee> ListEmployees(){
        return employeeRepositorie.findAll();
    }
}
