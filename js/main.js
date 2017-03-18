var lang;

function changeLang() {
	if (lang=='en')
		document.cookie='lang=fr;expires=999999999999999999';
	else
		document.cookie='lang=en;expires=999999999999999999';
	location.reload();
}

function openPopup(which) {
	if (document.getElementById("popup").className.search(which) == -1) {
		if (document.getElementById("popup").className.search('open') == -1) {
			document.getElementById("_MESSAGE").innerHTML = window["_"+which.toUpperCase()+"_MSG"];
			document.getElementById("popup").className = `popup open ${which}`;
		} else {
			closePopup();
			setTimeout(function(){
				document.getElementById("_MESSAGE").innerHTML = window["_"+which.toUpperCase()+"_MSG"];
				document.getElementById("popup").className = `popup open ${which}`;
			}, 250);
		}
	}
}

function closePopup() {
	document.getElementById("popup").className = "popup";
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
}

document.onload = init();
