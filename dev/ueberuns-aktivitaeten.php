<?php
  $pagetitle= "Über uns - Unsere Aktivitäten";

  $navigation = "aktivitaeten";

	$pageheadline ="Unsere Aktivitäten";

	$contentleftincludes = array(
    'activities/contentleft_header.inc','activities/contentleft_1.inc','activities/contentleft_2.inc','activities/contentleft_3.inc','activities/contentleft_footer.inc'
	);

	$contentrightincludes = array(
    'activities/contentright.inc'
	);

	$sideincludes = array(
		'leer.inc'
	);

	include 'inc/templates/template-2-1.inc';
?>
