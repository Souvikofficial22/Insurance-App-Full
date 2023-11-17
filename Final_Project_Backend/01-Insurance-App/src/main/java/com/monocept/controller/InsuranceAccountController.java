package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.entity.Customer;
import com.monocept.entity.InsuranceAccount;
import com.monocept.exception.EntityNotFoundException;
import com.monocept.exception.UserNotFoundException;
import com.monocept.service.IAgentService;
import com.monocept.service.IInsuranceAccountService;

@RestController
@RequestMapping("/insuranceapp")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class InsuranceAccountController {
	
	@Autowired
	private IInsuranceAccountService insuranceAccService;
	
//	@Autowired
//	private IAgentService agentService;
	
	// get list of all insurance accounts
		@GetMapping("/insuranceaccounts")
		public List<InsuranceAccount> findAll() {
			List<InsuranceAccount> insuranceAccounts = insuranceAccService.findAll();
			return insuranceAccounts;
		}
		
//		get all with pagination
		@GetMapping("/accounts/{offset}/{pageSize}")
		public Page<InsuranceAccount> getAllPagination(@PathVariable int offset, @PathVariable int pageSize) {
			Page<InsuranceAccount> accounts = insuranceAccService.findAll(offset, pageSize);
			return accounts;
			
		}
		// save
		@PostMapping("/save")
		public InsuranceAccount saveInsuranceAccount(@RequestBody InsuranceAccount insuranceAcc) {
			return insuranceAccService.save(insuranceAcc);
			
		}

		// save all
		@PostMapping("/saveall")
		public List<InsuranceAccount> saveAllInsuranceAccounts(@RequestBody List<InsuranceAccount> insuranceAccList) {
			return insuranceAccService.saveAll(insuranceAccList);
		}

		// get insurance Account by id
		@GetMapping("/getbyid/{insuranceAccId}")
		public InsuranceAccount findById(@PathVariable int insuranceAccId) {
			InsuranceAccount insuranceAcc = null;
			insuranceAcc = insuranceAccService.findById(insuranceAccId);
			if (insuranceAcc == null) {
				throw new UserNotFoundException("Insurance Account with id " + insuranceAccId + " is not found");
			}
			return insuranceAcc;
		}

		// delete insurance Account by id
		@DeleteMapping("/delete/{insuranceAccId}")
		public void deleteInsuranceAccIdById(@PathVariable int insuranceAccId) {
			insuranceAccService.deleteById(insuranceAccId);
		}

		// adding customers to agent
//		@PutMapping("/insuranceaccid/{agentId}/customer/{customerId}")
//		public InsuranceAccount assignCustomerToAgent(@PathVariable int agentId, @PathVariable int customerId) {
//			return insuranceAccService.addCustomerToAgent(agentId, customerId);
//		}
		
		// adding policy payment to insurance account
				@PutMapping("/id/{paymentId}/acc/{insuranceAccNo}")
				public InsuranceAccount assignPaymentToInsurAcc(@PathVariable int paymentId, @PathVariable int insuranceAccNo) {
					return insuranceAccService.addPaymentToAccount(paymentId, insuranceAccNo);
				}
		
}
