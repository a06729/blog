package com.pknu.music.controller;

import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;
import com.pknu.music.dto.PaginDto;
import com.pknu.music.service.AdminService;

@Controller
@RequestMapping(value="/admin")
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	Map<String,Object>imageMap=new HashMap<String, Object>();
	//게시판 페이지로 이동
	@RequestMapping(value="/boardPage")
	public String adminPage() {
		return "/admin/adminBoard";
	}

	//게시글 업로드
	@RequestMapping(value="/insertContent")
	public void insertContent(Principal principal,BoardFileDto boardFileDto,BoardDto boardDto) {
		boardDto.setUserId(principal.getName());
		
		boardFileDto.setFile_Size(String.valueOf(imageMap.get("fileSize")));
		boardFileDto.setOrignal_File_Name(String.valueOf(imageMap.get("orignalFileName")));
		boardFileDto.setStored_File_Name(String.valueOf(imageMap.get("filename")));
		boardFileDto.setFilePath(String.valueOf(imageMap.get("filePath")));
		
		System.out.println("getFilePath:"+boardFileDto.getFilePath());
		
		adminService.insertContent(boardFileDto,boardDto);
	}
	
	//업로드 게시글 어드민 페이지에 보여주는 기능
	@RequestMapping(value="/adminBoardList",method=RequestMethod.GET)
	public String adminBoardList(Model model,PaginDto paginDto,BoardDto boardDto) {
		List<BoardDto>BoardLists=adminService.selectLists(paginDto,boardDto);
		paginDto.setTotal(adminService.selectTotalPagin());
		
		System.out.println("getPageStartNum():"+paginDto.getPageStartNum());
		
		model.addAttribute("lists",BoardLists);
		model.addAttribute("p",paginDto);
		return "/admin/adminBoardList";
	}
	
	//업로드 게시글 자세히 보기
	@RequestMapping(value="/adminBoardContent/{boardNum}")
	public String adminBoardContent(@PathVariable int boardNum,BoardDto boardDto,Model model) {
		List<BoardDto>boardList=adminService.getBoardContent(boardNum,boardDto);
		
		model.addAttribute("boardList",boardList);
		
		return"/admin/adminContent";
	}
	
	//에디터 이미지 업로드
	@RequestMapping(value="/imageUpload",method= RequestMethod.POST)
	@ResponseBody
	public Map<String,Object>imageUpload(BoardFileDto boardFileDto,
										HttpServletRequest request,
										Model model)throws Exception{
		
		HttpSession session=request.getSession();
		String rootPath=session.getServletContext().getRealPath("");
		String attachPath="upload";
		
		MultipartFile upload=boardFileDto.getUpload();
		String orignalFileName="";
		String storedFileName="";
		
		if(upload!=null) {
			UUID uuid=UUID.randomUUID();
			
			orignalFileName=upload.getOriginalFilename();
			System.out.println("orignalFileName:"+orignalFileName);
			storedFileName=uuid.toString()+orignalFileName;
			
			String filepath=rootPath+File.separator+attachPath+File.separator+storedFileName;
			String dbpath="/"+attachPath+"/"+storedFileName;
			
			boardFileDto.setOrignal_File_Name(orignalFileName);
			boardFileDto.setStored_File_Name(storedFileName);
//			boardFileDto.setAttachPath(filepath);
			
			try {
				File file=new File(filepath);
				if(!file.exists()) {
					file.mkdirs();
				}
				System.out.println("file.isDirectory():"+file.isDirectory());
				System.out.println("file.isFile()"+file.isFile());
				upload.transferTo(new File(filepath));
			} catch (IllegalStateException e) {
				e.printStackTrace();
			}catch (IOException e) {
				e.printStackTrace();
			}
			System.out.println(filepath);
			
			imageMap.put("fileSize", upload.getSize());
			imageMap.put("orignalFileName",boardFileDto.getOrignal_File_Name());
			imageMap.put("filename", storedFileName);
			imageMap.put("filePath",dbpath);
			imageMap.put("uploaded",1);
			imageMap.put("url",dbpath);
		}
		return imageMap;
	}
	
	//게시글 삭제
	@PostMapping(value="/boardDelete")
	public String boardDelete(HttpServletRequest request) {
		adminService.boardDelete(request);
		return "redirect:/admin/adminBoardList";
	}
	//게시글 검색
	@RequestMapping(value="/boardSearch",method=RequestMethod.GET)
	public String boardSearch(@RequestParam("search") String search,PaginDto paginDto
							,BoardDto boardDto,Model model) {
		List<BoardDto>BoardLists=adminService.searchList(paginDto,boardDto,search);
		paginDto.setTotal(adminService.searchTotal(search));
		
		model.addAttribute("lists",BoardLists);
		model.addAttribute("p",paginDto);
		
		return "/admin/adminBoardList";
	}
	
}
