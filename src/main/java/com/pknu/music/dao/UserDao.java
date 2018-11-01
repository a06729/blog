package com.pknu.music.dao;

import java.util.List;
import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;

public interface UserDao {

	public void insertUser(Map<String, String> paramMap);

	public UserDetails selectUser(String username);

	public void selectContent(BoardDto boardDto);

	public List<BoardDto> getContent(BoardDto boardDto);

	public List<BoardFileDto> getContentFile(BoardDto boardDto);

}
