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

import com.monocept.entity.InsurancePlan;
import com.monocept.service.IInsurancePlanService;

@RestController
@RequestMapping("/insuranceplan")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class InsurancePlanController {

	@Autowired
	private IInsurancePlanService service;
	
	@PostMapping("/save")
	public InsurancePlan save(@RequestBody InsurancePlan insurancePlan) {
		return service.save(insurancePlan);
	}
	
	@GetMapping("/get-all")
	public List<InsurancePlan> getAllInsurancePlan(
			@RequestParam(name = "page", defaultValue = "0") int page,
	        @RequestParam(name = "size", defaultValue = "10") int size
			){
		return service.getAllInsurancePlan(page,size);
	}
	
	@GetMapping("/get-id/{id}")
	public InsurancePlan getById(@PathVariable int id) {
		return service.getInsurancePlanById(id);
	}
	
	
	@PutMapping("/update")
	public InsurancePlan update(@RequestBody InsurancePlan insuranceplan) {
		System.out.println("Inside update");
		return service.update(insuranceplan);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deletePlan(@PathVariable int id) {
		service.deleteById(id);
	}
}
