package com.pknu.music.dao;

import java.util.List;
import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;
import com.pknu.music.dto.PaginDto;

public interface UserDao {

	public void insertUser(Map<String, String> paramMap);

	public List<BoardDto> selectBoardLists(PaginDto paginDto);

	public int selectTotalPagin();

}
