package com.monocept.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.monocept.entity.City;

public interface CityRepository extends JpaRepository<City, Integer>{

	@Query("SELECT c FROM City c WHERE c.status = 'ACTIVE'")
	List<City> findAllActiveCities();
}
