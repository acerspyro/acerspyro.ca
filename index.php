<?php
	$finalDate = "16/03/17";
	$lang = 'en';
	$userAgent = strtolower(isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '');
	if (!isset($_COOKIE['lang'])) {
		setcookie('lang', 'en');
		$_COOKIE['lang'] = 'en';
	} else {
		$lang = $_COOKIE['lang'];
	}
	include "lang/$lang.php";
	$mobile = false;
	if (strstr($userAgent, 'mobile') || strstr($userAgent, 'android'))
		$mobile = true;
 ?>
<!DOCTYPE HTML>
<html lang="<?=$lang;?>">
<head>
	<meta content="text/html; charset=UTF-8" http-equiv="Content-type"/>
	<meta name="theme-color" content="#F60" />
	<link rel="shortcut icon" type="image/png" href="res/favicon.png"/>
	<title>Acerspyro</title>
	<script>
		<?="var _ABOUT_MSG = \"" . str_replace("\n","",addslashes($_ABOUT_MSG)) . "\";";?>
		<?="var _CONTACT_MSG = \"" . str_replace("\n","",addslashes($_CONTACT_MSG)) ."\";";?>
	</script>
	<script src='js/main.js'></script>
	<link rel='stylesheet' type='text/css' href='css/main.css'/>
	<?php if ($mobile): ?>
		<meta name="HandheldFriendly" content="true" />
		<meta name="MobileOptimized" content="320" />
		<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no" />
		<link rel='stylesheet' type='text/css' href='css/mobile.css'/>
	<?php endif ?>
</head>
<?=$mobile?"<body mobile>":"<body>";?>
	<header>
		<img id='logo' src='res/topicon.svg'/>
		<div class='buttonContainer'>
			<div class='button' onclick="window.open('http://codepen.io/acerspyro/', '_blank');"><?=$_CODEPEN_BUTTON;?></div>
			<div class='button' onclick="window.open('https://github.com/acerspyro/', '_blank');"><?=$_GITHUB_BUTTON;?></div>
			<div class='button' onclick="openPopup('contact')"><?=$_CONTACT_BUTTON;?></div>
			<div class='button' onclick="openPopup('about')"><?=$_ABOUT_BUTTON;?></div>
			<div class='button' onclick="changeLang()"><?=$_LANG_BUTTON;?></div>
		</div>
	</header>
	<div id='popupContainer'>
		<div id='popup'>
			<div>
				<span id='_MESSAGE'></span>
				<span>
					<?=$_CLOSE_POPUP;?>
				</span>
			</div>
		</div>
	</div>
	<div id='mainContainer'>
		<main>
			<div id='title'>
				<?=$_TOP_TEXT;?>
			</div>
			<div id='content'>
				<div class='panel'>
					<section>
						<?=$_SECTION_BACKSTORY;?>
					</section>
					<section>
						<?=$_SECTION_SKILLS;?>
					</section>
				</div>
				<div class='panel'>
					<section>
						<?=$_SECTION_INTRO;?>
					</section>
					<section>
						<?=$_SECTION_PROJECTS;?>
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
