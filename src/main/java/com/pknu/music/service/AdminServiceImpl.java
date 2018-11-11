package com.pknu.music.service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.search.IntegerComparisonTerm;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pknu.music.dao.AdminDao;
import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;
import com.pknu.music.dto.PaginDto;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	AdminDao adminDao;
	
	//게시판 작성
	@Override
	public void insertContent(BoardFileDto boardFileDto, BoardDto boardDto,List<BoardFileDto> fileList) {
		adminDao.insertBoard(boardDto);
		if(!fileList.isEmpty()){
			for(BoardFileDto boardFileList:fileList) {
				boardFileDto.setBoardNum(boardDto.getBoardNum());
				boardFileList.setBoardNum(boardFileDto.getBoardNum());
				System.out.println("boardFileList:"+boardFileList);
				adminDao.insertBoardFile(boardFileList);
			}
			fileList.clear();
		}	
	}

	@Override
	public List<BoardDto> selectLists(PaginDto paginDto, BoardDto boardDto) {
		
		return adminDao.selectBoardLists(paginDto);
	}

	@Override
	public int selectTotalPagin() {
		
		return adminDao.selectTotalPagin();
	}
	
	//글 내용 가져오기 및 수정페이지로 글내용 가져오는 기능
	@Override
	public List<BoardDto> getBoardContent(int boardNum, BoardDto boardDto) {
		boardDto.setBoardNum(boardNum);
		return adminDao.getBoardContent(boardDto);
	}
	
	//글삭제
	@Override
	public void boardDelete(HttpServletRequest request) {
		String[]Checks=request.getParameterValues("boardNum");
		for(String check:Checks) {
			adminDao.boardDelete(check);
		}		
	}
	
	//글 검색
	@Override
	public List<BoardDto> searchList(PaginDto paginDto, BoardDto boardDto,String search) {
		paginDto.setSearch(search);
		return adminDao.searchList(paginDto);
	}
	
	//검색글 페이징 하기위한 전체 갯수
	@Override
	public int searchTotal(String search) {
		// TODO Auto-generated method stub
		return adminDao.searchTotal(search);
	}

	
	//글 수정
	@Override
	public void update(BoardDto boardDto, BoardFileDto boardFileDto,List<BoardFileDto> fileList) {
		if(!fileList.isEmpty()) {
			adminDao.update(boardDto);
			for(BoardFileDto boardFileList:fileList) {
				boardFileDto.setBoardNum(boardDto.getBoardNum());
				boardFileList.setBoardNum(boardFileDto.getBoardNum());
				System.out.println("boardFileList:"+boardFileList);
				adminDao.updateImage(boardFileList);
			}
			fileList.clear();
		}else {
			adminDao.update(boardDto);
		}

		/*if(imageMap.get("fileSize")!=null) {
			
			boardFileDto.setFile_Size(String.valueOf(imageMap.get("fileSize")));
			boardFileDto.setOrignal_File_Name(String.valueOf(imageMap.get("orignalFileName")));
			boardFileDto.setStored_File_Name(String.valueOf(imageMap.get("filename")));
			boardFileDto.setFilePath(String.valueOf(imageMap.get("filePath")));
			boardFileDto.setBoardNum(boardDto.getBoardNum());
			
			adminDao.update(boardDto);
			adminDao.updateImage(boardFileDto);
		}else {
			adminDao.update(boardDto);
		}*/
	}
	
	
	
	
}
