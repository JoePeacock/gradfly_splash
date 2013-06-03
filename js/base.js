
var reqInvite = $('.invite-div .request-form input');

function pushSub(email) {
	// AJAX HERE

	var success = true;
	var message = "User has already been added!";
	displayOut(success, message);
}

function displayOut(success, message) {
	if (success) {
		reqInvite.remove();
		$('.out-message h2').show();
		$('.invite-message p').text('Thanks, you have been added to the list!');
	} else {
		$('.invite-message p').text('Error! ' + message);
	}
}

$(document).ready(function() {
	
	reqInvite.focus(function(){
		reqInvite.attr('value', '');
		reqInvite.bind('keypress', function(e){
			var code = (e.keyCode ? e.keyCode : e.which);
			$(this).keyup(function(){
				if (code == 13 && $(this).val()) { 
					pushSub($(this).val());
				}	
			});
		});
	});

	reqInvite.blur(function(){
		reqInvite.attr('value', 'Request Invitation');
	});
});