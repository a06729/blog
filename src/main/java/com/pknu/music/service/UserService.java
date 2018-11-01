package com.pknu.music.service;

import java.util.List;
import java.util.Map;

import org.springframework.ui.Model;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;

public interface UserService {

	void insertUser(Map<String, String> paramMap);

	String getContent(BoardDto boardDto, BoardFileDto boardFileDto, Model model);

//	void getContent(BoardDto boardDto);

}
