<?php
	$pagetitle= "Willkommen bei terre des hommes Murgtal/Mittelbaden";
	$pageheadline ="Hier kommt eine tolle Headline hin!";

	$navigation = "standard";

	// leer.inc ist nur ein Platzhalter, der gelöscht werden muss.
	$contentleftincludes = array(
	   'benefizkonzert.inc',
	   'sponsor.inc'
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

	$widecontent = array(
	 'sponsor-list/header.inc',
	 'sponsor-list/sponsor.inc',
	 'sponsor-list/sponsor.inc',
	 'sponsor-list/sponsor.inc',
	 'sponsor-list/sponsor.inc',
	 'sponsor-list/sponsor.inc',
	 'sponsor-list/footer.inc'
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

	include 'inc/templates/template-1-2-wide.inc';
?>
