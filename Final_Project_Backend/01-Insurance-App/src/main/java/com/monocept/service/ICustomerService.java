package com.monocept.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.monocept.entity.Customer;

public interface ICustomerService {

	Customer save(Customer customer);

	List<Customer> findAll();

	List<Customer> saveAll(List<Customer> customerList);

	Customer findById(int custId);

	void deleteById(int custId);

	Customer addDocToCustomer(int custId, int docId);

	Customer addInsuranceToCustomer(int custId, int insuranceAccNo);

	Page<Customer> findAll(int offset, int pageSize);

	Customer getCustomerByUsername(String username);

	Customer updateCustomer(Customer customer, int custId);

	void saveCustomerWithAgent(int id, Customer customer);


}
