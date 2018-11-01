package com.pknu.music.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.pknu.music.dao.UserDao;
import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;
	
	public void insertUser(Map<String, String> paramMap) {
		userDao.insertUser(paramMap);
		
	}

	@Override
	public String getContent(BoardDto boardDto,BoardFileDto boardFileDto,Model model) {
		List<BoardDto>BoardList=userDao.getContent(boardDto);
		model.addAttribute("BoardList",BoardList);		
		return "index";
	}

	

}
