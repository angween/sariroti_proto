<!DOCTYPE html>

<html lang="id" class="light-style layout-menu-fixed" dir="ltr" data-theme="theme-default"
	data-assets-path="./view/assets/">

<head>
	<meta charset="utf-8" />
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0, shrink-to-fit=no" />

	<title>
		SARI ROTI: Prototype
	</title>

	<link
		href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet" />

	<meta name="description" content="" />
	<link rel="stylesheet" type="text/css" href="js/easyui/themes/material-blue/easyui.css" />
	<link rel="stylesheet" type="text/css" href="js/easyui/themes/icon.css">

	<script src="js/jquery/jquery-3.6.0.min.js"></script>
	<script src="js/easyui/jquery.easyui.min.js"></script>

	<style>
		body {
			background: #f5f5f5;
			padding: 10px;
			font-family: "Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Ubuntu", sans-serif;
			font-size: 1.5rem;
		}

		#container {
			width: 100%;
			min-height: calc( 100vw - 300px );
		}

		.tabContent {
			padding: 0 20px 20px 20px;
		}
	</style>
</head>

<body>
	<div id="container">
		<div id="tab">
			<div title="Master">
				<?php require("master.php") ?>
			</div>

			<div title="Pivot">
				<?php require("pivot.php") ?>
			</div>

			<div title="Laporan">
				<?php require("laporan.php") ?>
			</div>
		</div>
	</div>

	<script src="js/app.js?<?= time() ?>"></script>
</body>

</html>