package com.monocept.service;

import java.util.List;

import com.monocept.entity.CommissionRecord;

public interface ICommissionService {

	public CommissionRecord save(CommissionRecord commission);
	public List<CommissionRecord> getAllCommissionRecord(int page,int size);
	public CommissionRecord getCommissionRecordById(int id);
}
