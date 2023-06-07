package com.example.demo.Repositories;

import com.example.demo.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepositorie extends JpaRepository<Employee,Long> {
}
