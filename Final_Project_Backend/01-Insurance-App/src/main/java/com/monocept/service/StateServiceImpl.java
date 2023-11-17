package com.monocept.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.entity.InsurancePlan;
import com.monocept.entity.Policy;
import com.monocept.entity.State;
import com.monocept.entity.Status;
import com.monocept.exception.UserNotFoundException;
import com.monocept.repository.StateRepository;

@Service
public class StateServiceImpl implements IStateService {

	@Autowired
	private StateRepository stateRepo; 
	
	@Override
	public State save(State state) {
		return stateRepo.save(state);
	}

	@Override
	public List<State> getAllState(int page, int size) {
		return stateRepo.findAll();
	}

	@Override
	public State getStateById(int id) {
		Optional<State> state = stateRepo.findById(id);
		if (!state.isPresent()) {
			throw new UserNotFoundException("State with id " + id + " not found");
		}
		return state.get();
	}

	@Override
	public State update(int id) {
		Optional<State> stateById = stateRepo.findById(id);
		if(!stateById.isPresent()) {
			throw new UserNotFoundException("State with id "+id+" not found");
		}
		State state = stateById.get();
	    Status currentStatus = state.getStatus();

	    if (currentStatus == Status.ACTIVE) {
	        state.setStatus(Status.INACTIVE);
	    } else if (currentStatus == Status.INACTIVE) {
	        state.setStatus(Status.ACTIVE);
	    }

	    return stateRepo.save(state);
	}

	
	@Override
    public List<State> getAllActiveStates() {
        return stateRepo.findByStatus(Status.ACTIVE);
    }
}
