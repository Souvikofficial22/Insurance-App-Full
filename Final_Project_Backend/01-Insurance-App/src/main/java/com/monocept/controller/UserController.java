package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.entity.Admin;
import com.monocept.entity.User;
import com.monocept.service.IAdminService;
import com.monocept.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserController {

	@Autowired
	private IUserService service;
	
	@PostMapping("/save")
	public User save(@RequestBody User user) {
		return service.saveUser(user);
	}
	
	@GetMapping("/get-all")
	public List<User> getAllUser(
			@RequestParam(name = "page", defaultValue = "0") int page,
	        @RequestParam(name = "size", defaultValue = "10") int size
			){
		return service.getAllUser(page,size);
	}
//	
//	@GetMapping("/get-id/{id}")
//	public Admin getById(@PathVariable int id) {
//		return service.getAdminById(id);
//	}
//	
	// get user by username
	@GetMapping("/getusername/{username}")
	public User getByUsername(@PathVariable String username) {
		return service.getUserByUsername(username);
	}
//	
	@PutMapping("/updatepassword/username/{userName}")
	public ResponseEntity<User> updatePassUser(@RequestBody User user,@PathVariable String userName) {
		System.out.println("controller ke update password me");
		service.updatePassword(user, userName);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
