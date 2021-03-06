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

<!-- Bootstrap CSS CDN -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/css/admin.css" />
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script> 
<script type="text/javascript" src="<c:url value='../resources/ckeditor/ckeditor.js'/>"></script>
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
				<form action="/admin/insertContent" method="post">
					<p>제목:&nbsp;&nbsp;<input type="text" name="boardTitle" placeholder="제목">
					      출시일:&nbsp;&nbsp;<input type="date" name="releaseDate">
					      장르:&nbsp;&nbsp;<select name="genre">
								<option value="">장르선택</option>
								<option value="Dance">Dance</option>
								<option value="Ballad">Ballad</option>
								<option value="R&B-Soul">R&B / Soul</option>
								<option value="Rap-Hip-hop">Rap / Hip-hop</option>
								<option value="Electronica">Electronica</option>
								<option value="OST">OST</option>
								<option value="Folk">Folk</option>
								<option value="Jazz">Jazz</option>
								<option value="Pop">Pop</option>
								<option value="Rock">Rock</option>
						    </select>
					국가:&nbsp;&nbsp;<select name="country">
								<option value="">국가선택</option>
								<option value="KOREA">KOREA</option>
								<option value="US-UK">US-UK</option>
								<option value="JAPAN">JAPAN</option>
								<option value="CHINA-TW-HK">CHINA-TW-HK</option>
						    </select>
						</p>
					<textarea id="ckeditor" name="boardContent">
						<p>식스밤 &ndash; 그대 동네<br />
						Release Date: 2018.11.08<br />
						Genre: Ballad<br />
						Language: Korean<br />
						Bit Rate: MP3-320kbps</p>
						
						<p>&nbsp;</p>
						
						<p>Track List:<br />
						01. 그대 동네</p>
						
						<p><strong>Download Album</strong></p>
						
						<p>File: Six Bomb &ndash; 그대 동네 [www.k2nblog.com].rar<br />
						Size: 10.8 MB<br />
						Hosted: MediaFire, 4Shared, Mega.co.nz, ZippyShare, PutLocker, Uploaded.to</p>
						
						<p>Download:</p>
						
						<p>Listen online &amp; individual tracks:</p>
						
						<p><img alt="Mirrored.logo" src="/resources/img/Mirrored.logo.png" style="height:74px; width:309px" /></p>
						
						<p><a href="" target="_blank"><span style="color:#2ecc71">ADF.LY</span></a>&nbsp;|&nbsp;<a href="" target="_blank"><span style="color:#2ecc71">LINKSHRINK</span></a></p>
						
						<p><img alt="" src="/resources/img/mediafire.png" style="height:60px; width:321px" /></p>
						
						<p><a href="" target="_blank"><span style="color:#2ecc71">ADF.LY</span></a>&nbsp;|&nbsp;<a href="" target="_blank"><span style="color:#2ecc71">LINKSHRINK</span></a></p>
						
						<p><img alt="" src="/resources/img/MEGAlogo.png" style="height:50px; width:180px" /></p>
						
						<p><a href="" target="_blank"><span style="color:#2ecc71">ADF.LY</span></a>&nbsp;|&nbsp;<a href="" target="_blank"><span style="color:#2ecc71">LINKSHRINK</span></a></p>
						
						<p><img alt="" src="/resources/img/4shared.gif" style="height:67px; width:190px" /></p>
						
						<p><a href="" target="_blank"><span style="color:#2ecc71">ADF.LY</span></a>&nbsp;|&nbsp;<a href="" target="_blank"><span style="color:#2ecc71">LINKSHRINK</span></a></p>
												
						<p>&nbsp;</p>	
					</textarea>
					<input type="hidden"name="${_csrf.parameterName}" value="${_csrf.token}"/>
					<input type="submit" value="작성">
				</form>
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
    
    <script type="text/javascript">
		$(function() {
			CKEDITOR.replace('ckeditor',{
				height:260,
				width:1000,
				filebrowserImageUploadUrl : '/admin/imageUpload?type=image'
				

			});
			CKEDITOR.editorConfig = function( config ) {
			    config.language = 'ko';
			    config.uiColor = '#F7B42C';
			    config.width=1000;
			    config.height = 300;
			    config.toolbarCanCollapse = true;
				config.toolbar = [
					{ name: 'document', items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
					{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
					{ name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
					{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
					'/',
					{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
					{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
					{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
					{ name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
					'/',
					{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
					{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
					{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
					{ name: 'about', items: [ 'About' ] }
				];
				config.removeButtons = 'Save';
				
			};
			
			window.parent.CKEDITOR.tools.callFunction({"filename" :'${filename}', "uploaded" : 1, "url":'${url}'});

		});
	</script>
</body>
</html>