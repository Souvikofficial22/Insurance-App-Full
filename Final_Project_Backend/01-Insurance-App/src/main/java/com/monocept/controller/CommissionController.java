package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.entity.CommissionRecord;
import com.monocept.service.ICommissionService;


@RestController
@RequestMapping("/commission")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class CommissionController {

	@Autowired
	private ICommissionService service;

	@PostMapping("/save")
	public CommissionRecord save(@RequestBody CommissionRecord commission) {
		return service.save(commission);
	}

	@GetMapping("/commissions")
	public List<CommissionRecord> getAllCommissionRecord(@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "10") int size) {
		return service.getAllCommissionRecord(page, size);
	}

	@GetMapping("/get/agentid/{id}")
	public CommissionRecord getByAgentId(@PathVariable int id) {
		return service.getCommissionRecordById(id);
	}
}
