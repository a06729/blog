package com.pknu.music.dao;

import java.util.List;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;
import com.pknu.music.dto.PaginDto;

public interface AdminDao {

	void insertBoard(BoardDto boardDto);

	void insertBoardFile(BoardFileDto boardFileDto);

	int getTotalCount();

	List<BoardDto> selectBoardLists(PaginDto paginDto);

	int selectTotalPagin();



}
