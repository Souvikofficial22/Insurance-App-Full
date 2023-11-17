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
import com.monocept.entity.Customer;
import com.monocept.entity.Customer;
import com.monocept.exception.EntityNotFoundException;
import com.monocept.exception.UserNotFoundException;
import com.monocept.service.ICustomerService;

@RestController
@RequestMapping("/customerapp")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class CustomerController {
	@Autowired
	private ICustomerService customerService;

	// get list of all customers
	@GetMapping("/customers")
	public List<Customer> findAll() {
		List<Customer> customers = customerService.findAll();
		return customers;
	}
	
//	get all with pagination
	@GetMapping("/customers/{offset}/{pageSize}")
	public Page<Customer> getAllPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<Customer> customers = customerService.findAll(offset, pageSize);
		return customers;
		
	}

	// save
	@PostMapping("/save")
	public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer) {
		customerService.save(customer);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	// save
		@PostMapping("/save/agent/{id}")
		public ResponseEntity<Customer> saveCustomerWithAgent(@PathVariable int id,@RequestBody Customer customer) {
			customerService.saveCustomerWithAgent(id,customer);
			return new ResponseEntity<>(HttpStatus.CREATED);
		}

	// save all
	@PostMapping("/saveall")
	public List<Customer> saveAllCustomers(@RequestBody List<Customer> customerList) {
		return customerService.saveAll(customerList);
	}

	// get customer by id
	@GetMapping("/getbyid/{custId}")
	public Customer findById(@PathVariable int custId) {
		Customer customer = null;
		customer = customerService.findById(custId);
		if (customer == null) {
			throw new UserNotFoundException("Customer with id " + custId + " is not found");
		}
		return customer;
	}

	@PutMapping("/update/customerid/{custId}")
	public Customer updateCustomer(@RequestBody Customer customer,@PathVariable int custId) {
		return customerService.updateCustomer(customer, custId);
	}
	
	// delete customer by id
	@PutMapping("/delete/{custId}")
	public void deleteCustomerById(@PathVariable int custId) {
		customerService.deleteById(custId);
	}
	
	//get customer by username
			@GetMapping("/getusername/{username}")
			public Customer getByUsername(@PathVariable String username) {
				return customerService.getCustomerByUsername(username);
			}

	// adding documents to customer
	@PutMapping("/customerid/{custId}/document/{docId}")
	public Customer assignDocToCustomer(@PathVariable int custId, @PathVariable int docId) {
		return customerService.addDocToCustomer(custId, docId);
	}

	// adding insurance account to customer
	@PutMapping("/customerid/{custId}/insuranceacc/{insuranceAccNo}")
	public Customer assignInsuranceToCustomer(@PathVariable int custId, @PathVariable int insuranceAccNo) {
		return customerService.addInsuranceToCustomer(custId, insuranceAccNo);
	}

}
