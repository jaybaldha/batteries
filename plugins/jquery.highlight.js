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
					'margin-left:0',
					'margin-right:0',
					'text-decoration:none',
					'width:20%',
					)
				.css('color', o.color)
				.css('width', o.linkWidth)
			items.mouseover(function () {
				$(this)
					.css('color', o.hoverColor)
			});
			items.mouseout(function () {
				$(this).css('color', o.color)
			});
		});
	};
})(jQuery);