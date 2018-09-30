package com.pknu.music.dao;

import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserDao {

	public void insertUser(Map<String, String> paramMap);

	public UserDetails selectUser(String username);

}
