package com.pknu.music.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.pknu.music.dao.UserDao;
import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;
import com.pknu.music.dto.PaginDto;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;
	
	public void insertUser(Map<String, String> paramMap) {
		userDao.insertUser(paramMap);
		
	}

	@Override
	public List<BoardDto> selectLists(PaginDto paginDto, BoardDto boardDto) {
		return userDao.selectBoardLists(paginDto);
	}

	@Override
	public int selectTotalPagin() {
		return userDao.selectTotalPagin();
	}
	
	@Override
	public List<BoardDto> getContent(int boardNum, BoardDto boardDto) {
		boardDto.setBoardNum(boardNum);
		return userDao.getContent(boardDto);
	}

	@Override
	public List<BoardDto> searchList(String s, PaginDto paginDto, BoardDto boardDto) {
		paginDto.setSearch(s);
		return userDao.searchList(paginDto);
	}

	@Override
	public int searchTotal(String s) {
		return userDao.searchTotal(s);
	}

	@Override
	public List<BoardDto> categoryList(PaginDto paginDto, BoardDto boardDto) {
		Map<String,Object>categoryMap=new HashMap<String, Object>();
		categoryMap.put("pagin",paginDto);
		categoryMap.put("boardDto",boardDto);
		
		System.out.println();
		
		return userDao.categoryList(categoryMap);
	}

	@Override
	public int categoryTotal(BoardDto boardDto) {
		return userDao.categoryTotal(boardDto);
	}
	
	

}
