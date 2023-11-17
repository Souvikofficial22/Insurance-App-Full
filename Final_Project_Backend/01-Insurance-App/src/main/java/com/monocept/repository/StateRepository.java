package com.monocept.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.monocept.entity.State;
import com.monocept.entity.Status;

public interface StateRepository extends JpaRepository<State, Integer> {

//	@Query("select s from State s where s.status = 'ACTIVE'")
//	List<State> findActiveStates();
	
	List<State> findByStatus(Status status);

}
