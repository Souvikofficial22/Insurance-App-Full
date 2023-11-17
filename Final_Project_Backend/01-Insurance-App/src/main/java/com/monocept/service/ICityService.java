package com.monocept.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.monocept.entity.City;
import com.monocept.entity.State;

public interface ICityService {
	public City save(City city);
	public Page<City> getAllCity(int page,int size);
	public City getCityById(int id);
	public City update(int id);
	List<City> getAllActiveCities();
}
