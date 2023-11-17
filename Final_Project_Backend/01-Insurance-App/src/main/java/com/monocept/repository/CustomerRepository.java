package com.monocept.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.monocept.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	@Query("select c from Customer c where c.user.username = :username")
	Customer findByUsername(String username);

}
