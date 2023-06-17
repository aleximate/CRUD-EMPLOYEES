package com.example.demo.Controller;

import com.example.demo.Exceptions.ExceptionNotFound;
import com.example.demo.Repositories.EmployeeRepositorie;
import com.example.demo.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepositorie employeeRepositorie;
    @GetMapping("/employees")
    public List<Employee> ListEmployees(){
        return employeeRepositorie.findAll();
    }

    @PostMapping("/employees")
    @ResponseBody
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeRepositorie.save(employee);
    }
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee>getEmployeeById(@PathVariable Long id){
        Employee employee= employeeRepositorie.findById(id).orElseThrow(()->new RuntimeException("Doesn't exists this ID: "+id));

        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    @ResponseBody
    public ResponseEntity<Employee>updateEmployee(@PathVariable Long id,@RequestBody Employee employee){
        Employee employee1= employeeRepositorie.findById(id).orElseThrow(()->new RuntimeException("Doesn't exists this ID: "+id));

        employee1.setName(employee.getName());
        employee1.setLastname(employee.getLastname());
        employee1.setEmail(employee.getEmail());

        Employee updatedEmployee=employeeRepositorie.save(employee1);
        return ResponseEntity.ok(updatedEmployee);

    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>>deleteEmployee(@PathVariable Long id){
        Employee employee= employeeRepositorie.findById(id)
                .orElseThrow(() -> new RuntimeException("No existe el empleado con el ID : " + id));

        employeeRepositorie.delete(employee);
        Map<String, Boolean> res = new HashMap<>();
        res.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(res);
    }
}
