package com.pknu.music.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.pknu.music.dto.BoardFileDto;

@Controller
@RequestMapping(value="/admin")
public class AdminController {
	
	Map<String,Object>imageMap=new HashMap<String, Object>();
	
	@RequestMapping(value="/boardPage")
	public String adminPage() {
		return "/admin/adminBoard";
	}
	
	@RequestMapping(value="/imageUpload",method= RequestMethod.POST
			)
	@ResponseBody
	public Map<String,Object>imageUpload(BoardFileDto boardFileDto,
										MultipartHttpServletRequest mtfRequest,
										HttpServletRequest request,
										HttpServletResponse respons,Model model)throws Exception{
		
		HttpSession session=request.getSession();
		String rootPath=session.getServletContext().getRealPath("fileUpload");
		String attachPath="upload/";
		
		MultipartFile upload=boardFileDto.getUpload();
		String orignalFileName="";
		String storedFileName="";
		
		if(upload!=null) {
			UUID uuid=UUID.randomUUID();
			
			orignalFileName=upload.getOriginalFilename();
			System.out.println("orignalFileName:"+orignalFileName);
			storedFileName=uuid.toString()+orignalFileName;
			
			String filepath=rootPath+"\\"+attachPath+"\\"+storedFileName;
			
			boardFileDto.setOrignal_File_Name(orignalFileName);
			boardFileDto.setStored_File_Name(storedFileName);
			boardFileDto.setAttachPath(filepath);
			
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
			System.out.println(rootPath+attachPath+storedFileName);
			imageMap.put("fileSize", upload.getSize());
			imageMap.put("filename", storedFileName);
			imageMap.put("uploaded",1);
			imageMap.put("url",attachPath+orignalFileName);
		}
		return imageMap;
	}
	
	
}
