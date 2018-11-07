<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>어드민 글 작성페이지</title>

<!-- jQuery CDN -->
<script src="/js/jquery-3.2.1.min.js"></script>
<!-- Bootstrap Js CDN -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- Bootstrap CSS CDN -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/css/admin.css" />
<link rel="stylesheet" href="/css/paging.css">

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script> 
<script type="text/javascript" src="<c:url value='../resources/ckeditor/ckeditor.js'/>"></script>
<script src="/js/paging.js"></script>    

<style> 
#search{
    width: 130px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url('/resources/searchicon.png');
    background-position: right;
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

#search:focus {
    width: 100%;
}
</style>

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
			<div class="container">

				<select class='btn btn-primary' id='listCount' name='listCount'
					onchange='listCnt();'>
					<option value='5'>5</option>
					<option value='10'>10</option>
					<option value='15'>15</option>
					<option value='20'>20</option>
				</select>
		
				<form action="/admin/boardDelete" id="delete" method="post">
					<input id="deleteBnt" type="button" value="삭제" onclick="clickCheck()">
					<table class="table table-bordered">
						<tr>
							<th>선택</th>
							<th>번호</th>
							<th>제목</th>
							<th>출시일</th>
							<th>작성일</th>
						</tr>
						<c:forEach var="dto" items="${lists}">
							<tr>
								<td><input type="checkbox" id="boardNum" name="boardNum" value="${dto.boardNum}"></td>
								<td><a href="/admin/adminBoardContent/${dto.boardNum}">${dto.boardNum}</a></td>
								<td>${dto.boardTitle}</td>
								<td>${dto.releaseDate}</td>
								<td>${dto.regDate}</td>
							</tr>
						</c:forEach>
					</table>
				</form>
				<!-- 5. paging view -->
				<ul class="pagination">
					<c:if test="${p.pageStartNum ne 1}">
						<!--맨 첫페이지 이동 -->
						<li><a onclick='pagePre(${p.pageCnt+1},${p.pageCnt});'>«</a></li>
						<!--이전 페이지 이동 -->
						<li><a onclick='pagePre(${p.pageStartNum},${p.pageCnt});'>‹</a></li>
					</c:if>

					<!--페이지번호 -->
					<c:forEach var='i' begin="${p.pageStartNum}" end="${p.pageLastNum}"
						step="1">
						<li class='pageIndex${i}'><a onclick='pageIndex(${i});'>${i}</a></li>
					</c:forEach>

					<c:if test="${p.lastChk}">
						<!--다음 페이지 이동 -->
						<li><a
							onclick='pageNext(${p.pageStartNum},${p.total},${p.listCnt},${p.pageCnt});'>›</a></li>
						<!--마지막 페이지 이동 -->
						<li><a
							onclick='pageLast(${p.pageStartNum},${p.total},${p.listCnt},${p.pageCnt});'>»</a></li>
					</c:if>
				</ul>
				<form action="/admin/adminBoardList" method="get" id='frmPaging'>
					<!--출력할 페이지번호, 출력할 페이지 시작 번호, 출력할 리스트 갯수 -->
					<input type='hidden' name='index' id='index' value='${p.index}'>
					<input type='hidden' name='pageStartNum' id='pageStartNum'
						value='${p.pageStartNum}'> <input type='hidden'
						name='listCnt' id='listCnt' value='${p.listCnt}'>
				</form>
				<form action="/admin/boardSearch" method="get">
					<input type="text" id="search" name="search" placeholder="Search..">
				</form>
			</div>
		</div>
	</div>

	<script type="text/javascript">
             $(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     $(this).toggleClass('active');
                 });
             });
    </script>
	<script type="text/javascript">
		function clickCheck() {
			var boardCheck= $('#boardNum').prop("checked");
			if(boardCheck==false){
			 	alert("삭제할 게시물을 체크해주세요");
			 	return; 
			 }
			$("#delete").submit();
		}
	</script>
</body>
</html>