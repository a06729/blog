<%--
/**
 * User: songinsup
 * Date Time: 2008. 1. 12 오후 12:21:17
 * Content : 
 */
--%>
<%@ page contentType="text/html;charset=EUC-KR" language="java" %>
<HTML>
<HEAD>
<TITLE> ::: ERROR MESSAGE :::</TITLE>
<link rel="STYLESHEET" type="text/css"
      href="/sqlmapper/message/css/message.css">
    <script type="text/javascript" src="../../dwr/interface/CommonDwr.js"></script>
    <script type="text/javascript" src="../../dwr/engine.js"></script>
    <script type="text/javascript" src="../../dwr/util.js"></script>
    <SCRIPT language=Javascript>

    strText=window.dialogArguments;
    argArray=new Array(strText.split('|').length);
    argArray=strText.split('|');
    btnTextClose=argArray[0];
    btnTextDetail=argArray[1];
    msgText=argArray[2];
    errorMsg=argArray[3];
    var btnFlag=true;
    function showDetail() {
        if(btnFlag) {
            btnFlag=false;
            document.all["show"].style.display="none";
            document.all["hide"].style.display="";
            document.all["errorMsg"].style.display="";
            window.dialogHeight="325px";
        } else {
            btnFlag=true;
            document.all["show"].style.display="";
            document.all["hide"].style.display="none";
            document.all["errorMsg"].style.display="none";
            window.dialogHeight="175px";
        }
    }
    function cancel() {
        CommonDwr.error({
            error_msg:errorMsg,
            gaga:"dddd",
            getRequestURI:"<%=request.getRequestURI()%>",
            getLocalName:"<%=request.getLocalName()%>",
            getContextPath:"<%=request.getContextPath()%>",
            getPathInfo:"<%=request.getPathInfo()%>",
            getServletPath:"<%=request.getServletPath()%>"
        }, callBack);
        window.close();
    }

    function callBack(){}
    document.onkeypress=press;
    function press() {
        if(event.keyCode == "13") {
            cancel();
        }
    }
    </SCRIPT>
</HEAD>

<BODY bgcolor="#FFFFFF" text="#000000" leftmargin="0" topmargin="0"
      marginwidth="0" marginheight="0">

    <TABLE width="350" height="150" border="0" cellspacing="0" cellpadding="0"
           bgcolor="#A9C1D3"
           style="border-top:#808080 solid 1px;border-left:#808080 solid 1px;border-right:#808080 solid 1px;">
        <TR height="2">
            <TD colspan="2"><IMG src="/sqlmapper/message/image/spacer.gif"
                                 width="1" height="2"></TD>
        </TR>
        <TR>
            <TD width="3"><IMG src="/sqlmapper/message/image/spacer.gif"
                               width="3" height="1"></TD>
            <TD class="table_subtitle">
                <TABLE width="100%" border="0" cellspacing="0" cellpadding="0"
                       style="border-top:#7E9299 solid 1px;border-left:#7E9299 solid 1px;border-right:#7E9299 solid 1px;border-bottom:#7E9299 solid 1px;">
                    <TR>
                        <TD background="/sqlmapper/message/image/table_back03.gif"><IMG
                                src="/sqlmapper/message/image/table_img03.gif"
                                width="5" height="9" border="0"></TD>
                    </TR>
                </TABLE>
            </TD>
            <TD width="3"><IMG src="/sqlmapper/message/image/spacer.gif"
                               width="3" height="1"></TD>
        </TR>
        <TR height="4">
            <TD colspan="2"><IMG src="/sqlmapper/message/image/spacer.gif"
                                 width="1" height="5"></TD>
        </TR>
        <TR>
            <TD width="3"><IMG src="/sqlmapper/message/image/spacer.gif"
                               width="3" height="1"></TD>
            <TD>
                <!--경고창 테이블 시작 -->
                <TABLE width="100%" height="100%" border="0" cellspacing="0"
                       cellpadding="0" bgcolor="#F4F7F9"
                       style="border-top:#575E64 solid 1px;border-left:#575E64 solid 1px;border-right:#575E64 solid 1px;border-bottom:#575E64 solid 1px;">
                    <TR>
                        <TD align="center" bgcolor="#FFFFFF"
                            class="table_subtitle">
                            <TABLE width="335" cellpadding="0" cellspacing="0"
                                   border="0">
                                <TR height="15">
                                    <TD bgcolor="#FFFFFF"><IMG
                                            src="/sqlmapper/message/image/spacer.gif"
                                            width="1" height="1"></TD>
                                </TR>
                                <TR>
                                    <TD align="center" bgcolor="#FFFFFF">
                                        <TABLE cellpadding="0" cellspacing="0"
                                               border="0">
                                            <TR>
                                                <TD width="45" valign="middle"
                                                    align="center"
                                                    class="message"><IMG
                                                        src="/sqlmapper/message/image/bu_erro.gif"
                                                        border="0"></TD>
                                                <TD width="20"><IMG
                                                        src="/sqlmapper/message/image/spacer.gif"
                                                        width="1"
                                                        height="1"></TD>
                                                <TD align="left"
                                                    class="message"><SCRIPT>document.write(msgText);</SCRIPT></TD>
                                            </TR>
                                        </TABLE>
                                    </TD>
                                </TR>
                                <TR height="35">
                                    <TD bgcolor="#FFFFFF" align="center"
                                        valign="bottom">
                                        <TABLE cellpadding="0" cellspacing="0"
                                               border="0">
                                            <TR>
                                                <TD align='center'
                                                    class='left_menu'
                                                    valign='bottom'>
                                                    <TABLE border='0'
                                                           cellspacing='0'
                                                           cellpadding='0'
                                                           height='19'
                                                           class='left_menu'
                                                           onClick="javascript:cancel();"
                                                           style='cursor:hand'>
                                                        <TR>
                                                            <TD rowspan='3'
                                                                align='right'><IMG
                                                                    src='/sqlmapper/message/image/button_left01.gif'
                                                                    width='6'
                                                                    height='21'></TD>
                                                            <TD background='/sqlmapper/message/image/button_center01.gif'><IMG
                                                                    src='/sqlmapper/message/image/spacer.gif'
                                                                    width='1'
                                                                    height='1'></TD>
                                                            <TD height='3'
                                                                background='/sqlmapper/message/image/button_center01.gif'><IMG
                                                                    src='/sqlmapper/message/image/spacer.gif'
                                                                    width='1'
                                                                    height='3'></TD>
                                                            <TD rowspan='3'><IMG
                                                                    src='/sqlmapper/message/image/button_right01.gif'
                                                                    width='6'
                                                                    height='21'></TD>
                                                        </TR>
                                                        <TR>
                                                            <TD bgcolor='#E3EAEF'
                                                                width='15'><IMG
                                                                    src='/sqlmapper/message/image/bu_confirm.gif'
                                                                    border='0'></TD>
                                                            <TD bgcolor='#E3EAEF'
                                                                align='center'
                                                                valign='bottom'><SCRIPT>document.write(btnTextClose);</SCRIPT></TD>
                                                        </TR>
                                                        <TR>
                                                            <TD colspan='2'
                                                                background='/sqlmapper/message/image/button_center02.gif'><IMG
                                                                    src='/sqlmapper/message/image/spacer.gif'
                                                                    width='1'
                                                                    height='2'></TD>
                                                        </TR>
                                                    </TABLE>
                                                </TD>
                                                <TD width="5"><IMG
                                                        src="/sqlmapper/message/image/spacer.gif"
                                                        width="5"
                                                        height="1"></TD>
                                                <TD bgcolor="#FFFFFF"
                                                    align="center"
                                                    valign="bottom">
                                                    <!-- 자세히 버튼 테이블 시작-->
                                                    <TABLE border="0"
                                                           cellspacing="0"
                                                           cellpadding="0"
                                                           height="19"
                                                           class="left_menu"
                                                           onClick="javascript:showDetail();"
                                                           style="cursor:hand;">
                                                        <TR>
                                                            <TD rowspan="3"
                                                                align="right"><IMG
                                                                    src="/sqlmapper/message/image/button_left01.gif"
                                                                    width="6"
                                                                    height="21"></TD>
                                                            <TD background="/sqlmapper/message/image/button_center01.gif"><IMG
                                                                    src="/sqlmapper/message/image/spacer.gif"
                                                                    width="1"
                                                                    height="1"></TD>
                                                            <TD height="3"
                                                                background="/sqlmapper/message/image/button_center01.gif"><IMG
                                                                    src="/sqlmapper/message/image/spacer.gif"
                                                                    width="1"
                                                                    height="3"></TD>
                                                            <TD rowspan="3"><IMG
                                                                    src="/sqlmapper/message/image/button_right01.gif"
                                                                    width="6"
                                                                    height="21"></TD>
                                                        </TR>
                                                        <TR>
                                                            <TD bgcolor="#E3EAEF"
                                                                align="center"
                                                                valign="bottom"><SCRIPT>document.write(btnTextDetail);</SCRIPT></td>
                                                            <TD bgcolor="#E3EAEF"
                                                                align="center"
                                                                valign="bottom"><DIV
                                                                    id="show"
                                                                    style="display:;">&nbsp;>>></DIV><DIV
                                                                    id="hide"
                                                                    style="display:none;">&nbsp;<<<</DIV> </TD>
                                                        </TR>
                                                        <TR>
                                                            <TD colspan="2"
                                                                background="/sqlmapper/message/image/button_center02.gif"><IMG
                                                                    src="/sqlmapper/message/image/spacer.gif"
                                                                    width="1"
                                                                    height="2"></TD>
                                                        </TR>
                                                    </TABLE>
                                                    <!-- 자세히 버튼 테이블 끝-->
                                                </TD>
                                            </TR>
                                        </TABLE>
                                    </TD>
                                </TR>
                                <TR height="10">
                                    <TD bgcolor="#FFFFFF"><IMG
                                            src="/sqlmapper/message/image/spacer.gif"
                                            width="1" height="1"></TD>
                                </TR>
                            </TABLE>
                        </TD>
                    </TR>
                </TABLE>
                <!--경고창 테이블 끝-->
            </TD>
            <TD width="3"><IMG src="/sqlmapper/message/image/spacer.gif"
                               width="3" height="1"></TD>
        </TR>
        <TR height="3">
            <TD colspan="2"><IMG src="/sqlmapper/message/image/spacer.gif"
                                 width="1" height="3"></TD>
        </TR>
    </TABLE>


    <!-- Detail table -->
    <DIV id="errorMsg" style="display:none;">
    <TABLE width="350" height="150" border="0" cellspacing="0" cellpadding="0"
           bgcolor="#A9C1D3"
           style="border-left:#808080 solid 1px;border-right:#808080 solid 1px;border-bottom:#808080 solid 1px;">
        <TR height="10">
            <TD colspan="3"><IMG src="/sqlmapper/message/image/spacer.gif"></TD>
        </TR>
        <TR>
            <TD width="10"><IMG src="/sqlmapper/message/image/spacer.gif"></TD>
            <TD>
                <SCRIPT>
                    document.write('<TEXTAREA name="msg" rows="8" cols="45" wrap="hard" style="background-color:#c0c0c0;">');
                    document.write(errorMsg+'</TEXTAREA>');
                </SCRIPT>
            </TD>
            <TD width="10"><IMG src="/sqlmapper/message/image/spacer.gif"></TD>
        </TR>
        <TR height="10">
            <TD colspan="3"><IMG src="/sqlmapper/message/image/spacer.gif"></TD>
        </TR>
    </TABLE>
    </DIV>
</BODY>
</HTML>

