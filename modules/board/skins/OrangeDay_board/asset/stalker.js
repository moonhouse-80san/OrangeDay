// Fixed menu scroll animation
$(window).scroll(function() {
  const scrollTop = $(document).scrollTop();
  $('#alwayStalker').stop().animate({
	top: scrollTop
  }, 500); // Reduced animation time for better responsiveness
});

//페이지 하단으로 보내버려
function pageScroll(){
	window.scroll(0, document.documentElement.scrollHeight || document.body.scrollHeight); 
}
