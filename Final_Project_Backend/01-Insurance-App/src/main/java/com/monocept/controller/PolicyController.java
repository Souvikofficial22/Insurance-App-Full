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

import com.monocept.entity.Policy;
import com.monocept.entity.PolicyDetails;
import com.monocept.service.IPolicyService;


@RestController
@RequestMapping("/policy")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class PolicyController {

	@Autowired
	private IPolicyService service;
	
	@PostMapping("/save")
	public Policy save(@RequestBody Policy policy) {
		return service.save(policy);
	}
	
	@GetMapping("/get-all")
	public List<Policy> getAllPolicy(
			@RequestParam(name = "page", defaultValue = "0") int page,
	        @RequestParam(name = "size", defaultValue = "10") int size
			){
		return service.getAllPolicy(page,size);
	}
	
	@GetMapping("/get-id/{id}")
	public Policy getById(@PathVariable int id) {
		return service.getPolicyById(id);
	}
	
	
	@PutMapping("/update")
	public Policy update(@RequestBody Policy policy) {
		return service.update(policy);
	}
	
	@PutMapping("/update/policy-details/{id}")
	public Policy updateDetails(@PathVariable int id,@RequestBody PolicyDetails details) {
		
		return service.updateDetails(id,details);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		service.deleteById(id);
	}
}
