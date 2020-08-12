(function ($) {
	$.fn.highlightMenu = function (options) {
		var defaults = $.extend(
			{
				color: '#FF6347',
				hoverColor: '#000000',
				linkWidth: '125px',
			},
			options
		);
		return this.each(function () {
			var items = $('a');
			var o = defaults;
			items
				.css('margin-top:2px',
					'margin-bottom:10px',
					'font-family: Cambria, Cochin, Georgia, Times',
					'padding: 30px',
					'color: rgb(98, 161, 206)',
					'margin-left:0',
					'margin-right:0',
					'text-decoration:none',
					'width:20%')
				.css('color', o.color)
				.css('width', o.linkWidth)
			items.mouseover(function () {
				$(this)
					.css('color', o.hoverColor)
					.css('text-shadow:0.2em 0.1em #01081f')
					.css('font-style: italic')
			});
			items.mouseout(function () {
				$(this).css('color', o.color);
			});
		});
	};
})(jQuery);