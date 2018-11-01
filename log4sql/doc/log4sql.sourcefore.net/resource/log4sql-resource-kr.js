about=
"<html>\n"+
"<meta http-equiv='Content-Type' content='text/html; charset=euc-kr'>\n"+
"<style type='text/css'>\n"+
"    body {\n"+
"        font-family: verdana, tahoma, helvetica;\n"+
"    }\n"+
"</style>\n"+
"<body><br><table width=100%><tr><td align='center'>\n"+
"    <!--Head Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 10px; COLOR: white; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=red>\n"+
"                    <FONT size=3>\n"+
"                        <B>log4sql에 대하여</B>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        log4sql은 소스의 변경없이 간단한 설정변경만으로 모든 SQL의 실행로그를 보여줍니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        개발을 할경우 우리는 무수히 많은 프레임웍과 도구들을 사용 합니다.<br>\n"+
"                        View계층, Model계층 그리고 Controller또는 DataAcess계층에서 많은 도구들과 프레임웍은 <br>\n"+
"                        현재 거의 모든 layer들에 걸쳐서 사용되고 개발되어지고 있습니다.<br>\n"+
"                        이런경우 개발자에게 중요한것중의 하나는 비즈니스 로직인 PL/SQL작업을 하는 것 입니다.<br>\n"+
"                        모든 PL/SQL작업은 SQL을 작성하고 실행한 후에 버그가 존재하가나 원하는 결과가 나오지 않을경우 수정하는 것이며<br>\n"+
"                        이런작업은 반복적으로 수행됩니다.<br>\n"+
"                        이런 경우에 우리는 jdbc또는 Connection Pooling(Apache DBCP) 또는 support 2PC (JTA,JOTM)등을 사용합니다.<br>\n"+
"                        또한 우리는 데이터 접근계층의 프레임웍으로 IBATIS나 SpringFramework을 사용할 경우 springJDBC또는 HIBERNATE등을 사용합니다.<br>\n"+
"                        이런 상황에서 우리는 의문을 갖게 됩니다. '내가 작성한 SQL이 정상적으로 작동한 것인가?', '내가 입력값으로 넣어준 값들이 제대로 등록된 SQL인가?'<br>\n"+
"                        SQL을 확인하고자 개발 소스의 구석구석에 System.out.println(...)으로 확인을 할 것입니다.<br>\n"+
"                        개발이 종료된 시점에 주석으로 가려진 가독성이 떨어지는 소스는 유지보수담당자에게 머리아픈 소스가 될 것이고<br>\n"+
"                        운영상에 문제가 발생할 경우 해당 SQL을 다시 확인하는 복잡한 작업이 반복될 것입니다.<br>\n"+
"                        <b>이런경우를 경험한 개발자라면 log4sql은 간단한 설정으로 많은 편리함을, 개발을 즐거움을 당신에게 드릴것 입니다.</b>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n" +
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n" +
"        <TBODY>\n" +
"            <TR>\n" +
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n" +
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n" +
"                    width='100%' bgColor=gray>\n" +
"                    <FONT size=2><b>\n" +
"                        평가.\n" +
"                    </b></FONT>\n" +
"                </TD>\n" +
"            </TR>\n" +
"        </TBODY>\n" +
"    </TABLE>\n" +
"    <!--box-->\n" +
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        <table>\n"+
"                            <tr>\n"+
"                                <td><a href='http://jars.developer.com/utilities/database/resource.php/36965'><img src='../resource/image/jars_top_rated_25.gif' border='0'></a></td>\n" +
"                            </tr>\n"+
"                        </table>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        다운로드 & 도움.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        다운로드는 sourceforge에서 받으실 수 있습니다.<br>\n"+
"                        옆의 링크에서 다운로드 받으세요 : <a href='http://sourceforge.net/project/showfiles.php?group_id=209296'>log4sql</a>\n"+
"                    </FONT>\n"+
"                    <br><a href='https://sourceforge.net/donate/index.php?group_id=209296'><img src='../resource/image/donate/project-support.jpg' border='0'></a>\n" +
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        의존성.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        log4sql은 Apache Commons Project(Apache Common Lang)을 사용했습니다.<br>\n"+
"                        <a href='http://commons.apache.org/lang/'>http://commons.apache.org/lang/</a>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        License.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        log4sql은 오픈소스이며, Apache 2.0 license를 취합니다.<br>\n"+
"                        <a href='http://www.apache.org/licenses/LICENSE-2.0'>http://www.apache.org/licenses/LICENSE-2.0</a>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        Special Thanks to.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        <table>\n"+
"                            <tr>\n"+
"                                <td><img src='../resource/image/thanks_to/sourceforge.bmp' border='0'></td>\n"+
"                                <td><img src='../resource/image/thanks_to/intellij.gif' border='0'></td>\n" +
"                            </tr>\n"+
"                        </table>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        Thanks to.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        아래의 조직 또는 회사 그리고 그룹들에 감사를 드립니다.\n"+
"                        <table>\n"+
"                            <tr>\n"+
"                                <td><img src='../resource/image/thanks_to/spring.png' border='0'></td>\n"+
"                                <td><img src='../resource/image/thanks_to/apache.jpg' border='0'></td>\n"+
"                                <td><img src='../resource/image/thanks_to/ibatis.jpg' border='0'></td>\n"+
"                                <td><img src='../resource/image/thanks_to/hibernate.jpg' border='0'></td>\n"+
"                                <td><img src='../resource/image/thanks_to/extjs.gif' border='0'></td>\n"+
"                            </tr>\n"+
"                        </table>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        Thanks to associate.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        테스트에 많은 협조를 주신 송하연 차장에게 감사를 드립니다.(Samsung SDS에서 근무중)\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    </td></tr></table>\n"+
"</body>\n"+
"</html>";
//todo
configuration=
"<html>\n"+
"<meta http-equiv='Content-Type' content='text/html; charset=euc-kr'>\n"+
"<style type='text/css'>\n"+
"    body {\n"+
"        font-family: verdana, tahoma, helvetica;\n"+
"    }\n"+
"</style>\n"+
"<body><br><table width=100%><tr><td align='center'>\n"+
"    <!--Head Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 10px; COLOR: white; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=red>\n"+
"                    <FONT size=3>\n"+
"                        <B>설정</B>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        우리는 log4sql_conf.jsp페이지를 통해서 보다 쉬운 운영상의 설정페이지를 제공합니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        <b><font color=green>log4sql-xxx.zip파일을 sourceforge싸이트에서 다운로드한 후에 압축을 풀게되면 log4jsq_conf.jsp파일을 [log4sql-xxx.zip]/log4sql_conf.jsp에서 볼 수 있습니다.<br>\n"+
"                        log4sql_conf.jsp파일을 개발하고 있는 어플리케이션의 context-root에 복사하세요<br>\n"+
"                        (만약 개발중인 어플리케이션 서버의 context_root이름이 'site-root'이고\n"+
"                        context_root까지의 디렉토리 구조가 'c://application/domain/site_root'와 같다면\n"+
"                        log4sql_conf.jsp를 'c://application/domain/site_root/log4sql_conf.jsp'처럼 복사하세요)<br>\n"+
"                        그런 후에 log4sql_conf.jsp을 브라우져로 열기 위해서 'http://개발ip:개발port/site_root/log4sql_conf.jsp'처럼 접근합니다.</font></b><br>\n"+
"                        <b>log4sql_sql.jsp</b>의 형태는 아래와 같은 그림이 보여질것 입니다.<br><br>\n"+
"                        <img src='../doc/log4sql_conf.jpg' border='0'><br><br>\n"+
"                        환경설정에 사용되어지는 속성값들은 <font color=blue><b>log4sql_configuration.properties</b></font>에 위치하고 있으며,<br>\n"+
"                        항상 같은 설정이 적용되어지길 원할경우\n"+
"                        <font color=blue><b>[log4sql-xxx.jar]/core/log/log4sql_configuration.properties</b></font>의 위치에서 해당항목의 값을 변경하시면 됩니다.\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        1.Log Level(log4sql_configuration.properties 파일에서 'log.level'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        Log Level은 로그를 남길경우의 우선 순위를 얘기하며, Log4j를 알고계신다면 쉽게 이해가 되실겁니다.<br>\n"+
"                        log4sql의 로그는 기본적으로 모두 DEBUG의 형태로 되어있으므로 DEBUG값 이상으로 로그레벨을 변경하게 되면 정상적인 로그를 남기지 않게 됩니다.<br>\n"+
"                        로그레벨의 종류는 DEBUG=0,INFO=1,WARNING=2,FATAL=3, ERROR=4, LOGGING_OFF=5와 같으며,<br>\n"+
"                        SQL수행도중에 구문문제 또는 잘못된 파라미터 INDEX에러가 발생하게 되면 자동으로 해당 SQL과 원인(Root cause Exception trace)를<br>\n"+
"                        ERROR 로그레벨로 남기게 되며, 모든 로그(Error 로그포함)를 남기지 않으려면 로그레벨을 LOGGING_OFF로 변경하시면 됩니다.<br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        2.Select Fix(log4sql_configuration.properties 파일에서 'query.logging.position.fixed.select'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        SELECT SQL에만 해당됩니다.<br>\n"+
"                        log4sql은 많은경우에 사용되어질 수 있도록 만들어 졌습니다.<br>\n"+
"                        따라서 우리는 log4sql을 사용하는 어플리케이션에서 어떠한 프레임웍을 사용하는지, 어떤 서버에서 실행되는지 알수가 없습니다.<br>\n"+
"                        문제가 있는 SQL일경우 사용자는 DEBUGING을 해야 할 것입니다. 그러기 위해선 어떤 클래서에서, 어떤 메소드에서 실행이 되었는지 알아야합니다.<br>\n"+
"                        log4sql은 SQL을 실행시킨 패키지와 클래스 그리고 어떤 메소드의 몇번째 라인에서 실행이 되었는지 실행된 시간과 함께 나타내 줍니다.<br>\n"+
"                        하지만, 위와같은 이유로 적합한 위치가 아닐수도 있으므로 log4sql은 적합한 위치를 사용자가 선택할 수 있도록 모든 실행에 참여한 클래스와 메소드들의\n"+
"                        항목을 모두 보여줍니다.<br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"<!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        3.Select Position(log4sql_configuration.properties파일에서 'query.logging.position.select'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    2번 항목에서 적합하다고 생각되는 항목의 번호를 Select Position에 입력한 후 확인 버튼을 클릭하거나, 영구적으로 변경을 원하는 경우는 log4sql_configuration.properties에서\n"+
"                    query.logging.position.select항목의 값으로 변경하시면 됩니다.<br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"<!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        4.None Select Fix(log4sql_configuration.properties파일에서 'query.logging.position.fixed.none_select'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        INSERT, UPDATE, DELETE SQL에만 해당됩니다.<br>\n"+
"                        log4sql은 많은경우에 사용되어질 수 있도록 만들어 졌습니다.<br>\n"+
"                        따라서 우리는 log4sql을 사용하는 어플리케이션에서 어떠한 프레임웍을 사용하는지, 어떤 서버에서 실행되는지 알수가 없습니다.<br>\n"+
"                        문제가 있는 SQL일경우 사용자는 DEBUGING을 해야 할 것입니다. 그러기 위해선 어떤 클래서에서, 어떤 메소드에서 실행이 되었는지 알아야합니다.<br>\n"+
"                        log4sql은 SQL을 실행시킨 패키지와 클래스 그리고 어떤 메소드의 몇번째 라인에서 실행이 되었는지 실행된 시간과 함께 나타내 줍니다.<br>\n"+
"                        하지만, 위와같은 이유로 적합한 위치가 아닐수도 있으므로 log4sql은 적합한 위치를 사용자가 선택할 수 있도록 모든 실행에 참여한 클래스와 메소드들의\n"+
"                        항목을 모두 보여줍니다.<br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"<!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        5.None Select Position(log4sql_configuration.properties파일에서 'query.logging.position.none_select'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    4번 항목에서 적합하다고 생각되는 항목의 번호를 Select Position에 입력한 후 확인 버튼을 클릭하거나, 영구적으로 변경을 원하는 경우는 log4sql_configuration.properties에서\n"+
"                    query.logging.position.select항목의 값으로 변경하시면 됩니다.<br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"<!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        6.View Parameter Position(log4sql_configuration.properties파일에서 'query.logging.view.position'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        PreparedStatement를 사용할 경우 원하는 결과가 나오지 않을경우 해당 파리미터의 값이 적당하게 메치되었는지 궁금하게 됩니다.<br>\n"+
"                        이럴경우 개발자들은 난감한 상황에 접하게 됩니다. log4sql은 모든 파라미터가 결합된 SQL로그를 보여줍니다.<br>\n"+
"                        하지만, SQL문자열에 직접 입력된 값이 존재할 경우 개발자는 어떤값이 입력된 값인지, 어떤값이 문자열에 존재하는 값인지 혼동을 할 수 있습니다.<br>\n"+
"                        View Parameter Position값을 'true'로 변경할 경우 SQL log에서 입력된 값의 좌측에 '/**P*/'와 같은 표시를 보여줍니다.\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"<!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        7.View Internal Error(log4sql_configuration.properties파일에서 'query.logging.view.internal.exception'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        log4sql은 내부적인 문제가 있더라도 실제 SQL의 실행에는 영향을 미치지 않습니다.<br>\n"+
"                        log가 출력되지 않는 비정상적인 경우에 View Internal Error의 값을 'true'로 변경할 경우 내부적인 오류라면 오류의 내용을 출력할 것입니다.<br>\n"+
"                        이 내용은 사용자에게 고맙지 않은 경우일 것이나, 해당 내용을 log4sql개발팀에게 보내준다면 보다 견고한 버젼으로의 변경이 용이할 것입니다.\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"<!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        8.Log To Asynchronous(log4sql_configuration.properties파일에서 'query.logging.asynchronous'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        log4sql은 SQL로그의 출력에 있어서 두가지 방법을 사용합니다.\n"+
"                        <b>동기적인 경우</b>(Log To Asynchronous의 값을 'false'로 변경할 경우)모든 SQL로그는 순차적으로 실행이 될 것입니다.<br>\n"+
"                        이경우 log4sql에서의 모든 작업이 수행된 후에 다음 작업을 수행 할 것입니다.(많은 동시접속자가 존재하는 많은 로그가 출력되고 있는 상황에서 성능에 영향을 줄 수가 있습니다.<br>\n"+
"                        하지만 개발시 소수의 개발자에 의해서 디버그 용도로 실행되고 있을경우는 거의 영향을 주지 않습니다.)\n"+
"                        <b>비동기적인 경우</b>(Log To Asynchronous의 값을 'true'로 변경할 경우)모든 SQL로그는 항상 순차적으로 실행되지 않습니다.<br>\n"+
"                        이경우 log4sql에서의 모든 작업과 SQL로그를 남기는 작업은 별도의 Thread로 동작할 것입니다.(많은 동시접속자가 존재(300tps)하는 많은 로그가 출력되고 있는 상황에서 성능을<br>\n"+
"                        보장하여 줄 것이나 이경우 로그는 순차적으로 남기지 않습니다.)\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"<!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        9.View Appointed Package(log4sql_configuration.properties파일에서 'query.logging.view.appoint'항목을 참조함).\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        아마도 개발자 혼자서 모든 개발을 진행하는 일은 흔치 않을것입니다.<br>\n"+
"                        따라서 log4sql은 개발자가 개발하고 있는 패키지 혹은 클래스 혹은 메소드에 한해서만 로그를 남길수 있습니다.<br>\n"+
"                        설정의 방법은 아래의 내용을 참조하세요.<br><br>\n"+
"                        <table><tr><td bgcolor='yellow'>\n"+
"                        <b>[예약된 기호들]</b><b>*..*</b> : 모든 패키지를 의미합니다, <b>*</b> : 모든 클래스를 의미합니다, <b>(..)</b> : 모든 메소드들을 의미합니다<br>\n"+
"                        </td></tr></table>\n"+
"                        View Appointed Package의 값을 *..*.*.(..)로 입력한다면 실행 되고있는 모든 SQL로그가 보여질 것 입니다.<br>\n"+
"                        parttern 1  : *..*.*.(..) (모든 로그가 보여집니다.)<br>\n"+
"                        parttern 2  : net.*..*.*.(..) ('net'으로 시작되는 패키지 하위의 SQL모든 클래스의 로그가 출력됩니다.)<br>\n"+
"                        parttern 3  : *..*.Package_name.*..*.*.(..) ('Package_name'이 중간에 포함된 패키지의 로그가 보여집니다.)<br>\n"+
"                        parttern 4  : *..*.Package_name.*.(..)('Package_name'으로끝나는 모든 패키지의 로그가 보여집니다.)<br>\n"+
"                        parttern 5  : *..*.Class_name.(..) (클래스 이름이 'Class_name'인 곳의 로그가 보여집니다.)<br>\n"+
"                        parttern 6  : *..*.Package_name.Class_name.(..) (패지지가 'Package_name'로 종료되고 클래스 이름이 'Class_name'인 곳의 SQL 로그가 출력됩니다.)<br>\n"+
"                        parttern 7  : *..*.Package_name.*..*.Class_name.(..) (패키지가 'Package_name'을 포함하고 있고 클래스 이름이 'Class_name'인 곳의 SQL 로그가 출력됩니다.)<br>\n"+
"                        parttern 8  : *..*.Package_name.Class_name.Method_name (패키지의 이름이 'Package_name'로 종료되며, 클래스의 이름이 'Class_name'이고 메소드의 이름이 'Method_name'인 곳의 SQL 로그가 출력됩니다.)<br>\n"+
"                        parttern 9  : *..*.Package_name.*..*.Class_name.Method_name (패키지의 이름이 'Package_name'을 포함하고 있고 클래스 이름이 'Class_name'이고 메소드 이름이 'Method_name'인 곳의 SQL 로그가 출력됩니다.)<br>\n"+
"                        parttern 10 : *..*.Class_name.Method_name (모든 패키지에서 클래스 이름이 'Class_name'이고 메소드 이름이 'Method_name'인 곳의 SQL 로그가 출력됩니다.)<br>\n"+
"                        parttern 11 : *..*.Package_name.*.Method_name (패키지 이름이 'Package_name'로 종료되고 메소드 이름이 'Method_name'인 곳의 SQL 로그가 출력됩니다.)<br>\n"+
"                        parttern 12 : *..*.Package_name.*..*.*.Method_name (패키지 이름에서 'Package_name'를 포함하고 있고 메소드 이름이 'Method_name'인 곳의 SQL 로그가 출력됩니다.)<br>\n"+
"                        parttern 13 : *..*.*.Method_name (모든 패키지와 모든 클래스 중에서 메소드 이름이 'Method_name'인 곳의 SQL모든 로그가 출력됩니다.)<br>\n"+
"                        parttern 14 : net.sourceforge.log4sql.Class_name.Method_name (패키지가 'net.sourceforge.log4sql'이고 클래스 이름이 'Class_name'이고 메소드 이름이 'Method_name'인 곳의 SQL로그가 출력됩니다.)<br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR></td></tr></table>\n"+
"</body>\n"+
"</html>";
feature=
"<html>\n"+
"<meta http-equiv='Content-Type' content='text/html; charset=euc-kr'>\n"+
"<style type='text/css'>\n"+
"    body {\n"+
"        font-family: verdana, tahoma, helvetica;\n"+
"    }\n"+
"</style>\n"+
"<body><br><table width=100%><tr><td align='center'>\n"+
"    <!--Head Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 10px; COLOR: white; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=red>\n"+
"                    <FONT size=3>\n"+
"                        <B>특징</B>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        1.쉬운 설정.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white><FONT size=2>\n"+
"                    log4sql은 굉장히 간단한 설정을 지원합니다.<br>\n"+
"                    개발자들이 할 일은 log4sql-xxx.jar파일을 클래스패스에 복사한 후에<br>\n"+
"                    사용하고 있는 driver-class 이름을 log4sql에서 지원하는 driver-class명으로만 바꿔주시면 됩니다.\n"+
"                </FONT></TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        2.개발성 향상.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white><FONT size=2>\n"+
"                    log4sql은 SQL파라미터 매치된 로그뿐 아니라, 로그의 위치와 걸린시간 그리고 수행결과(INSERT,UPDATE,DELETE)를 보여드립니다.\n"+
"                </FONT></TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        3. SQL실행시간을 가장 정확히 파악합니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white><FONT size=2>\n"+
"                    log4sql은 실제 서비스와 동일한 시점의 순수한 SQL실행 시간만을 나타냅니다.<br>\n"+
"                    즉 이것은 Connection을 얻어오거나, Connection Pooling기법을 사용하더라도,\n"+
"                    실제 작성된 SQL이 DBMS에 전달된 후 결과 값을 받아오기까지의 걸린 시간만을 측정하여<br>\n"+
"                    성능에 이상이 있는 SQL등을 쉽게 확인 할 수 있습니다.\n"+
"                </FONT></TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        4. Application의 성능과 실행에 영향을 주지 않습니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white><FONT size=2>\n"+
"                    log4sql은 내부적인 문제가 존재하더라도 실제 Application에 영향을 주지는 않습니다.<br>\n"+
"                    내부적인 문제가 발생할 경우 해당로그는 설정변경으로 확인이 가능하며,\n"+
"                    동시접속사용자가 많은경우 log4sql은 비동기 모드로의 전환이 실행환경에서 가능하도록 설계되었습니다.\n"+
"                </FONT></TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        5.어떤 유형의 프로젝트라도 적용이 가능합니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white><FONT size=2>\n"+
"                    JDK1.4이상의 아래의 JDBC드라이버 리스트를 사용하는 어떤 프로젝트라도 사용이 가능합니다.<br><br>\n"+
"                    [<b>ORACLE DRIVER CLASS</b>]      'oracle.jdbc.drirver.OracleDriver'<br>\n"+
"                    [<b>MYSQL DRIVER CLASS</b>]       'com.mysql.jdbc.Driver' or 'org.gjt.mm.mysql.Driver'<br>\n"+
"                    [<b>SYBASE DRIVER CLASS</b>]      'com.sybase.jdbc2.jdbc.SybDriver'<br>\n"+
"                    [<b>DB2 DRIVER CLASS</b>]         'com.ibm.db2.jcc.DB2Driver'<br>\n"+
"                    [<b>INFOMIX DRIVER CLASS</b>]     'com.informix.jdbc.IfxDriver'<br>\n"+
"                    [<b>POSTGRESQL DRIVER CLASS</b>]  'org.postgresql.Driver'<br>\n"+
"                    [<b>MAXDB DRIVER CLASS</b>]       'com.sap.dbtech.jdbc.DriverSapDB'<br>\n"+
"                    [<b>FRONTBASE DRIVER CLASS</b>]   'com.frontbase.jdbc.FBJDriver'<br>\n"+
"                    [<b>HSQL DRIVER CLASS</b>]        'org.hsqldb.jdbcDriver'<br>\n"+
"                    [<b>POINTBASE DRIVER CLASS</b>]   'com.pointbase.jdbc.jdbcUniversalDriver'<br>\n"+
"                    [<b>MIMER DRIVER CLASS</b>]       'com.mimer.jdbc.Driver'<br>\n"+
"                    [<b>PERVASIVE DRIVER CLASS</b>]   'com.pervasive.jdbc.v2.Driver'<br>\n"+
"                    [<b>DAFFODILDB DRIVER CLASS</b>]  'in.co.daffodil.db.jdbc.DaffodilDBDriver'<br>\n"+
"                    [<b>JDATASTORE DRIVER CLASS</b>]  'com.borland.datastore.jdbc.DataStoreDriver'<br>\n"+
"                    [<b>CACHE DRIVER CLASS</b>]       'com.intersys.jdbc.CacheDriver'<br>\n"+
"                    [<b>DERBY DRIVER CLASS</b>]       'org.apache.derby.jdbc.ClientDriver'<br>\n"+
"                    [<b>ALTIBASE DRIVER CLASS</b>]    'Altibase.jdbc.driver.AltibaseDriver'<br>\n"+
"                    [<b>MCKOI DRIVER CLASS</b>]       'com.mckoi.JDBCDriver'<br>\n"+
"                    [<b>JSQL DRIVER CLASS</b>]        'com.jnetdirect.jsql.JSQLDriver'<br>\n"+
"                    [<b>JTURBO DRIVER CLASS</b>]      'com.newatlanta.jturbo.driver.Driver'<br>\n"+
"                    [<b>JTDS DRIVER CLASS</b>]        'net.sourceforge.jtds.jdbc.Driver'<br>\n"+
"                    [<b>INTERCLIENT DRIVER CLASS</b>] 'interbase.interclient.Driver'<br>\n"+
"                    [<b>PURE JAVA DRIVER CLASS</b>]   'org.firebirdsql.jdbc.FBDriver'<br>\n"+
"                    [<b>JDBC-ODBC DRIVER CLASS</b>]   'sun.jdbc.odbc.JdbcOdbcDriver'<br>\n"+
"                    [<b>MSSQL 2000 DRIVER CLASS</b>]  'com.microsoft.jdbc.sqlserver.SQLServerDriver'<br>\n"+
"                    [<b>MSSQL 2005 DRIVER CLASS</b>]  'com.microsoft.sqlserver.jdbc.SQLServerDriver'<br>\n"+
"                    </FONT></TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br></td></tr></table>\n"+
"</body>\n"+
"</html>";
feedback=
"<html>\n"+
"<meta http-equiv='Content-Type' content='text/html; charset=euc-kr'>\n"+
"<style type='text/css'>\n"+
"    body {\n"+
"        font-family: verdana, tahoma, helvetica;\n"+
"    }\n"+
"</style>\n"+
"<body><br><table width=100%><tr><td align='center'>\n"+
"    <!--Head Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 10px; COLOR: white; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=red>\n"+
"                    <FONT size=3>\n"+
"                        <B>의견</B>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=blue>\n"+
"                    <FONT size=2><b>\n"+
"                        당신의 제안과 의견은 우리에게 굉장히 큰 기쁨일 것입니다.<br>\n"+
"                        많은 격려와 의견을 기다리고 있습니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        이메일\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    <b>insup74@empal.com</b><br>\n"+
"                    <b>songinsup@users.sourceforge.net</b><br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        블로그\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    <a href='http://insup.blogspot.com'><b>http://insup.blogspot.com</b></a><br>\n"+
"                    <a href='http://blog.empas.com/insup74'><b>http://blog.empas.com/insup74</b></a><br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR></td></tr></table>\n"+
"</body>\n"+
"</html>";
news=
"<html>\n"+
"<meta http-equiv='Content-Type' content='text/html; charset=euc-kr'>\n"+
"<style type='text/css'>\n"+
"    body {\n"+
"        font-family: verdana, tahoma, helvetica;\n"+
"    }\n"+
"</style>\n"+
"<body><br><table width=100%><tr><td align='center'>\n"+
"    <!--Head Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 10px; COLOR: white; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=red>\n"+
"                    <FONT size=3>\n"+
"                        <b>새소식</b>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br><br>\n"+
"    <!--Middle Title-->\n" +
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n" +
"        <TBODY>\n" +
"            <TR>\n" +
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n" +
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n" +
"                    width='100%' bgColor=gray>\n" +
"                    <FONT size=2><b>\n" +
"                        안정된 log4sql 7.0 이 배포되었습니다.\n" +
"                    </b></FONT>\n" +
"                </TD>\n" +
"            </TR>\n" +
"        </TBODY>\n" +
"    </TABLE>\n" +
"    <!--box-->\n" +
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n" +
"        <TBODY>\n" +
"            <TR>\n" +
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n" +
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n" +
"                    width='100%' bgColor=white>\n" +
"                    <FONT size=2>\n" +
"                    <b>안정된 log4sql 7.0</b><br>\n" +
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
"                    Release Date : <b>2008.04.11</b><br>\n" +
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
"                    &nbsp;&nbsp;&nbsp;\n" +
"                    개선항목 : 1. 버그들이 수정되었습니다.<br>\n" +
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
"                    2. 쿼리의 Format기능이 강화되었습니다.\n" +
"                    </FONT>\n" +
"                </TD>\n" +
"            </TR>\n" +
"        </TBODY>\n" +
"    </TABLE><BR>\n" +
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        log4sql-bata_5.0.5가 배포되었습니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    <b>log4sql-bata_5.0.5</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    Release Date : <b>2007.12.14</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;\n"+
"                    개선 항목 : 1. 패키지, 클래스, 메소드에 따른 선택적인 로그의 출력이 가능.<br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        log4sql-beta_5.0.1가 배포되었습니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    <b>log4sql-bata_5.0.1</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    Release Date : <b>2007.12.06</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;\n"+
"                    개선 항목 : 1. 비동기 로그의 출력이 가능하도록 설정 추가.<br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    2. JDBC-ODBC 그리고 MS-SQL Driver 추가.\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                            log4sql-beta_4.0.1가 배포되었습니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    <b>log4sql-bata_4.0.1</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    Release Date : <b>2007.11.19</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;\n"+
"                    개선 항목 : 1. Hibernate 안정화 <br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    2. 실행도중 설정변경이 용이하도록 log4sql_conf.jsp추가반영.<br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    3. JDBC Driver 추가(Mckoi SQL, JSQL Driver, JTURBO Driver, jTDS, Interbase, Pure Java).<br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        log4sql-beta_4.0가 배포되었습니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    <b>log4sql-bata_4.0</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    Release Date : <b>2007.11.16</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;\n"+
"                    개선 항목   : 1. IBATIS 안정화.<br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    2. 성능 안정화.\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        log4sql-beta_3.0가 배포되었습니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    <b>log4sql-bata_3.0</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    Release Date : <b>2007.11.10</b><br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;\n"+
"                    개선 항목   : 1. DBCP 안정화.<br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    2. 특수문자 사용후 문제발생이 이유로 제거.<br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    3. 환경설정 사항 추가(내부의 에러 발생시 확인가능 옵션 추가).<br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    4. SQL의 문제가 발생하더라도 해당로그와 에러의 원인을 같이 보여주도록 변경.<br>\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        log4sql-alpha가 배포되었습니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    <b>log4sql 시작되었습니다.</b><br>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR></td></tr></table>\n"+
"</body>\n"+
"</html>";
usage=
"<html>\n"+
"<meta http-equiv='Content-Type' content='text/html; charset=euc-kr'>\n"+
"<style type='text/css'>\n"+
"    body {\n"+
"        font-family: verdana, tahoma, helvetica;\n"+
"    }\n"+
"</style>\n"+
"<body><br><table width=100%><tr><td align='center'>\n"+
"    <!--Head Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 10px; COLOR: white; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=red>\n"+
"                    <FONT size=3>\n"+
"                        <B>사용</B>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><br><br>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        1.log4sql-xxx.jar파일을 클래스패스에 복사하십시요.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                    log4sql-xxx.zip파일은 sourceforge에서 다운로드한 후 압축을 해제합니다.<br>\n"+
"                    그리고나서 압축을 해제한 폴도에 가서 log4sql-xxx.jar을 복사한후 SQL로그를 보고자하는 어플리케이션을 lib디렉토리에 복사합니다.\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR>\n"+
"    <!--Middle Title-->\n"+
"    <TABLE cellSpacing=0 cellPadding=0 width='97%' border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 0px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 3px; COLOR: white; PADDING-TOP: 5px'\n"+
"                    width='100%' bgColor=gray>\n"+
"                    <FONT size=2><b>\n"+
"                        2.Driver Class이름을 변경합니다.\n"+
"                    </b></FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE>\n"+
"    <!--box-->\n"+
"    <TABLE cellSpacing=1 cellPadding=1 width='97%' bgColor=black border=0>\n"+
"        <TBODY>\n"+
"            <TR>\n"+
"                <TD style='PADDING-RIGHT: 10px; PADDING-LEFT: 10px;\n"+
"                    PADDING-BOTTOM: 8px; PADDING-TOP: 10px'\n"+
"                    width='100%' bgColor=white>\n"+
"                    <FONT size=2>\n"+
"                        만약 Oracle Driver를 사용하신다면 driver-class의 설정은 아마도 아래와 같을 것입니다.\n"+
"                        <b><font color=blue>&ltdriver class='oracle.jdbc.driver.OracleDriver'&gt</font></b>와 같다면 <b><font\n"+
"                            color=blue>&ltdriver class='core.log.jdbc.driver.OracleDriver'&gt</font></b>로 변경하면 됩니다.<br>\n"+
"                        아래의 리스트는 log4sql에서 지원하고 있는 driver의 리스트 입니다.<br><br>\n"+
"                        <table cellSpacing=1 cellPadding=0 width='100%'  border=1>\n"+
"                            <tr><td align=center><b>JDBC TYPE</b></td><td align=center><b>Origin Your Driver Class</b></td><td><b>-></b></td><td align=center><b>log4sql Driver Class</b></td> </tr>\n"+
"                            <tr><td>[ORACLE DRIVER CLASS]</td><td>'oracle.jdbc.drirver.OracleDriver' </td><td>-></td><td>'core.log.jdbc.driver.OracleDriver' </td> </tr>\n"+
"                            <tr><td>[MYSQL DRIVER CLASS]</td><td>'com.mysql.jdbc.Driver' or'org.gjt.mm.mysql.Driver' </td><td>-></td><td>'core.log.jdbc.driver.MysqlDriver' </td>  </tr>\n"+
"                            <tr><td>[SYBASE DRIVER CLASS]</td><td>'com.sybase.jdbc2.jdbc.SybDriver'</td><td>-></td><td>'core.log.jdbc.driver.SybaseDriver' </td> </tr>\n"+
"                            <tr><td>[DB2 DRIVER CLASS]</td><td>'com.ibm.db2.jcc.DB2Driver'</td><td>-></td><td>'core.log.jdbc.driver.DB2Driver'</td> </tr>\n"+
"                            <tr><td>[INFOMIX DRIVER CLASS]</td><td>'com.informix.jdbc.IfxDriver'</td><td>-></td><td>'core.log.jdbc.driver.InfomixDriver'</td> </tr>\n"+
"                            <tr><td>[POSTGRESQL DRIVER CLASS]</td><td>'org.postgresql.Driver'</td><td>-></td><td>'core.log.jdbc.driver.PostgresqlDriver' </td> </tr>\n"+
"                            <tr><td>[MAXDB DRIVER CLASS]</td><td>'com.sap.dbtech.jdbc.DriverSapDB'</td><td>-></td><td>'core.log.jdbc.driver.MaxDBDriver'</td> </tr>\n"+
"                            <tr><td>[FRONTBASE DRIVER CLASS]</td><td>'com.frontbase.jdbc.FBJDriver' </td><td>-></td><td>'core.log.jdbc.driver.FrontBaseDriver'</td> </tr>\n"+
"                            <tr><td>[HSQL DRIVER CLASS]</td><td>'org.hsqldb.jdbcDriver'</td><td>-></td><td>'core.log.jdbc.driver.HSQLDriver' </td> </tr>\n"+
"                            <tr><td>[POINTBASE DRIVER CLASS]</td><td>'com.pointbase.jdbc.jdbcUniversalDriver' </td><td>-></td><td>'core.log.jdbc.driver.PointBaseDriver'</td> </tr>\n"+
"                            <tr><td>[MIMER DRIVER CLASS]</td><td>'com.mimer.jdbc.Driver'</td><td>-></td><td>'core.log.jdbc.driver.MimerDriver'</td> </tr>\n"+
"                            <tr><td>[PERVASIVE DRIVER CLASS]</td><td>'com.pervasive.jdbc.v2.Driver' </td><td>-></td><td>'core.log.jdbc.driver.PervasiveDriver'</td> </tr>\n"+
"                            <tr><td>[DAFFODILDB DRIVER CLASS]</td><td>'in.co.daffodil.db.jdbc.DaffodilDBDriver'</td><td>-></td><td>'core.log.jdbc.driver.DaffodiLDBDriver' </td> </tr>\n"+
"                            <tr><td>[JDATASTORE DRIVER CLASS]</td><td>'com.borland.datastore.jdbc.DataStoreDriver' </td><td>-></td><td>'core.log.jdbc.driver.JdataStoreDriver' </td> </tr>\n"+
"                            <tr><td>[CACHE DRIVER CLASS]</td><td>'com.intersys.jdbc.CacheDriver'</td><td>-></td><td>'core.log.jdbc.driver.CacheDriver'</td> </tr>\n"+
"                            <tr><td>[DERBY DRIVER CLASS]</td><td>'org.apache.derby.jdbc.ClientDriver' </td><td>-></td><td>'core.log.jdbc.driver.DerbyDriver'</td> </tr>\n"+
"                            <tr><td>[ALTIBASE DRIVER CLASS]</td><td>'Altibase.jdbc.driver.AltibaseDriver'</td><td>-></td><td>'core.log.jdbc.driver.AltibaseDriver' </td> </tr>\n"+
"                            <tr><td>[MCKOI DRIVER CLASS]</td><td>'com.mckoi.JDBCDriver' </td><td>-></td><td>'core.log.jdbc.driver.MckoiDriver'</td> </tr>\n"+
"                            <tr><td>[JSQL DRIVER CLASS]</td><td>'com.jnetdirect.jsql.JSQLDriver' </td><td>-></td><td>'core.log.jdbc.driver.JsqlDriver' </td> </tr>\n"+
"                            <tr><td>[JTURBO DRIVER CLASS]</td><td>'com.newatlanta.jturbo.driver.Driver'</td><td>-></td><td>'core.log.jdbc.driver.JturboDriver' </td> </tr>\n"+
"                            <tr><td>[JTDS DRIVER CLASS]</td><td>'net.sourceforge.jtds.jdbc.Driver' </td><td>-></td><td>'core.log.jdbc.driver.JtdsDriver' </td> </tr>\n"+
"                            <tr><td>[INTERCLIENT DRIVER CLASS]</td><td>'interbase.interclient.Driver' </td><td>-></td><td>'core.log.jdbc.driver.InterClientDriver'</td> </tr>\n"+
"                            <tr><td>[PURE JAVA DRIVER CLASS]</td><td>'org.firebirdsql.jdbc.FBDriver'</td><td>-></td><td>'core.log.jdbc.driver.PureJavaDriver' </td> </tr>\n"+
"                            <tr><td>[JDBC-ODBC DRIVER CLASS]</td><td>'sun.jdbc.odbc.JdbcOdbcDriver' </td><td>-></td><td>'core.log.jdbc.driver.JdbcOdbcDriver' </td> </tr>\n"+
"                            <tr><td>[MSSQL 2000 DRIVER CLASS]</td><td>'com.microsoft.jdbc.sqlserver.SQLServerDriver' </td><td>-></td><td>'core.log.jdbc.driver.MssqlDriver'</td> </tr>\n"+
"                            <tr><td>[MSSQL 2005 DRIVER CLASS]</td><td>'com.microsoft.sqlserver.jdbc.SQLServerDriver' </td><td>-></td><td>'core.log.jdbc.driver.Mssql2005Driver'</td> </tr>\n"+
"                        </table>\n"+
"                    </FONT>\n"+
"                </TD>\n"+
"            </TR>\n"+
"        </TBODY>\n"+
"    </TABLE><BR></td></tr></table>\n"+
"</body>\n"+
"</html>";