<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
    <!--- basic page needs
    ================================================== -->
    <meta charset="utf-8">
    <c:forEach var="boardList" items="${boardList}">
    	<title>Download ${boardList.boardTitle}</title>
    </c:forEach>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta charset="utf-8">

    <!-- mobile specific metas
    ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">


    <!-- CSS -->
    <link rel="stylesheet" href="../temsource/css/base.css">
    <link rel="stylesheet" href="../temsource/css/vendor.css">
    <link rel="stylesheet" href="../temsource/css/main.css">
	<link rel="stylesheet" href="/css/paging.css">
    
    <!-- script -->
    <script src="../temsource/js/modernizr.js"></script>
	<script src="/js/paging.js"></script>
	
    <!-- favicons -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    
    <style type="text/css">
    	.boardTitle{
    		text-align:center; 
    		font-family:'Jua',sans-serif;
    		font-size: 24px;
    	}
    	.releaseDate{
    		text-align:center; 
    		font-family:'Jua',sans-serif;
    		font-size: 24px;
    	}
    </style>

</head>

<body id="top">

    <!-- preloader
    ================================================== -->
    <div id="preloader">
        <div id="loader" class="dots-fade">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
	
	<jsp:include page="header.jsp"></jsp:include>

    <!-- s-content
    ================================================== -->
    <section class="s-content s-content--top-padding s-content--narrow">

        <article class="row entry format-standard">
				<c:forEach var="Boards" items="${boardList}">
					<p class="boardTitle">${Boards.boardTitle}</p>
					<p class="releaseDate">${Boards.releaseDate}</p>
					<div>
						${Boards.boardContent}
					</div>
	                <div class="entry__taxonomies">
	                    <div class="entry__tags">
	                        <h5>Tags: </h5>
	                        <span class="entry__tax-list entry__tax-list--pill">
	                            <a href="/category?genre=${Boards.genre}">${Boards.genre}</a>
	                        </span>
	                    </div> <!-- end entry__tags -->
	                </div> <!-- end s-content__taxonomies -->
			</c:forEach>
        </article> <!-- end entry/article -->

    </section> <!-- end s-content -->

	<jsp:include page="footer.jsp"></jsp:include>

    <!-- Java Script
    ================================================== -->
    <script src="../temsource/js/jquery-3.2.1.min.js"></script>
    <script src="../temsource/js/plugins.js"></script>
    <script src="../temsource/js/main.js"></script>

</body>

</html>