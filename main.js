var lang;
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
		fileref.setAttribute("src", "lang/en.js");
	else
		fileref.setAttribute("src", "lang/fr.js");
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

document.addEventListener("DOMContentLoaded", init);
