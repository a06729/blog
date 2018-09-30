package com.pknu.music.dto;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.SpringSecurityCoreVersion;
import org.springframework.security.core.userdetails.User;

public class UserDetailsDto extends User{
	



	private static final long serialVersionUID = SpringSecurityCoreVersion.SERIAL_VERSION_UID;

	private String userId;

	public UserDetailsDto(String username, String password, boolean enabled, boolean accountNonExpired,
			boolean credentialsNonExpired, boolean accountNonLocked,
			Collection<? extends GrantedAuthority> authorities,String userId) {
		super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
		this.userId=userId;
	}
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	 @Override
	 public String toString() {
	  // TODO Auto-generated method stub
	  return super.toString() + "; UserId: "+this.userId;
	 }

	

	

	
	
	
	
}
