/* 	Not even close to complete. I know that I have consumed and understood the material
	and I am aware that this does anything but reflect that. Also I ruined everything that
	I did have immediately before it was time to turn it in. Sorry. */


	// $('body').append('<button id="generate">Generate</button>');
	// $('#generate').on('click', function() {
	// 	$('.counter').remove();
	// 	counter++;
	// 	$('body').append('<div class="buttonsDiv"></div>');
	// 	$(this).('.buttonsDiv').append('<button class="delete">Delete</button>');
	// 	$(this).('.buttonsDiv').append('<button class="change">Change</button>');
	// 	$('body').children().last().append('<p class="counter">You have generated: ' + counter + ' set(s) of buttons');
	// });


$(document).ready(function() {
	$('body').append('<button id="generate">Generate</button>');
	$('#generate').on('click', function() {
		$('body').append('<div class="buttonsDiv"></div>');
		$('div').append('<button class="delete">Delete</button>');
		$('div').append('<button class="change">Change</button>');
		$('div').append
	});



	$('.buttonsDiv').on('click', '.delete', deleteDiv);

	$('.buttonsDiv').on('click', '.change', changeDivClass);







});


function deleteDiv() {
	$(this).remove().parent('buttonsDiv');
	
	$(this).parent().remove();
}

function changeDivClass() {
	$('body').toggleClass('red-background');
}