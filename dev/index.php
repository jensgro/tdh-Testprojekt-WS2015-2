<?php
	$pagetitle= "Willkommen bei terre des hommes Murgtal/Mittelbaden";
	$pageheadline ="Hier kommt eine tolle Headline hin!";

	$navigation = "standard";

	// leer.inc ist nur ein Platzhalter, der gelöscht werden muss.
	$contentleftincludes = array(
	   'leer.inc',
	   'sponsor-list/header.inc',
    'sponsor-list/sponsor.inc',
    'sponsor-list/sponsor.inc',
    'sponsor-list/sponsor.inc',
    'sponsor-list/sponsor.inc',
    'sponsor-list/sponsor.inc',
    'sponsor-list/footer.inc'
	);

	$contentrightincludes = array(
	   'leer.inc',
	   'leer.inc'
	);

  $sideincludes = array(
	   'donations-buttons.inc',
	   'contact-person.inc',
	   'contact-person2.inc'
	);

	// Auf manchen Seiten wird dieses Array benötigt.
	// $topcontent = array(
	// 	'leer.inc'
	// );

	// Auf manchen Seiten wird dieses Array benötigt.
	// $artikelincludes = array(
	// 			'leer.inc'
	// );

	// Auf manchen Seiten wird dieses Array benötigt.
	// $widecontent = array(
	// 			'leer.inc'
	// );

	include 'inc/templates/template-2-1.inc';
?>
