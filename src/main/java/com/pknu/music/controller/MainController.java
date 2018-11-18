package com.pknu.music.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.annotation.JsonCreator.Mode;
import com.pknu.music.dto.BoardDto;
import com.pknu.music.dto.BoardFileDto;
import com.pknu.music.dto.PaginDto;
import com.pknu.music.security.ShaEncoder;
import com.pknu.music.service.UserService;


@Controller
public class MainController {
//	static Logger logger = Logger.getLogger(MainController.class.getName());
	
	@Resource(name="shaEncoder")
	private ShaEncoder encoder;
	
	@Autowired
	UserService userService;
	
	//메인 페이지 이동
	@RequestMapping(value="/",method= {RequestMethod.GET,RequestMethod.POST})
	public String home(BoardDto boardDto,PaginDto paginDto,BoardFileDto boardFileDto,Model model) {
		List<BoardDto>BoardLists=userService.selectLists(paginDto,boardDto);
		paginDto.setTotal(userService.selectTotalPagin());
				
		model.addAttribute("lists",BoardLists);
		model.addAttribute("p",paginDto);
		return "index";
	}
	//로그인 페이지 이동
	@RequestMapping(value="/loginPage",method=RequestMethod.GET)
	public String loginPage() {
		return "loginPage";
	}

	//로그인 성공 페이지
//	@RequestMapping(value="/loginsuccess")
//	public String loginsuccess() {
//		return "loginSuccess";
//	}
	
	//회원가입 페이지
	@RequestMapping(value="/insertPage")
	public String insertPage() {
		return "InsertUser";
	}
	
	//글 표현하는 페이지
	@RequestMapping(value="/contentPage/{boardNum}")
	public String contentPage(@PathVariable int boardNum,BoardDto boardDto,Model model) {
		List<BoardDto>boardList=userService.getContent(boardNum,boardDto);
		
		model.addAttribute("boardList",boardList);
		return "contentPage";
	}
	
	//검색결과페이지
	@RequestMapping(value="/search",method={RequestMethod.GET,RequestMethod.POST})
	public String search(@RequestParam("s")String s,PaginDto paginDto,BoardDto boardDto,Model model) {
		List<BoardDto>boardList=userService.searchList(s,paginDto,boardDto);		
		paginDto.setTotal(userService.searchTotal(s));
		
		model.addAttribute("search",s);
		model.addAttribute("boardList",boardList);
		model.addAttribute("p",paginDto);
		return "searchPage";
	}
	//장르 검색
	@RequestMapping(value="/category/genre/{genre}",method={RequestMethod.GET,RequestMethod.POST})
	public String category(@PathVariable String genre,PaginDto paginDto,BoardDto boardDto,Model model) {
		boardDto.setGenre(genre);
		
		List<BoardDto>genreList=userService.genreList(paginDto,boardDto);
		paginDto.setTotal(userService.genreTotal(boardDto));
		
		model.addAttribute("category",boardDto.getGenre());
		model.addAttribute("categoryList",genreList);
		model.addAttribute("p",paginDto);
		return "genrePage";
	}
	//나라로 검색
	@RequestMapping(value="/category/country/{country}",method={RequestMethod.GET,RequestMethod.POST})
	public String country(@PathVariable String country,PaginDto paginDto,BoardDto boardDto,Model model) {
		boardDto.setCountry(country);
		
		List<BoardDto>countryList=userService.countryList(paginDto,boardDto);
		paginDto.setTotal(userService.countryTotal(boardDto));
		
		model.addAttribute("country",country);
		model.addAttribute("countryList",countryList);
		model.addAttribute("p",paginDto);
		
		return "countryPage";
	}
	//회원가입 로직
	@RequestMapping(value="/insertUser")
	public String insertUser(@RequestParam("id")String id,
							 @RequestParam("pw")String pw,
							 @RequestParam("authority")String authority,
							 @RequestParam("email")String email,
							 @RequestParam("enabled")String enabled) {
		
		String dbpw=encoder.encoding(pw,id);
		
		Map<String,String>paramMap=new HashMap<String,String>();
		paramMap.put("id",id);
		paramMap.put("passwd",dbpw);
		paramMap.put("email",email);
		paramMap.put("enabled",enabled);
		paramMap.put("authority",authority);
//		logger.info("dbpw"+paramMap.get("passwd"));
		userService.insertUser(paramMap);
		
		return"/loginPage";
	}
	
	
}
