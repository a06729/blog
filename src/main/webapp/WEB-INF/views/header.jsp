<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	    <!-- header
    ================================================== -->
    <header class="s-header header">

        <div class="header__logo">
            <a class="logo" href="/">
                <img src="/temsource/images/logo.svg" alt="Homepage">
            </a>
        </div> <!-- end header__logo -->

        <a class="header__search-trigger" href="#0"></a>
        <div class="header__search">

            <form action="/search" role="search" method="get" class="header__search-form">
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
                <li class="current"><a href="/" title="">Home</a></li>
                <li class="has-children">
                    <a href="#0" title="">Country</a>
                    <ul class="sub-menu">
                        <li><a href="/category/country/KOREA">KOREA</a></li>
                        <li><a href="/category/country/US-UK">US-UK</a></li>
                        <li><a href="/category/country/JAPAN">JAPAN</a></li>
                        <li><a href="/category/country/CHINA-TW-HK">CHINA-TW-HK</a></li>
                    </ul>
                </li>
                <li class="has-children">
                    <a href="#0" title="">GENRE</a>
                    <ul class="sub-menu">
                        <li><a href="/category/genre/Dance">Dance</a></li>
                        <li><a href="/category/genre/Ballad">Ballad</a></li>
                        <li><a href="/category/genre/R&B-Soul">R&B / Soul</a></li>
                        <li><a href="/category/genre/Rap-Hip-hop">Rap / Hip-hop</a></li>
                        <li><a href="/category/genre/Electronica">Electronica</a></li>
                        <li><a href="/category/genre/OST">OST</a></li>
                        <li><a href="/category/genre/Folk">Folk</a></li>
                        <li><a href="/category/genre/Jazz">Jazz</a></li>
                        <li><a href="/category/genre/Pop">Pop</a></li>
                        <li><a href="/category/genre/Rock">Rock</a></li>
                    </ul>
                </li>
                <c:if test="${!empty pageContext.request.userPrincipal.name}">
                	<li class="has-children">
	                    <a href="#0" title="">${pageContext.request.userPrincipal.name}</a>
	                    <ul class="sub-menu">
	                        <li><a href="/logout" style="color: red">logOut</a></li>
	                        <li><a href="/admin/boardPage">boardWrit</a></li>
	                        <li><a href="/admin/adminBoardList">BoardList</a></li>
							<li><a href="/insertPage">AddID</a></li>
	                    </ul>
                	</li>
           	    </c:if>
            </ul> <!-- end header__nav -->

            <a href="#0" title="Close Menu" class="header__overlay-close close-mobile-menu">Close</a>

        </nav> <!-- end header__nav-wrap -->

    </header> <!-- s-header -->