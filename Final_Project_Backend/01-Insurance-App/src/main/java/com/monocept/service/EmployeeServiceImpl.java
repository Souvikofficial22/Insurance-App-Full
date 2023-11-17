package com.monocept.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.monocept.entity.Employee;
import com.monocept.entity.InsurancePlan;
import com.monocept.entity.Status;
import com.monocept.entity.User;
import com.monocept.exception.UserNotFoundException;
import com.monocept.repository.EmployeeRepository;
import com.monocept.repository.UserRepository;

@Service
public class EmployeeServiceImpl implements IEmployeeService{

	@Autowired
	private EmployeeRepository empRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public Employee save(Employee employee) {
		employee.getUser().setPassword(bCryptPasswordEncoder.encode(employee.getUser().getPassword()));
		return empRepo.save(employee);
	}

	@Override
	public List<Employee> getAllEmployee(int page, int size) {
		return empRepo.findAll();
	}

	@Override
	public Employee getEmployeeById(int id) {
		Optional<Employee> employee = empRepo.findById(id);
		if(!employee.isPresent())
		{
			throw new UserNotFoundException("Employee with id"+id+ " not found");
		}
		return employee.get();
	}

	@Override
	public Employee getEmployeeByUsername(String username) {
		Employee employee = empRepo.findByUsername(username);
		return employee;
	}

	@Override
	public Employee update(Employee employee) {
		Optional<User> userById = userRepo.findById(employee.getUser().getUserId());
		if(!userById.isPresent())
			{
				throw new UserNotFoundException("Admin with id"+employee.getEmployeeId()+ " not found");
			}
		User user = userById.get();
		user.setAddress(employee.getUser().getAddress());
		user.setEmail(employee.getUser().getEmail());
		user.setAddress(employee.getUser().getAddress());
		user.setRole(employee.getUser().getRole());
		user.setStatus(employee.getUser().getStatus());
		
		userRepo.save(user);
		
		return employee;
	}

	@Override
	public void delete(int id) {
		Optional<User> userById = userRepo.findById(id);
		if(!userById.isPresent()) {
			throw new UserNotFoundException("Employee with id "+id+" not found");
		}
		User user = userById.get();
	    Status currentStatus = user.getStatus();

	    if (currentStatus == Status.ACTIVE) {
	        user.setStatus(Status.INACTIVE);
	    } 

	    userRepo.save(user);
	}
	
}
