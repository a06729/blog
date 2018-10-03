package com.pknu.music.service;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pknu.music.dao.AdminDao;
import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	AdminDao adminDao;
	
	@Override
	public void insertContent(BoardFileDto boardFileDto, BoardDto boardDto) {
		
		adminDao.insertBoard(boardDto);
		
		boardFileDto.setBoardNum(boardDto.getBoardNum());
		
		adminDao.insertBoardFile(boardFileDto);
	}
	
}
