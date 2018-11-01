/*
 * Ext JS Library 2.0 RC 1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 *
 * http://extjs.com/license
 */
Ext.onReady(function() {
    // tabs for the center
    var tabs=new Ext.TabPanel({
        region: 'center',
        margins:'3 3 3 3',
        activeTab: 0,
        autoTabs:true,
        resizeTabs:true,
        enableTabScroll:true,
        height:Ext.getBody().getHeight()-55,
        defaults: {autoScroll:true},
        items:[{
            title: 'log4sql에 대하여.',
            iconCls:'post',
            html:about
        },{
            title: '새소식',
            iconCls:'album',
            html:news
        },{
            title: '특징',
            iconCls:'icon-active',
            html:feature
        },{
            title: '사용',
            iconCls:'connect',
            html:usage
        },{
            title: '설정',
            iconCls:'gears',
            html:configuration
        },{
            title: '의견',
            iconCls:'comment',
            html:feedback
        }]
    });
    // Panel for the west
    var nav=new Ext.Panel({
        title: 'Summary',
        region: 'west',
        split: true,
        width: Ext.getBody().getWidth()-28,
        collapsible: true,
        margins:'3 3 3 3',
        cmargins:'3 3 3 3',
        layout:'accordion',
        layoutConfig:{
            animate:true
        },
        items: [{
            html: '',
            title:'Navigation',
            autoScroll:true,
            border:false,
            iconCls:'nav'
        }]
    });
    var win=new Ext.Window({
        title: "log4sql&nbsp;&nbsp;"+
               "<a href='http://log4sql.sourceforge.net/index_kr.html'><img src='../resource/image/nation/kr.png' border='0'></a>&nbsp;&nbsp;"+
               "<a href='http://log4sql.sourceforge.net/index.html'><img src='../resource/image/nation/en.png' border='0'></a>&nbsp;&nbsp;"+
               "<a href='http://log4sql.sourceforge.net/index_jp.html'><img src='../resource/image/nation/jp.png' border='0'></a>&nbsp;&nbsp;",

        closable:false,
        margins:'100 3 3 3',
        width:Ext.getBody().getWidth()-10,
        height:Ext.getBody().getHeight()-10,
        border:true,
        plain:true,
    //        items: [nav, tabs]
        items: [tabs]
    });
    win.show();
});