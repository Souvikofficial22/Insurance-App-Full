package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
import com.monocept.service.ICityService;

@RestController
@RequestMapping("/city")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class CityController {

	@Autowired
	private ICityService service;
	
	@PostMapping("/save")
	public City save(@RequestBody City city) {
		return service.save(city);
	}
	
	@GetMapping("/get-all")
	public Page<City> getAllCity(
			@RequestParam(name = "page", defaultValue = "0") int page,
	        @RequestParam(name = "size", defaultValue = "1") int size
			){
		return service.getAllCity(page,size);
	}
	
	@GetMapping("/get-id/{id}")
	public City getById(@PathVariable int id) {
		return service.getCityById(id);
	}
	
	
	@PutMapping("/update/{id}")
	public City update(@PathVariable int id) {
		System.out.println("Inside update");
		return service.update(id);
	}
	
	 @GetMapping("/getactivecities")
	    public List<City> getActiveCities() {
	        return service.getAllActiveCities();
	    }
}
