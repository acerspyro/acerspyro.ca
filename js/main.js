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

function customScrollbars() {

	/*var lastdrag_y = 0;

	this.handleDragStart = function(event) {
		event.dataTransfer.setData('text/plain',null);
		lastdrag_y = event.screenY;
		console.log('hello');
	}

	this.handleDrag = function(event) {
		var what = event.target.parentElement.parentElement;
		what.scrollTop = what.scrollTop + (event.screenY - lastdrag_y) * (what.scrollHeight / what.offsetHeight);
		customScrollbars();
		lastdrag_y = event.screenY;
	}*/

	for (i = 0; i < document.getElementsByClassName("_SCROLLBAR").length; i++) {
		var container = document.getElementsByClassName("_SCROLLBAR")[i];

		if (document.getElementsByClassName("_SCROLLBAR")[i].getElementsByClassName("_customScrollbar")[0] == undefined) {
			var scrollbar = document.createElement("div");
			scrollbar.className = "_customScrollbar";
			var scrollbarhandle = document.createElement("div");
			scrollbar.appendChild(scrollbarhandle);
			container.appendChild(scrollbar);
			container.addEventListener('scroll', customScrollbars);
			scrollbarhandle = container.getElementsByClassName("_customScrollbar")[0].getElementsByTagName("div")[0];
			/*scrollbarhandle.setAttribute("draggable", "true");


			scrollbarhandle.addEventListener("drag", handleDrag, false);
			scrollbarhandle.addEventListener("dragstart", handleDragStart, false);*/
		}

		var scrollbarhandle = container.getElementsByClassName("_customScrollbar")[0].getElementsByTagName("div")[0];
		container.getElementsByClassName("_customScrollbar")[0].setAttribute("style","height:"+container.offsetHeight+"px;");

		scrollbarhandle.setAttribute("style","height:"+((container.offsetHeight / container.scrollHeight)*100)+"%;top:"+((container.scrollTop / container.scrollHeight)*100)+"%;");
	}
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
	finalDate = translateDate(latestChangeDate);

}

function postload() {
	if (!document.getElementsByTagName("body")[0].hasAttribute("mobile")) {
		customScrollbars();
		window.addEventListener('resize', customScrollbars);
	}
}

document.onload = init();
window.addEventListener('load', postload);
