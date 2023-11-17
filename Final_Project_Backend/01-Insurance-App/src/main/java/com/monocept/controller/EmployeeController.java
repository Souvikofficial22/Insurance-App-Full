package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.entity.Employee;
import com.monocept.service.IEmployeeService;



@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class EmployeeController {

	@Autowired
	private IEmployeeService service;
	
	@PostMapping("/save")
	public Employee save(@RequestBody Employee employee) {
		return service.save(employee);
	}
	
	@GetMapping("/get-all")
	public List<Employee> getAllEmployee(
			@RequestParam(name = "page", defaultValue = "0") int page,
	        @RequestParam(name = "size", defaultValue = "10") int size
			){
		return service.getAllEmployee(page,size);
	}
	
	@GetMapping("/get-id/{id}")
	public Employee getById(@PathVariable int id) {
		return service.getEmployeeById(id);
	}
	
	@GetMapping("/get-username/{username}")
	public Employee getByUsername(@PathVariable String username) {
		return service.getEmployeeByUsername(username);
	}
	
	@PutMapping("/update")
	public Employee update(@RequestBody Employee employee) {
		return service.update(employee);
	}
	
	@PutMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
}
