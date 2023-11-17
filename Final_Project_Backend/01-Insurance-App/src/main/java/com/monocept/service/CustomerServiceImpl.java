package com.monocept.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.monocept.entity.Customer;
import com.monocept.entity.Customer;
import com.monocept.entity.Document;
import com.monocept.entity.InsuranceAccount;
import com.monocept.entity.InsurancePlan;
import com.monocept.entity.Status;
import com.monocept.exception.EntityNotFoundException;
import com.monocept.repository.CustomerRepository;
import com.monocept.repository.FileRepository;
import com.monocept.repository.InsuranceAccountRepository;

@Service
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	CustomerRepository customerRepo;

	@Autowired
	FileRepository fileRepo;

	@Autowired
	InsuranceAccountRepository insuranceAccRepo;

	@Autowired
	IAgentService agentService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public Customer save(Customer customer) {
		customer.getUser().setPassword(bCryptPasswordEncoder.encode(customer.getUser().getPassword()));
		customerRepo.save(customer);
		return customer;

	}

	@Override
	public List<Customer> findAll() {
		return customerRepo.findAll();
	}

	@Override
	public List<Customer> saveAll(List<Customer> customerList) {
		return customerRepo.saveAll(customerList);
	}

	@Override
	public Customer findById(int custId) {
		return customerRepo.findById(custId).get();
	}

	@Override
	public void deleteById(int custId) {
		
		Optional<Customer> findById = customerRepo.findById(custId);
		
	    Status currentStatus = findById.get().getUser().getStatus();;

	    if (currentStatus == Status.ACTIVE) {
	    	findById.get().getUser().setStatus(Status.INACTIVE);
	    }
	}

	@Override
	public Customer addDocToCustomer(int custId, int docId) {
		Customer customer = customerRepo.findById(custId).get();
		Document document = fileRepo.findById((long) docId).get();
		Set<Document> documents = customer.getDocuments();
		documents.add(document);
		customer.setDocuments(documents);

		return customerRepo.save(customer);
	}

	@Override
	public Customer addInsuranceToCustomer(int custId, int insuranceId) {
		Customer customer = customerRepo.findById(custId).get();
		InsuranceAccount insuranceAcc = insuranceAccRepo.findById(insuranceId).get();
		Set<InsuranceAccount> insuranceAccounts = customer.getInsuranceAccounts();
		insuranceAccounts.add(insuranceAcc);
		customer.setInsuranceAccounts(insuranceAccounts);

		return customerRepo.save(customer);
	}

	@Override
	public Page<Customer> findAll(int offset, int pageSize) {
		Page<Customer> customers = customerRepo.findAll(PageRequest.of(offset, pageSize));
		return customers;
	}

	@Override
	public Customer getCustomerByUsername(String username) {
		Customer customer = customerRepo.findByUsername(username);
		return customer;
	}
	
	@Override
	public Customer updateCustomer(Customer customer,int custId) {
		Customer dbCustomer = findById(custId);
		dbCustomer.setCity(customer.getCity());
		dbCustomer.setPhone(customer.getPhone());
		dbCustomer.setNominee(customer.getNominee());
		dbCustomer.setNomineeRelation(customer.getNomineeRelation());
		dbCustomer.setPincode(customer.getPincode());
		dbCustomer.setState(customer.getState());
		dbCustomer.getUser().setAddress(customer.getUser().getAddress());
		dbCustomer.getUser().setEmail(customer.getUser().getEmail());
		customerRepo.save(dbCustomer);
		return dbCustomer;
		//		Optional<Customer> dbCustomer = customerRepo.findById(custId);
//		if(dbCustomer.isPresent()) {
//			return dbCustomer.get();
//		}
//		else {
//			throw new EntityNotFoundException("Customer with id " +custId +"not found");
//		}
		
	}

	@Override
	public void saveCustomerWithAgent(int id, Customer customer) {
		customer.getUser().setPassword(bCryptPasswordEncoder.encode(customer.getUser().getPassword()));
		Customer savedCustomer = customerRepo.save(customer);
		
		agentService.addCustomerToAgent(id, savedCustomer.getCustomerId());
	}

//	@Override
//	public Customer update(int agentId, int customerId) {
//		Customer customer = customerRepo.findById(customerId).get();
//		Agent agent = agentRepo.findById(agentId).get();
//		Set<Customer> customers = agent.getCustomers();
//		customers.add(customer);
//		agent.setCustomers(customers);
//
//		return agentRepo.save(agent);
//	}

}
