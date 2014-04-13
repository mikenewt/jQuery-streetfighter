$(document).ready(function() {
	$('.ryu').mouseenter(function () {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-120px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
});
$(document).keydown(function(event) {
	if (event.which == 88) {
		$('.ryu-still').hide();
		$('.ryu-cool').show();
	}
}).keyup(function(event) {
	if (event.keyCode == 88) {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});

function doIntro() {
	$(document).ready(function() {
		$('.sf-logo').fadeIn(3500, function() {
			$(this).fadeOut(1000, function() {
				$('.text').fadeIn(1500);
			})
		});
	})
}

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}