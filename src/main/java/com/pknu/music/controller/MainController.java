package com.pknu.music.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.pknu.music.security.ShaEncoder;
import com.pknu.music.service.UserService;


@Controller
public class MainController {
//	static Logger logger = Logger.getLogger(MainController.class.getName());
	
	@Resource(name="shaEncoder")
	private ShaEncoder encoder;
	
	@Autowired
	UserService userSerive;
	
	//메인 페이지 이동
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String home() {
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
		userSerive.insertUser(paramMap);
		
		return"/loginPage";
	}
}
