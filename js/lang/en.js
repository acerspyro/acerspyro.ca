// ENGLISH LANGUAGE FILE

var _ABOUT_MSG = "\
<p>\
	This site was made by hand with love and passion using HTML5, SCSS and JS6.\
</p>\
<p>\
	Last revision made on "+finalDate+".<br/>Design by Maxim \"Acerspyro\" Therrien (if it wasn't obvious).\
</p>\
<p>\
	<a href='https://github.com/acerspyro/acerspyro.ca/'>https://github.com/acerspyro/acerspyro.ca/</a>\
</p>";

var	_CONTACT_MSG = "\
<p>\
	If you wish to contact me, please do so via e-mail first at:\
</p>\
<p>\
	acerspyro (at) gmail (dot) com\
</p>";

langres = {
	"_CODEPEN_BUTTON": "Codepen",
	"_GITHUB_BUTTON": "GitHub",
	"_CONTACT_BUTTON": "Contact",
	"_ABOUT_BUTTON": "About",
	"_LANG_BUTTON": "Français",
	"_CLOSE_BUTTON": "Close",
	"_TOP_TEXT": "<h1>Maxim \"Acerspyro\" Therrien</h1>\
			<h4>Web developer and student at EFPC --TEXT IN PROGRESS--</h4>",
	"_SECTION_BACKSTORY": "<h3>Who I am</h3>\
					<p>\
						My name is <em>Maxim Therrien</em>, known as <em>Acerspyro</em> on the Internet.\
					</p>\
					<p>\
						I am an 18 year old computer enthusiast who enjoys finding ways to use technology to make cool stuff.\
						I study at EFPC (<i>École de Formation Professionelle de Châteauguay</i>) in tech support.\
						My native tongue is French and I reside in the south shore of Montreal.\
					</p>\
					<p>\
						Do you run a small business and need a nice website? I am actively looking for web projects to work on, and I'd be more than happy to put together whatever it is you have in mind!\
					</p>",
	"_SECTION_SKILLS": "<h3>Skills</h3>\
					<p>\
						I am very fluent in both French and English.<br/>\
						I can easily work with Microsoft's Office suite as well as Google Docs and LibreOffice.<br/>\
						I can count up to 10 and more, and I use Linux as my day to day operating system, meaning I will have no problem dealing with a Linux installation.<br/>\
						I do all of my graphics work with Inkscape and GIMP (because they're free and awesome!)\
						</p>",
	"_SECTION_INTRO": "<h3>What I do</h3>\
					<p>\
						This website has a lot of \"I\"'s, doesn't it? Anyways.\
					</p>\
					<p>\
						I like to stick around on Freenode's IRC, often in #web where I help people with everything webdev-related.\
					</p>\
					<p>\
						Vector art assets are my thing, even my raster graphics often start out as vector art in Inkscape.\
					</p>",
	"_SECTION_PROJECTS": "<h3>Projects and Contributions</h3>\
						<p><a href='http://filsdelaliberte.com/' target=\"_blank\">Website for <i>Les Fils de la Liberté</i> (French)</a></p>\
						<p><a href='https://github.com/graphitemaster/neothyne/' target=\"_blank\">Neothyne's repository on GitHub</a></p>\
						<p><a href='https://github.com/red-eclipse/' target=\"_blank\">Red Eclipse's project GitHub</a></p>"
};

for (var prop in langres) {
	document.getElementById(prop).innerHTML = langres[prop];
}
