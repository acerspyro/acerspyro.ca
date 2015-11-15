// ENGLISH LANGUAGE FILE

langres = {
	"_CODEPEN_BUTTON": "Codepen",
	"_GITHUB_BUTTON": "GitHub",
	"_CONTACT_BUTTON": "Contact",
	"_ABOUT_BUTTON": "About",
	"_LANG_BUTTON": "Français",
	"_TOP_TEXT": "<h1>Acerspyro, checking in.</h1>\
			<h4>- Said I.</h4>",
	"_SECTION_BACKSTORY": "<h3>Backstory? Backstory.</h3>\
					<p>\
						Hello there, my name is Maxim Therrien, known as Acerspyro around the Internet.\
					</p>\
					<p>\
						I am a 17 year old computer enthusiast who enjoys finding new ways to use technology to make cool new stuff. I am also a collegian on his way of getting a DCS in software development at the Édouard Montpetit CÉGEP. French is my native tongue (I'm a Québécois, after all), but as you can see, I can speak English just as well (Note: If you want to read this site in French, there's a button in the topbar).\
					</p>",
	"_SECTION_SKILLS": "<h3>Skills</h3>\
					<p>\
						To be fair, even though I have not really worked anywhere (yet, and I'd love to work somewhere, believe me), I did contribute to a few open source projects (See the section called \"A small Introduction\"), but I also have a month-long internship experience in the IT domain at an accounting firm known as Fuller Landau. They are very nice people and I really enjoyed the experience, because for once, I felt useful. This is really all I need to be productive: make me useful, and I will work relentlessly.\
					</p>",
	"_SECTION_INTRO": "<h3>A small Introduction</h3>\
					<p>\
						Oh boy! A website entirely dedicated to me! But I'm not here to brag about it.\
					</p>\
					<p>\
						I usually like to stick around on Freenode's IRC, often in #web, helping people with their webdev stuff. I love making cool, nifty stuff on Codepen when I get bored. You should check it out, it's all showcased later on this page!\
					</p>\
					<p>\
						Anyways, I have contributed to quite a few open source projects on GitHub and I am part of the Neothyne team (You may not know what that is, I do not blame you). I used to be part of the Red Eclipse team as well, I mostly contributed in scripts and art assets, but also worked as a team with other people to make things work.\
					</p>",
	"_SECTION_PROJECTS": "<h3>Projects</h3>\
					<ul>\
						<li><a href='http://filsdelaliberte.com/' target=\"_blank\">Website for Les Fils de la Liberté (French)</a></li>\
						<li><a href='http://github.com/graphitemaster/neothyne/' target=\"_blank\">Neothyne repository on GitHub</a></li>\
						<li><a href='https://github.com/red-eclipse/' target=\"_blank\">Red Eclipse project on GitHub</a></li>\
					</ul>"
};

for (var prop in langres) {
	document.getElementById(prop).innerHTML = langres[prop];
}
