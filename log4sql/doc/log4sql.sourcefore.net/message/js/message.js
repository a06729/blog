var btnTextConfirm = '확인';
var btnTextCancel  = '취소';
var btnTextClose   = '닫기';
var btnTextDetail  = '자세히'

function messageFormObject() {
    this.btnTextClose  ;
    this.btnTextConfirm;
    this.btnTextCancel ;
    this.btnTextDetail ;
}

function findMessageForm() {
    var messageForm = new messageFormObject();

    if ( parent.btnTextClose != null && parent.btnTextClose.length!=0 ) {
        messageForm.btnTextClose   = parent.btnTextClose;
        messageForm.btnTextConfirm = parent.btnTextConfirm;
        messageForm.btnTextCancel  = parent.btnTextCancel;
        messageForm.btnTextDetail  = parent.btnTextDetail;

    } else if ( btnTextClose != null && btnTextClose.length!=0 ) {
        messageForm.btnTextClose   = btnTextClose;
        messageForm.btnTextConfirm = btnTextConfirm;
        messageForm.btnTextCancel  = btnTextCancel;
        messageForm.btnTextDetail  = btnTextDetail;

    } else {
        messageForm.btnTextClose   = '닫기';
        messageForm.btnTextConfirm = '확인';
        messageForm.btnTextCancel  = '취소';
        messageForm.btnTextDetail  = '자세히';
    }
    return messageForm;
}

var messageForm = null;

function infoMessageWindow(msgText, itemName1, itemName2, itemName3) {
    if ( itemName1==null ) {    itemName1="";    }
    if ( itemName2==null ) {    itemName2="";    }
    if ( itemName3==null ) {    itemName3="";    }
    if ( messageForm == null ) {
        messageForm = findMessageForm();
    }
    var btnTextClose = messageForm.btnTextClose;
    modalStyle = "dialogWidth=356px; dialogHeight=175px; center=yes; border=thin; status=no; help=no";
    modalUrl   = "/sqlmapper/message/jsp/view_message_inform.html";
    strText = btnTextClose + "|" + msgText + "|" + itemName1 + "|" + itemName2 + "|" + itemName3;
    returnValue = showModalDialog(modalUrl, strText, modalStyle);
    return returnValue;
}

function questionMessageWindow(msgText, itemName1, itemName2, itemName3) {
    if ( itemName1==null ) {    itemName1="";    }
    if ( itemName2==null ) {    itemName2="";    }
    if ( itemName3==null ) {    itemName3="";    }
    if ( messageForm == null ) {
        messageForm = findMessageForm();
    }
    var btnTextConfirm = messageForm.btnTextConfirm;
    var btnTextCancel = messageForm.btnTextCancel;
    modalStyle = "dialogWidth=356px; dialogHeight=175px; center=yes; border=thin; status=no; help=no";
    modalUrl   = "/sqlmapper/message/jsp/view_message_question.html";
    strText = btnTextConfirm + "|" + btnTextCancel + "|" + msgText + "|" + itemName1 + "|" + itemName2 + "|" + itemName3;
    returnValue = showModalDialog(modalUrl, strText, modalStyle);
    return returnValue;
}

function closeMessageWindow(msgText, itemName1, itemName2, itemName3) {
    if ( itemName1==null ) {    itemName1="";    }
    if ( itemName2==null ) {    itemName2="";    }
    if ( itemName3==null ) {    itemName3="";    }
    if ( messageForm == null ) {
        messageForm = findMessageForm();
    }
    var btnTextConfirm = messageForm.btnTextConfirm;
    var btnTextCancel = messageForm.btnTextCancel;
    modalStyle = "dialogWidth=356px; dialogHeight=175px; center=yes; border=thin; status=no; help=no";
    modalUrl   = "/sqlmapper/message/jsp/close_message_question.html";
    strText = btnTextConfirm + "|" + btnTextCancel + "|" + msgText + "|" + itemName1 + "|" + itemName2 + "|" + itemName3;
    returnValue = showModalDialog(modalUrl, strText, modalStyle);
    return returnValue;
}

function errorMessageWindow(msgText, errorMsg) {
    if ( messageForm == null ) {
        messageForm = findMessageForm();
    }
    var btnTextClose = messageForm.btnTextClose;
    var btnTextDetail = messageForm.btnTextDetail;
    modalStyle = "dialogWidth=356px; dialogHeight=175px; center=yes; border=thin; status=no; help=no";
    modalUrl   = "/sqlmapper/message/jsp/view_message_error.jsp";    
    strText = btnTextClose + "|" + btnTextDetail + "|" + msgText + "|" + errorMsg;
    returnValue = showModalDialog(modalUrl, strText, modalStyle);
    return returnValue;
}

function showMovie(modalUrl){
    showModalDialog(modalUrl, "", "dialogWidth=700px; dialogHeight=600px; center=yes; border=thin; status=no; help=no")
}