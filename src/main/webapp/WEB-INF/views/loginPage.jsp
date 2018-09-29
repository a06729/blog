<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login Page</title>
<link rel='stylesheet'
	href='http://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css'>
<style type="text/css">
body {
	background: #eee !important;
}

.wrapper {
	margin-top: 80px;
	margin-bottom: 80px;
}

.form-signin {
	max-width: 380px;
	padding: 15px 35px 45px;
	margin: 0 auto;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-signin .form-signin-heading, .form-signin .checkbox {
	margin-bottom: 30px;
}

.form-signin .checkbox {
	font-weight: normal;
}

.form-signin .form-control {
	position: relative;
	font-size: 16px;
	height: auto;
	padding: 10px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.form-signin .form-control:focus {
	z-index: 2;
}

.form-signin input[type="text"] {
	margin-bottom: -1px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}

.form-signin input[type="password"] {
	margin-bottom: 20px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
</style>
</head>
<body>
	<div class="wrapper">
		${errMsg }
		<form role="form" action="/loginsuccess" class="form-signin" method="post">
			<h2 class="form-signin-heading">Please login</h2>
			<input type="text" class="form-control" id="id" name="userId" placeholder="ID"/>
			<input type="password" class="form-control" id="pw" name="userPw" placeholder="Password"/> 
			<input type="hidden"name="${_csrf.parameterName}" value="${_csrf.token}"/>
			<button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
		</form>
	</div>
</body>
</html>