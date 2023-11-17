package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.entity.PolicyDetails;
import com.monocept.service.IPolicyDetailsService;


@RestController
@RequestMapping("/policydetails")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class PolicyDetailsController {

	@Autowired
	private IPolicyDetailsService service;
	
	@PostMapping("/save/policy-id/{id}")
	public PolicyDetails save(@PathVariable int id,@RequestBody PolicyDetails policyDetails) {
		return service.save(id,policyDetails);
	}
	
	@GetMapping("/get-all")
	public List<PolicyDetails> getAllPolicyDetails(
			@RequestParam(name = "page", defaultValue = "0") int page,
	        @RequestParam(name = "size", defaultValue = "10") int size
			){
		return service.getAllPolicyDetails(page,size);
	}
	
	@GetMapping("/get-id/{id}")
	public PolicyDetails getById(@PathVariable int id) {
		return service.getPolicyDetailsById(id);
	}
	
	
	@PutMapping("/update")
	public PolicyDetails update(@RequestBody PolicyDetails policyDetails) {
		return service.update(policyDetails);
	}
}
