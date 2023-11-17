package com.monocept.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.monocept.entity.Agent;

public interface AgentRepository extends JpaRepository<Agent, Integer>{

	@Query("select a from Agent a where a.user.username = :username")
	Agent findByUsername(String username);

}
