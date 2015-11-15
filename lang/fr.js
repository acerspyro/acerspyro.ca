// ENGLISH LANGUAGE FILE

langres = {
	"_CODEPEN_BUTTON": "Codepen",
	"_GITHUB_BUTTON": "GitHub",
	"_CONTACT_BUTTON": "Contacter",
	"_ABOUT_BUTTON": "À propos",
	"_LANG_BUTTON": "English",
	"_TOP_TEXT": "<h1>Acerspyro, en service!</h1>\
			<h4>- Moi, à un moment donné.</h4>",
	"_SECTION_BACKSTORY": "<h3>Voici une histoire</h3>\
					<p>\
						Bienvenue, je m'appelle Maxim Therrien, connu en tant que « Acerspyro » sur l'Internet.\
					</p>\
					<p>\
						Je suis un fanatique d'informatique de 17 ans qui adore trouver de nouvelles façons d'utiliser les technologies disponibles pour faire des trucs géniaux. Je suis aussi un collégien au Cégep Édouard Montpetit. Le français est ma langue natale (Je suis québécois, après tout), mais je parle aussi très bien l'anglais (Note: Pour voir le site en anglais, cliquez sur le bouton dans l'entête).\
					</p>",
	"_SECTION_SKILLS": "<h3>Abiletées</h3>\
					<p>\
						Pour être honnête, même si je n'ai pas vraiment travaillé auparavant, j'ai contribué à de nombreux projets open source (Allez vour la section appelée « Une petite introduction »), mais j'ai aussi été un stagiaire au sein d'une firme de comptabilité nommée Fuller Landau. Ils sont tous très gentils et j'ai bien apprécié l'expérience car, pour une fois, je me sentais utile. C'est vraiment tout ce dont j'ai de besoin pour être productif: rendez-moi utile, et mon travail devient mon passe-temps.\
					</p>",
	"_SECTION_INTRO": "<h3>Une petite introduction</h3>\
					<p>\
						Oh boy! Un site entièrement dédié à moi! Mais je ne suis pas ici pour m'en vanter.\
					</p>\
					<p>\
						D'habitude j'aime me tenir sur les serveurs IRC de Freenode, surtout dans le canal #web, où j'aide les gens à faire du développement web. J'adore créer des choses géniales et ingénieuses sur Codepen quand je m'ennuie. Vous devriez aller voir mes « Pens », ils sont plus bas dans cette page!\
					</p>\
					<p>\
						J'ai contribué à une multitude de projets open source sur GitHub et je fais présentement partie de l'équipe de Neothyne (Je vous blâme pas si vous ne savez pas c'est quoi). Dans le passé, j'ai aussi fait partie de l'équipe de Red Eclipse, au coeur de laquelle j'ai surtout contribué en scripts et arts, mais aussi travaillé en équipe afin de faire sûr que tout fonctionne.\
					</p>",
	"_SECTION_PROJECTS": "<h3>Projets</h3>\
					<ul>\
						<li><a href='http://filsdelaliberte.com/' target=\"_blank\">Site web des Fils de la Liberté (French)</a></li>\
						<li><a href='http://github.com/graphitemaster/neothyne/' target=\"_blank\">Répertoire de Neothyne sur GitHub</a></li>\
						<li><a href='https://github.com/red-eclipse/' target=\"_blank\">Projet Red Eclipse sur GitHub</a></li>\
					</ul>"
};

for (var prop in langres) {
	document.getElementById(prop).innerHTML = langres[prop];
}
