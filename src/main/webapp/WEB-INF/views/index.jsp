<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>

    <!--- basic page needs
    ================================================== -->
    <meta charset="utf-8">
    <title>Wordsmith</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- mobile specific metas
    ================================================== -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- CSS
    ================================================== -->
    <link rel="stylesheet" href="./temsource/css/base.css">
    <link rel="stylesheet" href="./temsource/css/vendor.css">
    <link rel="stylesheet" href="./temsource/css/main.css">
	<link rel="stylesheet" href="/css/paging.css">
    
    <!-- script
    ================================================== -->
    <script src="./temsource/js/modernizr.js"></script>
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


    <!-- header
    ================================================== -->
    <header class="s-header header">

        <div class="header__logo">
            <a class="logo" href="index.html">
                <img src="../temsource/images/logo.svg" alt="Homepage">
            </a>
        </div> <!-- end header__logo -->

        <a class="header__search-trigger" href="#0"></a>
        <div class="header__search">

            <form role="search" method="get" class="header__search-form" action="#">
                <label>
                    <span class="hide-content">Search for:</span>
                    <input type="search" class="search-field" placeholder="Type Keywords" value="" name="s" title="Search for:" autocomplete="off">
                </label>
                <input type="submit" class="search-submit" value="Search">
            </form>

            <a href="#0" title="Close Search" class="header__overlay-close">Close</a>

        </div>  <!-- end header__search -->

        <a class="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>
        <nav class="header__nav-wrap">

            <h2 class="header__nav-heading h6">Navigate to</h2>

            <ul class="header__nav">
                <li class="current"><a href="index.html" title="">Home</a></li>
                <li class="has-children">
                    <a href="#0" title="">Categories</a>
                    <ul class="sub-menu">
                        <li><a href="category.html">Lifestyle</a></li>
                        <li><a href="category.html">Health</a></li>
                        <li><a href="category.html">Family</a></li>
                        <li><a href="category.html">Management</a></li>
                        <li><a href="category.html">Travel</a></li>
                        <li><a href="category.html">Work</a></li>
                    </ul>
                </li>
                <li class="has-children">
                    <a href="#0" title="">Blog</a>
                    <ul class="sub-menu">
                        <li><a href="single-video.html">Video Post</a></li>
                        <li><a href="single-audio.html">Audio Post</a></li>
                        <li><a href="single-standard.html">Standard Post</a></li>
                    </ul>
                </li>
                <li><a href="style-guide.html" title="">Styles</a></li>
                <li><a href="page-about.html" title="">About</a></li>
                <li><a href="page-contact.html" title="">Contact</a></li>
            	<c:if test="${!empty pageContext.request.userPrincipal.name}">
            		${pageContext.request.userPrincipal.name}<a href="/logout" style="color: red">logOut</a>
            	</c:if>
            </ul> <!-- end header__nav -->

            <a href="#0" title="Close Menu" class="header__overlay-close close-mobile-menu">Close</a>

        </nav> <!-- end header__nav-wrap -->

    </header> <!-- s-header -->


    <!-- featured 
    ================================================== -->
    <section class="s-featured">
        <div class="row">
            <div class="col-full">

                <div class="featured-slider featured" data-aos="zoom-in">
					
	                 <c:forEach var="Board" items="${lists}" end="3">
	                    <div class="featured__slide">
	                        <div class="entry">
								
	                            <div class="entry__background" style="background-image:url('${Board.filePath}');"></div>
	                        
	                            <div class="entry__content">
	                                <span class="entry__category"><a href="#0">${Board.genre}</a></span>
	
	                                <h1><a href="#0" title="">${Board.boardTitle}</a></h1>
	
	                                <div class="entry__info" style="text-align: center;">
	                                    <ul class="entry__meta">
<!-- 	                                    <li><a href="#0">Jonathan Smith</a></li> -->
	                                        <li><a href="#0">${Board.releaseDate}</a></li>
	                                    </ul>
	                                </div>
	                            </div> <!-- end entry__content -->
	                            
	                        </div> <!-- end entry -->
	                    
	                    </div> <!-- end featured__slide -->
	                
                    </c:forEach>
                    
                </div> <!-- end featured -->

            </div> <!-- end col-full -->
        </div>
    </section> <!-- end s-featured -->


    <!-- s-content
    ================================================== -->
    <section class="s-content">
        
        <div class="row entries-wrap wide">
            <div class="entries">
				<c:forEach var="Board" items="${lists}">
	                <article class="col-block">
	                    
	                    <div class="item-entry" data-aos="zoom-in">
	                        <div class="item-entry__thumb">
	                            <a href="single-standard.html" class="item-entry__thumb-link">
	                                <img src="${Board.filePath}" style="width: 400px; height: 200px;">
	                            </a>
	                        </div>
	        
	                        <div class="item-entry__text">    
	                            <div class="item-entry__cat">
	                                <a href="category.html">${Board.genre}</a> 
	                            </div>
	    
	                            <h1 class="item-entry__title"><a href="single-standard.html">${Board.boardTitle}</a></h1>
	                                
	                            <div class="item-entry__date">
	                                <a href="single-standard.html">${Board.releaseDate}</a>
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
					<form action="/" method="post" id='frmPaging'>
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


    <!-- s-footer
    ================================================== -->
    <footer class="s-footer">

        <div class="s-footer__main">
            <div class="row">
                
                <div class="col-six tab-full s-footer__about">
                        
                    <h4>About Wordsmith</h4>

                    <p>Fugiat quas eveniet voluptatem natus. Placeat error temporibus magnam sunt optio aliquam. Ut ut occaecati placeat at. 
                    Fuga fugit ea autem. Dignissimos voluptate repellat occaecati minima dignissimos mollitia consequatur.
                    Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa error 
                    temporibus magnam est voluptatem.</p>

                </div> <!-- end s-footer__about -->

                <div class="col-six tab-full s-footer__subscribe">
                        
                    <h4>Our Newsletter</h4>

                    <p>Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.</p>

                    <div class="subscribe-form">
                        <form id="mc-form" class="group" novalidate="true">

                            <input type="email" value="" name="EMAIL" class="email" id="mc-email" placeholder="Email Address" required="">
                
                            <input type="submit" name="subscribe" value="Send">
                
                            <label for="mc-email" class="subscribe-message"></label>
                
                        </form>
                    </div>

                </div> <!-- end s-footer__subscribe -->

            </div>
        </div> <!-- end s-footer__main -->

        <div class="s-footer__bottom">
            <div class="row">

                <div class="col-six">
                    <ul class="footer-social">
                        <li>
                            <a href="#0"><i class="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i class="fab fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#0"><i class="fab fa-pinterest"></i></a>
                        </li>
                    </ul>
                </div>

                <div class="col-six">
                    <div class="s-footer__copyright">
                        <span><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</span>
                    </div>
                </div>
                
            </div>
        </div> <!-- end s-footer__bottom -->

        <div class="go-top">
            <a class="smoothscroll" title="Back to Top" href="#top"></a>
        </div>

    </footer> <!-- end s-footer -->


    <!-- Java Script
    ================================================== -->
    <script src="./temsource/js/jquery-3.2.1.min.js"></script>
    <script src="./temsource/js/plugins.js"></script>
    <script src="./temsource/js/main.js"></script>

</body>
</html>