var myAccountActive = false;

function sendPing() {
	new Ajax.Request('/ping.dox', { method:'get' });
	window.setTimeout("sendPing()", 301000);
}
function initPing() {
	window.setTimeout("sendPing()", 301000);
}

function setMyAccountActive() { myAccountActive = true; }
function setMyAccountInactive() { myAccountActive = false; }
function toggleMyAccount() {
	if (document.getElementById('divAccount').style.display == 'block') {
		document.getElementById('divAccount').style.display = 'none';
	} else {
		document.getElementById('divAccount').style.display = 'block';
	}
}
function hideMyAccount() {
	if (!myAccountActive) {
		document.getElementById('divAccount').style.display = 'none';
	}
}

function popupWriteIM(user_id_to, sid) {
	var width = 350;
	var height = 370;
	var left = (screen.width - width) / 2;
	var top = (screen.height - height) / 2;
	if (sid != '') { var sid_str = '&amp;'+sid; } else { var sid_str = ''; }
	imPopup = window.open('/beta/popups/write_im.html?user_id_to='+user_id_to+sid_str, "popupWriteIM", "width="+width+",height="+height+",left="+left+",top="+top+",menubar=no,location=no,resizable=yes,scrollbars=yes,toolbar=no,dependent=yes");
	imPopup.focus();
}

function popupEditSidebarModule(module, module_id) {
	var width = 350;
	var height = 450;
	var left = (screen.width - width) / 2;
	var top = (screen.height - height) / 2;
	editPopup = window.open('popups/edit_'+module+'.html?module_id='+module_id, "popupWriteIM", "width="+width+",height="+height+",left="+left+",top="+top+",menubar=no,location=no,resizable=yes,scrollbars=yes,toolbar=no,dependent=yes");
	editPopup.focus();
}

function popupHelpVideo(url, width, height) {
	var left = (screen.width - width) / 2;
	var top = (screen.height - height) / 2;
	editPopup = window.open(url, "popupHelpVideo", "innerWidth="+width+",innerHeight="+height+",left="+left+",top="+top+",menubar=no,location=no,resizable=yes,scrollbars=no,toolbar=no,dependent=no");
	editPopup.focus();
}

function popupWindow(url, width, height, name, resize) {
	var left = (screen.width - width) / 2;
	var top = (screen.height - height) / 2;
	if (name == '') { name = 'popupWindow'; }
	if (resize == '') { resize = 'yes'; }
	editPopup = window.open(url, name, "width="+width+",height="+height+",left="+left+",top="+top+",menubar=no,location=no,resizable="+resize+",scrollbars=no,toolbar=no,dependent=no");
	editPopup.focus();
}

function textCounter(field, countfield, maxlimit) {
    if (field.value.length > maxlimit)
      field.value =field.value.substring(0, maxlimit);
    else
      countfield.value = maxlimit - field.value.length;
}

function htmlspecialchars(str,typ) {
    if(typeof str=="undefined") str="";
    if(typeof typ!="number") typ=2;
    typ=Math.max(0,Math.min(3,parseInt(typ)));
    var from=new Array(/&/g,/</g,/>/g);
    var to=new Array("&amp;","&lt;","&gt;");
    if(typ==1 || typ==3) {from.push(/'/g); to.push("&#039;");}
    if(typ==2 || typ==3) {from.push(/"/g); to.push("&quot;");}
    for(var i in from) str=str.replace(from[i],to[i]);
    return str;
}

function showBox(url, boxWidth, boxHeight) {
    $.fn.colorbox({ innerWidth: boxWidth+'px', innerHeight: boxHeight+'px', iframe: true, href: url, opacity: 0.5 });
}

function showPrivChatRequest(uid, title) {
	showBox('/popups/privchat_request.html?user_id='+uid, 360, 125);
}

function openPrivChat(uid, sendRequest) {
	if (sendRequest) {
		var url = '/popups/privchat.html?user_id='+uid+'&request=1';
	} else {
		var url = '/popups/privchat.html?user_id='+uid;
	}
	popupWindow(url, 420, 500, 'privchat_'+uid, 'no');
}