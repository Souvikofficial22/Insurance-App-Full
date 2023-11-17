package com.monocept.service;


import java.util.List;

import com.monocept.entity.User;

public interface IUserService{

	public User getUser(String username);
	public User getUser(int id);
	public User saveUser(User user);
	public List<User> getAllUser(int page, int size);
	public User getUserByUsername(String username);
	public User updatePassword(User user, String userName);
}
