package com.monocept.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.monocept.entity.InsuranceAccount;

public interface InsuranceAccountRepository extends JpaRepository<InsuranceAccount, Integer>  {

}
