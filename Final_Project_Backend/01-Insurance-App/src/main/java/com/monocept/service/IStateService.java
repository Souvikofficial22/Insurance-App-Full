package com.monocept.service;

import java.util.List;

import com.monocept.entity.State;

public interface IStateService {

	public State save(State state);
	public List<State> getAllState(int page,int size);
	public State getStateById(int id);
	public State update(int id);
	 List<State> getAllActiveStates();
}
