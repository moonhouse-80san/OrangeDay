// Fixed menu scroll animation
$(window).scroll(function() {
  const scrollTop = $(document).scrollTop();
  $('#alwayStalker').stop().animate({
	top: scrollTop
  }, 500); // Reduced animation time for better responsiveness
});

// Scroll to bottom function 
function scrollToBottom() {
  window.scrollTo({
	top: document.documentElement.scrollHeight || document.body.scrollHeight,
	behavior: 'smooth'
  });
}

//페이지 하단으로 보내버려
function pageScroll(){
	window.scroll(0, document.documentElement.scrollHeight || document.body.scrollHeight); 
}
