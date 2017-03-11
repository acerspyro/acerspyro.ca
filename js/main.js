var lang;
var latestChangeDate = "9/3/17"; // (D)D/(M)M/YY
var finalDate;

function changeLang() {
	if (lang=='en')
		document.cookie='lang=fr;expires=999999999999999999';
	else
		document.cookie='lang=en;expires=999999999999999999';
	location.reload();
}

function customScrollbars() { // Does not auto load for some reason. Gotta look into that.
	for (i = 0; i < document.getElementsByClassName("_SCROLLBAR").length; i++) {
		var container = document.getElementsByClassName("_SCROLLBAR")[i];

		if (document.getElementsByClassName("_SCROLLBAR")[i].getElementsByClassName("_customScrollbar")[0] == undefined) {
			var scrollbar = document.createElement("div");
			scrollbar.className = "_customScrollbar";
			var scrollbarhandle = document.createElement("div");
			scrollbar.appendChild(scrollbarhandle);
			container.appendChild(scrollbar);
			document.getElementsByClassName("_SCROLLBAR")[i].onscroll = customScrollbars;
		}

		var scrollbarhandle = container.getElementsByClassName("_customScrollbar")[0].getElementsByTagName("div")[0];
		container.getElementsByClassName("_customScrollbar")[0].setAttribute("style","height:"+container.offsetHeight+"px;");

		scrollbarhandle.setAttribute("style","height:"+((container.offsetHeight / container.scrollHeight)*100)+"%;top:"+((container.scrollTop / container.scrollHeight)*100)+"%;");
	}
}

function fullFinalDate() { // My non-Y2.1K-compliant code.
	if (lang == 'en') {
		var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		var daySuffix = ['st','nd','rd'];
		finalDate = months[latestChangeDate.split('/')[1]-1]+' '+latestChangeDate.split('/')[0]+((latestChangeDate.split('/')[0] < 4) ? daySuffix[latestChangeDate.split('/')[0]-1] : '')+', 20'+latestChangeDate.split('/')[2];
	} else if (lang == 'fr') {
		var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
		finalDate = latestChangeDate.split('/')[0]+((latestChangeDate.split('/')[0] == 1) ? 'er' : '')+' '+months[latestChangeDate.split('/')[1]-1]+' 20'+latestChangeDate.split('/')[2];
	}
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
	fullFinalDate();
	customScrollbars();
}

document.onload = init();
