package com.pknu.music.service;

import java.util.List;
import java.util.Map;

import org.springframework.ui.Model;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;
import com.pknu.music.dto.PaginDto;

public interface UserService {

	void insertUser(Map<String, String> paramMap);

	List<BoardDto> selectLists(PaginDto paginDto, BoardDto boardDto);

	int selectTotalPagin();

	List<BoardDto> getContent(int boardNum, BoardDto boardDto);

	List<BoardDto> searchList(String s, PaginDto paginDto, BoardDto boardDto);

	int searchTotal(String s);

	List<BoardDto> categoryList(PaginDto paginDto, BoardDto boardDto);

	int categoryTotal(BoardDto boardDto);


}
