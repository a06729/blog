<%--
/**
 * User: songinsup
 * Date Time: 2008. 1. 12 오후 12:22:03
 * Content : 
 */
--%>
<%@ page contentType="text/html;charset=EUC-KR" language="java" %>
<HTML>
<HEAD>
<TITLE> ::: INFO MESSAGE ::: </TITLE>
<link rel="STYLESHEET" type="text/css"
      href="/sqlmapper/message/css/message.css">
    <SCRIPT language=Javascript>

    strText=window.dialogArguments;
    argArray=new Array(strText.split('|').length);
    argArray=strText.split('|');
    var btnTextClose=argArray[0];
    var msgText=argArray[1];
    var itemName1=argArray[2];
    var itemName2=argArray[3];
    var itemName3=argArray[4];
    if(itemName1 != '') {
        msgArray=new Array(msgText.split('%1%').length);
        msgArray=msgText.split('%1%');
        msgText=msgArray[0]+itemName1+msgArray[1];
    }
    if(itemName2 != '') {
        msgArray=new Array(msgText.split('%2%').length);
        msgArray=msgText.split('%2%');
        msgText=msgArray[0]+itemName2+msgArray[1];
    }
    if(itemName3 != '') {
        msgArray=new Array(msgText.split('%3%').length);
        msgArray=msgText.split('%3%');
        msgText=msgArray[0]+itemName3+msgArray[1];
    }
    function cancel() {
        window.returnValue=true;
        window.close();
    }
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
       style="border-top:#808080 solid 1px;border-left:#808080 solid 1px;border-right:#808080 solid 1px;border-bottom:#808080 solid 1px;">
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
                                                        src="/sqlmapper/message/image/bu_confirm3.gif"
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
                                    <TD align='center' class='left_menu'
                                        valign='bottom'>
                                        <TABLE border='0' cellspacing='0'
                                               cellpadding='0' height='19'
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
                                                        src='/sqlmapper/message/image/bu_close.gif'
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
</BODY>
</HTML>



