package com.monocept.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.monocept.entity.PolicyDetails;

public interface DetailsRepisotory extends JpaRepository<PolicyDetails, Integer> {

}
