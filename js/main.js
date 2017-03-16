var lang;
var latestChangeDate = "15/03/17"; // DD/MM/YY
var finalDate;

function changeLang() {
	if (lang=='en')
		document.cookie='lang=fr;expires=999999999999999999';
	else
		document.cookie='lang=en;expires=999999999999999999';
	location.reload();
}

function translateDate(dateString) { // My non-Y2.1K-compliant code. DD/MM/YY
	var value;
	if (lang == 'en') {
		var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		var daySuffix = ['st','nd','rd'];
		value = months[dateString.split('/')[1]-1]+' '+dateString.split('/')[0]+((dateString.split('/')[0] < 4) ? daySuffix[dateString.split('/')[0]-1] : '')+', 20'+dateString.split('/')[2];
	} else if (lang == 'fr') {
		var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
		value = dateString.split('/')[0]+((dateString.split('/')[0] == 1) ? 'er' : '')+' '+months[dateString.split('/')[1]-1]+' 20'+dateString.split('/')[2];
	}
	return value;
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

	var fileref = document.createElement('script');
	fileref.setAttribute("type","text/javascript");

	if (lang == 'en')
		fileref.setAttribute("src", "js/lang/en.js");
	else
		fileref.setAttribute("src", "js/lang/fr.js");

	document.getElementsByTagName("head")[0].appendChild(fileref);
	finalDate = translateDate(latestChangeDate);

}

document.onload = init();
