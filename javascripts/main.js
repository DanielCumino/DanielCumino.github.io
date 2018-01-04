$(document).ready(function(evt){
	// $("h1.title").arctext({radius: 2});
	// $(".profile h1.title").arctext({radius: 100, dir: -1});
	// $(".profile h1.subtitle").arctext({radius: 100, dir: -1});

	// $("body").stop(true).animate({
	// 	scrollTop: $("#skills").offset().top-50
	// }, 500, function(){});


	$(window).on('scroll.progress-bar', function(){
		if ( ($(this).scrollTop() + $(this).height()) >= ($('.progress-bar').parent().parent().position().top+$('.progress-bar').parent().parent().offset().top+$('.progress-bar').parent().parent().outerHeight(true)) ) {
			$(".progress-bar").each(function(){
				var newWidth = $(this).data('percentage');
				$(this).stop(true).animate({width: newWidth+'%'});
			});
			$(window).off("scroll.progress-bar");
		}
	});

	$(".profile .flip").flip({
		trigger: 'manual',
		axis: 'y',
		speed: '800',
		reverse: true
	});

	var isFlipped = true;

	var intervalID = setInterval(function(){
		if(isFlipped){
			isFlipped = false;
			$('.flip').flip(false);
		}
		else{
			isFlipped = true;
			$('.flip').flip(true);
		}
	}, 5000);

	// clearInterval(intervalID);
	// $(".container .text ul li").find(".exp_text").slideDown();
	$(".container .text ul li").click(function(){
		var element = $(this).find(".exp_text");
		var details = $(this).find(".details");

		if(element.css("display") == 'none'){
			element.slideDown(100);
			details.html("details -");
			$("body").stop(true).animate({
				scrollTop: $(this).offset().top-50
			}, 1000);
		}
		else{
			element.slideUp(100);
			details.html("details +");
		}
	});

	var dt = new Date();
	// var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var greeting = '';
	if((dt.getHours() >= 0 && dt.getHours() < 5)||(dt.getHours() >= 18 && dt.getHours() < 24)){
		greeting = 'Good evening!';
	}
	else if(dt.getHours() >= 5 && dt.getHours() < 12){
		greeting = 'Good morning!';
	}
	else if(dt.getHours() >= 12 && dt.getHours() < 18){
		greeting = 'Good afternoon!';
	}

	$(function(){
		$("h1.greeting").slideDown(function(){
			$(this).typed({
			strings: ['Hi!','Hello!<br>'+greeting],
			typeSpeed: 50,
			backSpeed: 50,
			showCursor: false,
			startDelay: 100,
			callback: function() {
				$("h3.bubble-speech.bubble-left.ballon").slideDown();
				$("h3.bubble-speech.bubble-left.ballon").typed({
					strings: ["My name is <span>Pedro Luiz Magalhães Cumino</span> and this is my <span>Résumé</span>.<br>Checkout! 😊"],
					typeSpeed: 25,
					showCursor: false,
					startDelay: 500
				});
			}
		});
		});
	});
});