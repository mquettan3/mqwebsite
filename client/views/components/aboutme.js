function animateProgressBars() {
	if ($("[data-animate-width]").length>0) {
		$("[data-animate-width]").each(function() {
			$(this).animate({width: $(this).attr("data-animate-width")}, 800, 'linear' );
			var animatedObject = $(this);
			var Delay = animatedObject.find("span").attr("data-effect-delay");
			setTimeout(function() {
				animatedObject.find("span").show('slow');
			}, Delay);
		});
	};
}

let scrollHandler = function () {
	if (Modules.client.element_in_viewport(document.getElementById("progress_bars"))) {
		console.log("Element in viewport");
		//If so, animate the progress bars.
		animateProgressBars();

		//Stop checking if the progress bars are in view.
		$(window).off('scroll.progress_bar_event');
	}
}

Template.contact.onRendered(function () {
	$("[data-animate-width]").each(function() {
		$(this).find("span").hide();
	});

	//I can't figure out how to do this on window load AND do the pre-loader on window load.
	setTimeout(function() {
		//Call Meteor Method to check if the progress_bars id is in the viewport.
		if (Modules.client.element_in_viewport(document.getElementById("progress_bars"))) {
			//If so, animate the progress bars now!
			animateProgressBars();
		} else {
			//If not, check each time we scroll if the progress_bars are in view.
			$(window).on('scroll.progress_bar_event', scrollHandler);
		}
	}, 1000);

});
