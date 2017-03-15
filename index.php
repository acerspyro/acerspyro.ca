<?php
	$mobile = false;
	if (strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'mobile') || strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'android'))
		$mobile = true;
 ?>
<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta content="text/html; charset=UTF-8" http-equiv="Content-type"/>
	<meta name="theme-color" content="#F60" />
	<link rel="shortcut icon" type="image/png" href="res/favicon.png"/>
	<title>Acerspyro</title>
	<script src='js/main.js'></script>
	<link rel='stylesheet' type='text/css' href='css/main.css'/>
	<?php
		if ($mobile) {
			echo "<meta name=\"HandheldFriendly\" content=\"true\" />";
			echo "<meta name=\"MobileOptimized\" content=\"320\" />";
			echo "<meta name=\"viewport\" content=\"initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no\" />";
			echo "<link rel='stylesheet' type='text/css' href='css/mobile.css'/>";
		}
	 ?>
</head>
<?php
	if ($mobile)
		echo "<body mobile>";
	else
		echo "<body>";
 ?>
	<header>
		<div class='headercontainer'>
			<img id='logo' src='res/topicon.svg'/>
		</div>
		<div class='headerskirt'>
			<div id='_CODEPEN_BUTTON' class='button' onclick="window.open('http://codepen.io/acerspyro/', '_blank');"></div>
			<div id='_GITHUB_BUTTON' class='button' onclick="window.open('https://github.com/acerspyro/', '_blank');"></div>
			<div id='_CONTACT_BUTTON' class='button' onclick="openContactDialog()"></div>
			<div id='_ABOUT_BUTTON' class='button' onclick="openAboutDialog()"></div>
			<div id='_LANG_BUTTON' class='button' onclick="changeLang()"></div>
		</div>
	</header>
	<div class='messageboxcontainer'>
		<div class='messagebox'>
			<div id='_MESSAGE'>
			</div>
			<div class='messageskirt'>
				<div id='_CLOSE_BUTTON' class='button' onclick="closeDialog()"></div>
			</div>
		</div>
	</div>
	<div class='maincontainer _SCROLLBAR'>
		<main>
			<span id='_TOP_TEXT' class='hugetext'>
			</span>
			<div class='panelcontainer'>
				<div class='sectionpanel'>
					<section id='_SECTION_BACKSTORY'>
					</section>
					<section id='_SECTION_SKILLS'>
					</section>
				</div>
				<div class='sectionpanel'>
					<section id='_SECTION_INTRO'>
					</section>
					<section id='_SECTION_PROJECTS'>
					</section>
				</div>
				<iframe height='300' scrolling='no' src='http://codepen.io/acerspyro/embed/preview/ZbmzJN/?height=300&theme-id=20938&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
					See the Pen <a href='http://codepen.io/acerspyro/pen/ZbmzJN/'>Flying Windows!</a> by acerspyro (<a href='http://codepen.io/acerspyro'>@acerspyro</a>) on <a href='http://codepen.io'>CodePen</a>.
			</iframe>
			<iframe height='300' scrolling='no' src='http://codepen.io/acerspyro/embed/preview/BoONVb/?height=300&theme-id=20938&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
				See the Pen <a href='http://codepen.io/acerspyro/pen/BoONVb/'>Binary clock</a> by acerspyro (<a href='http://codepen.io/acerspyro'>@acerspyro</a>) on <a href='http://codepen.io'>CodePen</a>.
			</iframe>
			</div>
		</main>
	</div>
</body>
</html>
