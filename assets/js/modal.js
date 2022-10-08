$(document).on('click','.modal-button', function(){
	var currentModal =  $(this).attr('href');
	$('#modal').hide();
	$('.modal-content').hide();
	
	$('#modal').fadeIn();
	$(currentModal).fadeIn();
  return false;
});

$("body").on( "click",".close", function() {
  	$('#modal').fadeOut();
	$('.modal-content').hide();
});

window.onclick = function(event) {
	var modal = document.getElementById("modal");
	if (event.target == modal) {
		$("#modal").fadeOut();
	}
}