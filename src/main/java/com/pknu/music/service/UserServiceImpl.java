package com.pknu.music.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pknu.music.dao.UserDao;
import com.pknu.music.dto.BoardDto;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;
	
	public void insertUser(Map<String, String> paramMap) {
		userDao.insertUser(paramMap);
		
	}

//	@Override
//	public void getContent(BoardDto boardDto) {
//		userDao.selectContent(boardDto);
//		
//	}

}
