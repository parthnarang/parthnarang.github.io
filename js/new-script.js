$(document).ready(function() {

	$('#how').off().on('click', 'a.num', function() {
	  	changeDemo($(this).attr('data-target'), this);
	});

	$('#how').off().on('click', 'a.arr', function() {
	  	var curr = $('#how').find('a.active');
	  	var val = $(curr).attr('data-target');

  		if($(this).attr('data-target') == 'next') {
  			var newVal = ++val;
  			if(newVal == 3)
  				newVal = 0;
  			var newCurr = $('#how').find('a[data-target="'+newVal+'"]');
  			changeDemo(newVal, newCurr);
  		}
  		else if($(this).attr('data-target') == 'prev') {
  			var newVal = --val;
  			if(newVal == -1)
  				newVal = 2;
  			var newCurr = $('#how').find('a[data-target="'+newVal+'"]');
  			changeDemo(newVal, newCurr);
  		}
  	});

	$('#how a[data-target="next"]').on({
	  	mouseenter: function() {
	  		$('#rightArr').attr('src', '/img/right-arrow-black.png');
  		},
  		mouseleave: function() {
  			$('#rightArr').attr('src', '/img/right-arrow.png');
  		}
  	});

	var changeDemoFlag = false;
	var stopDemoFlag = false;

	$('#how a.num').on({
	  	mouseenter: function() {
	  		stopDemoFlag = true;
  		},
  		mouseleave: function() {
  			stopDemoFlag = false;
  		}
	});

	$(window).scroll(function (event) {
    	var scroll = $(window).scrollTop();
    	if(scroll >= 400 && changeDemoFlag == false) {
    		autoLoopImgs();
    		changeDemoFlag = true;
    	}
	});

	$('#how').on('click', 'a.num', function() {
	  	changeDemo($(this).attr('data-target'), this);
	});

	var cancel = false;

	function autoLoopImgs() {


	 	if(stopDemoFlag == false) {
	 		if($('#how').find('a.active').attr('data-target') != 2)
	 			$('#how').find('a.active').next().click();
	 		else
	 			$('#how').find('a[data-target="0"]').click();
	 	}
	 	setTimeout(autoLoopImgs, 5000);
	}

	function changeDemo(num, obj) {

	  	$('#how').find('a.active').removeClass('active');
  		$(obj).addClass('active');
		$('#how .content > span').css("display","none");
		$('#how' + num).css("display","block");
		
  		/*$('#how' + num).transition({ opacity: 0, x: '-20px'}, function() {
  			hideAndLoad('#how .content > span', '#how' + num);
  			$(this).transition({ x: '40px', duration: '0'});
  			$(this).transition({ opacity: 1, x: '0px' });
  		});*/
			
			
	}
	


});




