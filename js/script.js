// $Id$
jQuery(document).ready(function(){
	megadrupal();
});

jQuery(window).resize(function() {
	megadrupal();
});
	
function megadrupal() {
	var $wh = jQuery(window).height();
	var $ww = jQuery(window).width();
	var $wrap = jQuery('#wrap');
	var $screenshot = jQuery('#screenshot');
	var $info = jQuery('#info');
	
	if ($ww > 1440) {
		$wrap.addClass('w1440');
		$ww = 1440;
	} else {
		$wrap.removeClass('w1440');
	}
	if ($wh > 939) {
		$space = ($wh - 939)/2;
		$wh = 939;
		$wrap.addClass('h939');
		$wrap.css({
			'margin-top': $space
		});
	} else {
		$wrap.removeClass('h939');
		$wrap.removeAttr('style')
	}
	
	$screenshot.height($wh);
	$screenshot.width($ww);
	$info.height($wh);
	$info.width($ww - 343);
	if ($ww > 1300) {$info.width($ww - 500)}
	if ($ww < 1100) {$info.width($ww - 200)}
	if ($ww < 953) {$info.width($ww - 60)}
}