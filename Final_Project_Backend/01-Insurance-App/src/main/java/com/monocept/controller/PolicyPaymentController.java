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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.entity.Agent;
import com.monocept.entity.PolicyPayment;
import com.monocept.exception.EntityNotFoundException;
import com.monocept.exception.UserNotFoundException;
import com.monocept.service.IPolicyPaymentService;

@RestController
@RequestMapping("/policypayment")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class PolicyPaymentController {
	
	@Autowired
	IPolicyPaymentService policyPaymentService;
	
	// get list of all policy payments
		@GetMapping("/payments")
		public List<PolicyPayment> findAll() {
			List<PolicyPayment> payments = policyPaymentService.findAll();
			return payments;
		}

//		get all with pagination
		@GetMapping("/payments/{offset}/{pageSize}")
		public Page<PolicyPayment> getAllPagination(@PathVariable int offset, @PathVariable int pageSize) {
			Page<PolicyPayment> payments = policyPaymentService.findAll(offset, pageSize);
			return payments;
			
		}
		
		// save
		@PostMapping("/save")
		public PolicyPayment savePolicyPayment(@RequestBody PolicyPayment payment) {
			
			return policyPaymentService.save(payment);
		}

		// save all
		@PostMapping("/saveall")
		public List<PolicyPayment> saveAllPolicyPayments(@RequestBody List<PolicyPayment> policyList) {
			return policyPaymentService.saveAll(policyList);
		}

		// get policy by id
		@GetMapping("/getbyid/{paymentId}")
		public PolicyPayment findById(@PathVariable int paymentId) {
			PolicyPayment payment = null;
			payment = policyPaymentService.findById(paymentId);
			if (payment == null) {
				throw new UserNotFoundException("Payment with id " + paymentId + " is not found");
			}
			return payment;
		}

		// delete payment by id
		@DeleteMapping("/delete/{paymentId}")
		public void deletePaymentById(@PathVariable int paymentId) {
			policyPaymentService.deleteById(paymentId);
		}

}
