package com.monocept.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="emp_id")
	private int employeeId;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;

	public Employee() {
		super();
	}

	public Employee(int employeeId, User user) {
		super();
		this.employeeId = employeeId;
		this.user = user;
	}

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}


	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
