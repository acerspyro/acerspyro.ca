/* TODO:
 *	- Add a way to change language without cookies
 *  - BUG: Cookies not working in Chrome
 *
 */
var lang;

function changeLang() {
	if (lang=='en')
		document.cookie='lang=fr;expires=999999999999999999';
	else
		document.cookie='lang=en;expires=999999999999999999';
	location.reload();
}

function openContactDialog() {
	if (document.getElementsByClassName("messagebox")[0].className.search('contact') == -1) {
		if (document.getElementsByClassName("messagebox")[0].className.search('open') == -1) {
			document.getElementById("_MESSAGE").innerHTML = _CONTACT_MSG;
			document.getElementsByClassName("messagebox")[0].className = "messagebox open contact";
		} else {
			document.getElementsByClassName("messagebox")[0].className = "messagebox";
			setTimeout(function(){
				document.getElementById("_MESSAGE").innerHTML = _CONTACT_MSG;
				document.getElementsByClassName("messagebox")[0].className = "messagebox open contact";
			}, 250);
		}
	}
}

function openAboutDialog() {
	if (document.getElementsByClassName("messagebox")[0].className.search('about') == -1) {
		if (document.getElementsByClassName("messagebox")[0].className.search('open') == -1) {
			document.getElementById("_MESSAGE").innerHTML = _ABOUT_MSG;
			document.getElementsByClassName("messagebox")[0].className = "messagebox open about";
		} else {
			document.getElementsByClassName("messagebox")[0].className = "messagebox";
			setTimeout(function(){
				document.getElementById("_MESSAGE").innerHTML = _ABOUT_MSG;
				document.getElementsByClassName("messagebox")[0].className = "messagebox open about";
			}, 250);
		}
	}
}

function closeDialog() {
	document.getElementsByClassName("messagebox")[0].className = "messagebox";
}

function init() {
	var c=document.cookie.split(';');
	for (i=0;i<c.length;i++) {
		if (c[i].split('=')[0] == 'lang') {
			lang=c[i].split('=')[1];
			break;
		}
	}
	if (lang == undefined) {
		document.cookie='lang=en;expires=999999999999999999';
		lang='en';
	}
	var fileref = document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	if (lang == 'en')
		fileref.setAttribute("src", "js/lang/en.js");
	else
		fileref.setAttribute("src", "js/lang/fr.js");
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

document.onload = init();
