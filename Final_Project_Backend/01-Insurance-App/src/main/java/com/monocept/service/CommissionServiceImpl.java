package com.monocept.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.entity.CommissionRecord;
import com.monocept.repository.CommissionRepository;
@Service
public class CommissionServiceImpl implements ICommissionService {

	@Autowired
	private CommissionRepository commRepo;
	
	@Override
	public CommissionRecord save(CommissionRecord commission) {
		return commRepo.save(commission);
	}

	@Override
	public List<CommissionRecord> getAllCommissionRecord(int page, int size) {
		return commRepo.findAll();
	}

	@Override
	public CommissionRecord getCommissionRecordById(int id) {
		return commRepo.findById(id).get();
	}

}
