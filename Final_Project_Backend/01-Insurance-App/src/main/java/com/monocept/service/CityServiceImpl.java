package com.monocept.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfig
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.monocept.entity.City;
import com.monocept.entity.Status;
import com.monocept.exception.UserNotFoundException;
import com.monocept.repository.CityRepository;

@Service
public class CityServiceImpl implements ICityService {

	@Autowired
	private CityRepository cityRepo;

	@Override
	public City save(City city) {
		return cityRepo.save(city);
	}

	@Override
	public Page<City> getAllCity(int page, int size) {
		Pageable paging = PageRequest.of(page, size);
	    Page<City> pageResult = cityRepo.findAll(paging);
	    return pageResult;
		
	}

	@Override
	public City getCityById(int id) {
		Optional<City> city = cityRepo.findById(id);
		if (!city.isPresent()) {
			throw new UserNotFoundException("City with id " + id + " not found");
		}
		return city.get();
	}

	@Override
	public City update(int id) {
		Optional<City> cityById = cityRepo.findById(id);
		if (!cityById.isPresent()) {
			throw new UserNotFoundException("City with id " + id + " not found");
		}
		City city = cityById.get();
		Status currentStatus = city.getStatus();

		if (currentStatus == Status.ACTIVE) {
			city.setStatus(Status.INACTIVE);
		} else if (currentStatus == Status.INACTIVE) {
			city.setStatus(Status.ACTIVE);
		}

		return cityRepo.save(city);
	}

	
	@Override
    public List<City> getAllActiveCities() {
        return cityRepo.findAllActiveCities();
    }
}
