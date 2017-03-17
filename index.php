<?php
	$finalDate = "16/03/17";
	$lang = 'en';
	if (!isset($_COOKIE['lang'])) {
		setcookie('lang', 'en');
		$_COOKIE['lang'] = 'en';
	} else {
		$lang = $_COOKIE['lang'];
	}
	include "lang/$lang.php";
	$mobile = false;
	if (strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'mobile') || strstr(strtolower($_SERVER['HTTP_USER_AGENT']), 'android'))
		$mobile = true;
 ?>
<!DOCTYPE HTML>
<html lang="<?php echo $lang; ?>">
<head>
	<meta content="text/html; charset=UTF-8" http-equiv="Content-type"/>
	<meta name="theme-color" content="#F60" />
	<link rel="shortcut icon" type="image/png" href="res/favicon.png"/>
	<title>Acerspyro</title>
	<script>
		<?php
			$ABOUT = str_replace("\n","",addslashes($_ABOUT_MSG));
			$CONTACT = str_replace("\n","",addslashes($_CONTACT_MSG));
			echo "var _ABOUT_MSG = \"$ABOUT\";";
			echo "var _CONTACT_MSG = \"$CONTACT\";";
		?>
	</script>
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
		<img id='logo' src='res/topicon.svg'/>
		<div class='buttonContainer'>
			<div class='button' onclick="window.open('http://codepen.io/acerspyro/', '_blank');"><?php echo $_CODEPEN_BUTTON; ?></div>
			<div class='button' onclick="window.open('https://github.com/acerspyro/', '_blank');"><?php echo $_GITHUB_BUTTON; ?></div>
			<div class='button' onclick="openPopup('contact')"><?php echo $_CONTACT_BUTTON; ?></div>
			<div class='button' onclick="openPopup('about')"><?php echo $_ABOUT_BUTTON; ?></div>
			<div class='button' onclick="changeLang()"><?php echo $_LANG_BUTTON; ?></div>
		</div>
	</header>
	<div id='popupContainer'>
		<div id='popup'>
			<div id='_MESSAGE'>
			</div>
			<div class='buttonContainer'>
				<div class='button' onclick="closePopup()"><?php echo $_CLOSE_BUTTON; ?></div>
			</div>
		</div>
	</div>
	<div id='mainContainer'>
		<main>
			<div id='title'>
				<?php echo $_TOP_TEXT; ?>
			</div>
			<div id='content'>
				<div class='panel'>
					<section>
						<?php echo $_SECTION_BACKSTORY; ?>
					</section>
					<section>
						<?php echo $_SECTION_SKILLS; ?>
					</section>
				</div>
				<div class='panel'>
					<section>
						<?php echo $_SECTION_INTRO; ?>
					</section>
					<section>
						<?php echo $_SECTION_PROJECTS; ?>
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
