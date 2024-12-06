 // 왼쪽메뉴 제이쿼리와 연동 스크롤(wrapper)
	jQuery(function($){
		$(window).scroll(function() {
			_top = $(document).scrollTop();
			setTimeout(function() {
				$('#alwayStalker').stop().animate({ top: _top }, 1500, 'easeOutBack');
			}, 10);
		});
	});
	
	//페이지 하단으로 보내버려
	function pageScroll(){
		window.scroll(0, document.documentElement.scrollHeight || document.body.scrollHeight); 
	}
