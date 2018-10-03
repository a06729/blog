package com.pknu.music.service;

import java.security.Principal;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;

public interface AdminService {

	public void insertContent(BoardFileDto boardFileDto, BoardDto boardDto);

}
