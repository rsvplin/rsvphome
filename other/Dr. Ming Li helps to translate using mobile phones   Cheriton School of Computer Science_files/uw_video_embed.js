/*jslint browser: true, sloppy: true, vars: true */
/*global jQuery */

(function ($) {
	$(document).ready(function () {
		// MSIE 8 and older do not support embedding YouTube HTML with object; use iframe instead.
		if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
			$('div.uw_video-embed > object').each(function () {
				var iframe = document.createElement('iframe');
				iframe.width = this.width;
				iframe.height = this.height;
				iframe.src = this.data;
				iframe.frameborder = 0;
				iframe.allowfullscreen = true;

				$(this).replaceWith(iframe);
			});
		}
	});
}(jQuery));
