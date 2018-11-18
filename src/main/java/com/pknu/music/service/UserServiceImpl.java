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
	public List<BoardDto> genreList(PaginDto paginDto, BoardDto boardDto) {
		Map<String,Object>genreMap=new HashMap<String, Object>();
		genreMap.put("pagin",paginDto);
		genreMap.put("boardDto",boardDto);
		
		System.out.println();
		
		return userDao.genreList(genreMap);
	}

	@Override
	public int genreTotal(BoardDto boardDto) {
		return userDao.genreTotal(boardDto);
	}

	@Override
	public List<BoardDto> countryList(PaginDto paginDto, BoardDto boardDto) {
		Map<String,Object>countryMap=new HashMap<String,Object>();
		countryMap.put("pagin",paginDto);
		countryMap.put("boardDto",boardDto);
		
		return userDao.countryList(countryMap);
	}

	@Override
	public int countryTotal(BoardDto boardDto) {
		return userDao.countryTotal(boardDto);
	}
	
	
	
	
	

}
