package com.pknu.music.service;

import java.security.Principal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;
import com.pknu.music.dto.PaginDto;

public interface AdminService {

	public void insertContent(BoardFileDto boardFileDto, BoardDto boardDto, List<BoardFileDto> fileList);

	public List<BoardDto> selectLists(PaginDto paginDto, BoardDto boardDto);

	public int selectTotalPagin();

	public List<BoardDto> getBoardContent(int boardNum, BoardDto boardDto);

	public void boardDelete(HttpServletRequest request);

	public List<BoardDto> searchList(PaginDto paginDto, BoardDto boardDto, String search);

	public int searchTotal(String search);

	public void update(BoardDto boardDto, BoardFileDto boardFileDto, List<BoardFileDto> fileList);



}
