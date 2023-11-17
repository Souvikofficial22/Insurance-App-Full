package com.monocept.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.monocept.entity.Policy;

public interface PolicyRepository extends JpaRepository<Policy, Integer> {

}
