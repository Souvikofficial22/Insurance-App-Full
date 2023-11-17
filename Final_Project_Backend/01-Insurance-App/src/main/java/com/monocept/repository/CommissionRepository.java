package com.monocept.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.monocept.entity.CommissionRecord;

public interface CommissionRepository extends JpaRepository<CommissionRecord, Integer> {

}
