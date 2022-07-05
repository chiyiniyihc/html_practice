$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */
	
	$('.brand a,footer a.up, footer a.scrolltop').click(function(e){
										  
		// If a link has been clicked, scroll the page to the link's hash target:
		
		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});
});