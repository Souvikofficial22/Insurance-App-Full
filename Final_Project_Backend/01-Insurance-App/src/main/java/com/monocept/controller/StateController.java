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

import com.monocept.entity.City;
import com.monocept.entity.State;
import com.monocept.service.IStateService;

@RestController
@RequestMapping("/state")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class StateController {

	@Autowired
	private IStateService service;
	
	@PostMapping("/save")
	public State save(@RequestBody State state) {
		return service.save(state);
	}
	
	@GetMapping("/get-all")
	public List<State> getAllState(
			@RequestParam(name = "page", defaultValue = "0") int page,
	        @RequestParam(name = "size", defaultValue = "10") int size
			){
		return service.getAllState(page,size);
	}
	
	@GetMapping("/get-id/{id}")
	public State getById(@PathVariable int id) {
		return service.getStateById(id);
	}
	
	
	@PutMapping("/update/{id}")
	public State update(@PathVariable int id) {
		System.out.println("Inside update");
		return service.update(id);
	}
	
	@GetMapping("/getactivestates")
    public List<State> getActiveStates() {
        return service.getAllActiveStates();
    }
}
