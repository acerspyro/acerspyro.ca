var lang;

function changeLang() {
	if (lang=='en')
		document.cookie='lang=fr;expires=999999999999999999';
	else
		document.cookie='lang=en;expires=999999999999999999';
	location.reload();
}

function openPopup(which) {
	document.getElementById("popupContainer").addEventListener("click", function(e) {
		e.stopPropagation();
		closePopup();
	});
	if (document.getElementById("popup").className.search('anim_in') == -1) {
		document.getElementById("_MESSAGE").innerHTML = window["_"+which.toUpperCase()+"_MSG"];
		var popup = document.getElementById("popup");
	  var popupContainer = document.getElementById("popupContainer");
	  popup.classList.remove("anim_out");
	  void popup.offsetWidth;
	  popup.classList.add("anim_in");
	  popupContainer.style.display = "flex";
	} else {
		closePopup();
		setTimeout(function() {
			document.getElementById("_MESSAGE").innerHTML = window["_"+which.toUpperCase()+"_MSG"];
			var popup = document.getElementById("popup")
		  var popupContainer = document.getElementById("popupContainer");
		  popup.classList.remove("anim_out");
		  void popup.offsetWidth;
		  popup.classList.add("anim_in");
		  popupContainer.style.display = "flex";
		}, getComputedStyle(document.getElementById("popup")).animationDuration.replace(/[^\d.-]/g, '')*1000);
	}
}

function closePopup() {
	var popup = document.getElementById("popup");
  var popupContainer = document.getElementById("popupContainer");
  popup.classList.remove("anim_in");
  void popup.offsetWidth;
  popup.classList.add("anim_out");
  setTimeout(function() {
    popupContainer.style.display = "none";
  }, getComputedStyle(popup).animationDuration.replace(/[^\d.-]/g, '')*1000);
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
window.addEventListener('scroll', (e)=>{
	var header = document.getElementsByTagName("header")[0];
	var triggervalue = 96;

	if (document.body.scrollTop <= triggervalue && header.classList.contains("short"))
		header.classList.remove("short");
	else if (document.body.scrollTop > triggervalue && !header.classList.contains("short"))
		header.classList.add("short");
})
