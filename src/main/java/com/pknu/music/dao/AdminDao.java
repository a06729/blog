package com.pknu.music.dao;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;

public interface AdminDao {

	void insertBoard(BoardDto boardDto);

	void insertBoardFile(BoardFileDto boardFileDto);

}
