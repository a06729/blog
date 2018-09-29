<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main.css"/>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action='<c:url value="/insertUser"/>' method="post">
 <input type="text" name="id" id="id" placeholder="아이디"/>
 <input type="password" name="pw" id="pw" placeholder="비밀번호"/>
 <select name="authority">
  <option value="ROLE_USER">사용자</option>
  <option value="ROLE_ADMIN">관리자</option>
 </select>
 <input type="text" name="email" placeholder="이메일">
 <input name="enabled" type="hidden" value="1">
 <input type="hidden"name="${_csrf.parameterName}" value="${_csrf.token}"/>
 <input type="submit" value="회원가입">
</form>
</body>
</html>