
$(document).ready(init);

function init() {
	// dynamically add a div to hold the slideshow's pager
	$(".showimages").after('<br><div id="pager"></div>'); 
	
	  // now to use the cycle plugin
	$(".showimages").cycle({
		fx: 'fade',
		//delay: -4000,
		speed:   400, 
	    timeout: 3000, 
		next:   '.showimages', 
		pause: 1,
		pager: "#pager",
		
		
	});
	
}
