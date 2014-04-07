(function ($) {
	$(function() {

		$searchLabel = $('#uw-search-label').addClass('js');
		$searchInput = $('#uw-search-term');

		position = $searchInput.position();
		$searchLabel.css('left', position.left + 4);

		$searchLabel.click(function() {
			$searchInput.focus();
		});

		$searchInput.focus(function() {
			$searchLabel.addClass('element-invisible');
		})

		$searchInput.blur(function() {
			if (!$searchInput.val()) {
				$searchLabel.removeClass('element-invisible');
			}
		});

	});
})(jQuery);
