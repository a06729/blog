<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
	
    <!--- basic page needs
    ================================================== -->
    <meta charset="utf-8">
    <c:forEach var="countryList" items="${countryList}">
    	<title>${countryList.country}</title>
    </c:forEach>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- mobile specific metas
    ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="/temsource/css/base.css">
    <link rel="stylesheet" href="/temsource/css/vendor.css">
    <link rel="stylesheet" href="/temsource/css/main.css">
	<link rel="stylesheet" href="/css/paging.css">
    
    <!-- script
    ================================================== -->
    <script src="/temsource/js/modernizr.js"></script>
	<script src="/js/paging.js"></script>
	
    <!-- favicons
    ================================================== -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
	
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
    <c:choose>
    	<c:when test="${!empty countryList}">
			<section class="s-content" style="padding-top: 10rem;">
		        <div class="row entries-wrap wide">
		        	<p style="font-family:'Jua',sans-serif;text-align: center;">CATEGORY:${country}</p>
		            <div class="entries">
						<c:forEach var="category" items="${countryList}">
			                <article class="col-block">
			                    <div class="item-entry" data-aos="zoom-in">
			                        <div class="item-entry__thumb">
			                            <a href="/contentPage/${category.boardNum}" class="item-entry__thumb-link">
			                                <img src="${category.filePath}" style="width: 400px; height: 200px;">
			                            </a>
			                        </div>
			        
			                        <div class="item-entry__text">    
			                            <div class="item-entry__cat">
			                         		<c:choose>
			                                	<c:when test="${'Rap-Hip-hop' eq category.genre }">
			                                		<a href="/category/country/${category.genre}">Rap/Hip-hop</a>
			                                	</c:when>
			                                	<c:when test="${'R&B-Soul' eq category.genre }">
			                                		<a href="/category/country/${category.genre}">R&B/Soul</a>
			                                	</c:when>
			                                	<c:when test="${'Rap-Hip-hop' ne category.genre && 'R&B-Soul' ne category.genre}">
			                                		<a href="/category/country/${category.genre}">${category.genre}</a>
			                                	</c:when>
			                                </c:choose>
			                            </div>
			    
			                            <h1 class="item-entry__title"><a href="/contentPage/${category.boardNum}">${category.boardTitle}</a></h1>
			                                
			                            <div class="item-entry__date">
			                                <a href="single-standard.html">${category.releaseDate}</a>
			                            </div>
			                        	
			                        	<div class="item-entry__cat">
			                                <a href="/category/country/${category.country}">${category.country}</a> 
			                            </div>
			                        </div>
			                    </div> <!-- item-entry -->
			                </article> <!-- end article -->
		                </c:forEach>
		            </div> <!-- end entries -->
		        </div> <!-- end entries-wrap -->
		
		        <div class="row pagination-wrap">
					<div class="col-full">
						<nav class="pgn" data-aos="fade-up">
							<!-- 5. paging view -->
							<ul class="pagination">
								<c:if test="${p.pageStartNum ne 1}">
									<!--맨 첫페이지 이동 -->
									<li><a onclick='pagePre(${p.pageCnt+1},${p.pageCnt});'>«</a></li>
									<!--이전 페이지 이동 -->
									<li><a class="pgn__prev" onclick='pagePre(${p.pageStartNum},${p.pageCnt});'>‹</a></li>
								</c:if>
				
								<!--페이지번호 -->
								<c:forEach var='i' begin="${p.pageStartNum}" end="${p.pageLastNum}"
									step="1">
									<li class="pgn__num"><a onclick='pageIndex(${i});'>${i}</a></li>
								</c:forEach>
				
								<c:if test="${p.lastChk}">
									<!--다음 페이지 이동 -->
									<li><a
										class="pgn__next" onclick='pageNext(${p.pageStartNum},${p.total},${p.listCnt},${p.pageCnt});'>›</a></li>
									<!--마지막 페이지 이동 -->
									<li><a
										onclick='pageLast(${p.pageStartNum},${p.total},${p.listCnt},${p.pageCnt});'>»</a></li>
								</c:if>
							</ul>
							<form action="/category/country/${country}" method="post" id='frmPaging'>
								<!--출력할 페이지번호, 출력할 페이지 시작 번호, 출력할 리스트 갯수 -->
								<input type='hidden' name='index' id='index' value='${p.index}'>
								<input type='hidden' name='pageStartNum' id='pageStartNum'
									value='${p.pageStartNum}'> <input type='hidden'
									name='listCnt' id='listCnt' value='${p.listCnt}'>
							</form>
						</nav>
					</div>
		        </div>
		    </section> <!-- end s-content -->    	
    	</c:when>
    	
    	<c:when test="${empty countryList}">
    		<section class="s-content" style="padding-top: 10rem;">
    			<div class="row entries-wrap wide">
    				<p style="text-align:center;">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
    			</div>
    		</section>
    	</c:when>
    </c:choose>

    <!-- s-extra
    ================================================== -->
<!--     <section class="s-extra"> -->

<!--         <div class="row"> -->

<!--             <div class="col-seven md-six tab-full popular"> -->
<!--                 <h3>Popular Posts</h3> -->

<!--                 <div class="block-1-2 block-m-full popular__posts"> -->
<!--                     <article class="col-block popular__post"> -->
<!--                         <a href="#0" class="popular__thumb"> -->
<!--                             <img src="images/thumbs/small/tulips-150.jpg" alt=""> -->
<!--                         </a> -->
<!--                         <h5>10 Interesting Facts About Caffeine.</h5> -->
<!--                         <section class="popular__meta"> -->
<!--                             <span class="popular__author"><span>By</span> <a href="#0">John Doe</a></span> -->
<!--                             <span class="popular__date"><span>on</span> <time datetime="2018-06-14">Jun 14, 2018</time></span> -->
<!--                         </section> -->
<!--                     </article> -->
<!--                     <article class="col-block popular__post"> -->
<!--                         <a href="#0" class="popular__thumb"> -->
<!--                             <img src="images/thumbs/small/wheel-150.jpg" alt=""> -->
<!--                         </a> -->
<!--                         <h5><a href="#0">Visiting Theme Parks Improves Your Health.</a></h5> -->
<!--                         <section class="popular__meta"> -->
<!--                             <span class="popular__author"><span>By</span> <a href="#0">John Doe</a></span> -->
<!--                             <span class="popular__date"><span>on</span> <time datetime="2018-06-12">Jun 12, 2018</time></span> -->
<!--                         </section> -->
<!--                     </article> -->
<!--                     <article class="col-block popular__post"> -->
<!--                         <a href="#0" class="popular__thumb"> -->
<!--                             <img src="images/thumbs/small/shutterbug-150.jpg" alt=""> -->
<!--                         </a> -->
<!--                         <h5><a href="#0">Key Benefits Of Family Photography.</a></h5> -->
<!--                         <section class="popular__meta"> -->
<!--                             <span class="popular__author"><span>By</span> <a href="#0">John Doe</a></span> -->
<!--                             <span class="popular__date"><span>on</span> <time datetime="2018-06-12">Jun 12, 2018</time></span> -->
<!--                         </section> -->
<!--                     </article> -->
<!--                     <article class="col-block popular__post"> -->
<!--                         <a href="#0" class="popular__thumb"> -->
<!--                             <img src="images/thumbs/small/cookies-150.jpg" alt=""> -->
<!--                         </a> -->
<!--                         <h5><a href="#0">Absolutely No Sugar Oatmeal Cookies.</a></h5> -->
<!--                         <section class="popular__meta"> -->
<!--                             <span class="popular__author"><span>By</span> <a href="#0"> John Doe</a></span> -->
<!--                             <span class="popular__date"><span>on</span> <time datetime="2018-06-12">Jun 12, 2018</time></span> -->
<!--                         </section> -->
<!--                     </article> -->
<!--                     <article class="col-block popular__post"> -->
<!--                         <a href="#0" class="popular__thumb"> -->
<!--                             <img src="images/thumbs/small/beetle-150.jpg" alt=""> -->
<!--                         </a> -->
<!--                         <h5><a href="#0">Throwback To The Good Old Days.</a></h5> -->
<!--                         <section class="popular__meta"> -->
<!--                             <span class="popular__author"><span>By</span> <a href="#0">John Doe</a></span> -->
<!--                             <span class="popular__date"><span>on</span> <time datetime="2018-06-12">Jun 12, 2018</time></span> -->
<!--                         </section> -->
<!--                     </article> -->
<!--                     <article class="col-block popular__post"> -->
<!--                         <a href="#0" class="popular__thumb"> -->
<!--                             <img src="images/thumbs/small/salad-150.jpg" alt=""> -->
<!--                         </a> -->
<!--                         <h5>Healthy Mediterranean Salad Recipes</h5> -->
<!--                         <section class="popular__meta"> -->
<!--                             <span class="popular__author"><span>By</span> <a href="#0"> John Doe</a></span> -->
<!--                             <span class="popular__date"><span>on</span> <time datetime="2018-06-12">Jun 12, 2018</time></span> -->
<!--                         </section> -->
<!--                     </article> -->
<!--                 </div> end popular_posts -->
<!--             </div> end popular -->

<!--             <div class="col-four md-six tab-full end"> -->
<!--                 <div class="row"> -->
<!--                     <div class="col-six md-six mob-full categories"> -->
<!--                         <h3>Categories</h3> -->
        
<!--                         <ul class="linklist"> -->
<!--                             <li><a href="#0">Lifestyle</a></li> -->
<!--                             <li><a href="#0">Travel</a></li> -->
<!--                             <li><a href="#0">Recipes</a></li> -->
<!--                             <li><a href="#0">Management</a></li> -->
<!--                             <li><a href="#0">Health</a></li> -->
<!--                             <li><a href="#0">Creativity</a></li> -->
<!--                         </ul> -->
<!--                     </div> end categories -->
        
<!--                     <div class="col-six md-six mob-full sitelinks"> -->
<!--                         <h3>Site Links</h3> -->
        
<!--                         <ul class="linklist"> -->
<!--                             <li><a href="#0">Home</a></li> -->
<!--                             <li><a href="#0">Blog</a></li> -->
<!--                             <li><a href="#0">Styles</a></li> -->
<!--                             <li><a href="#0">About</a></li> -->
<!--                             <li><a href="#0">Contact</a></li> -->
<!--                             <li><a href="#0">Privacy Policy</a></li> -->
<!--                         </ul> -->
<!--                     </div> end sitelinks -->
<!--                 </div> -->
<!--             </div> -->
<!--         </div> end row -->

<!--     </section> end s-extra -->


	<jsp:include page="footer.jsp"></jsp:include>

    <!-- Java Script
    ================================================== -->
    <script src="/temsource/js/jquery-3.2.1.min.js"></script>
    <script src="/temsource/js/plugins.js"></script>
    <script src="/temsource/js/main.js"></script>

</body>
</html>