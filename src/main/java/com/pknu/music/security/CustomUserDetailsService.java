/*package com.pknu.music.security;

import org.omg.CORBA.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.pknu.music.dto.LoginDto;
import com.pknu.music.service.LoginService;

@Service
public class CustomUserDetailsService implements UserDetailsService {
	
	@Autowired
	LoginService loginService;
	
	@Override
	public UserDetails loadUserByUsername(String userID) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		LoginDto users=loginService.detailByUserID(userID);
		
		try {
			if(users==null) {
				throw new UsernameNotFoundException("해당 사용자를 찾지 못했습니다.");
			}
			return new UserDetails(userID,users.getPassword(),true,true,true,true,this.) 
		}catch (Exception e) {
			// TODO: handle exception
		}

		
		
		return null;
	}
	
}
*/