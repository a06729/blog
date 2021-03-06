<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>어드민 글 보는페이지</title>

<!-- Bootstrap CSS CDN -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/css/admin.css" />
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script> 
<script type="text/javascript" src="<c:url value='/resources/ckeditor/ckeditor.js'/>"></script>
</head>
<body>
	<div class="wrapper">
		<!-- Sidebar Holder -->
		<nav id="sidebar">
			<div class="sidebar-header">
				<h3>메뉴 사이드바</h3>
			</div>

			<ul class="list-unstyled components">
				<p>메뉴</p>
				<!--                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Home 1</a></li>
                            <li><a href="#">Home 2</a></li>
                            <li><a href="#">Home 3</a></li>
                        </ul>
                    </li>-->
				<!--                    <li>
                        <a href="#">About</a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>-->
                <li><a href="#">음악글 목록</a></li>
				<li><a href="#">음악글 작성</a></li>
				<li><a href="#">Contact</a></li>
			</ul>

			<ul class="list-unstyled CTAs">
				<!--<li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a></li>
                    <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a></li>-->
			</ul>
		</nav>

		<!-- Page Content Holder -->
		<div id="content" style="width: 100%">
		
			<nav class="navbar navbar-default">
				<div class="container-fluid">

					<div class="navbar-header">
						<button type="button" id="sidebarCollapse" class="navbar-btn">
							<span></span> <span></span> <span></span>
						</button>
					</div>

					<div class="collapse navbar-collapse"
						id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav navbar-right">
							<li><a href="#">음악글 작성</a></li>
							<li><a href="#">Page</a></li>
							<li><a href="#">Page</a></li>
							<li><a href="#">Page</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div>
				<form action="/admin/updatePage" method="post">
					<c:forEach var="items" items="${boardList}">
						${items.boardContent}
						<input name="boardNum" type="hidden" value="${items.boardNum}">
					</c:forEach>
					<input type="submit" value="수정">
				</form>
			</div>
			<div>
			
			</div>
		</div>
	</div>


	<!-- jQuery CDN -->
	<script src="/temsource/js/jquery-3.2.1.min.js"></script>
	<!-- Bootstrap Js CDN -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
	<script type="text/javascript">
             $(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     $(this).toggleClass('active');
                 });
             });
    </script>
</body>
</html>