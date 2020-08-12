$(document).ready(function() {
	
	var slider = $("#image_list");                     // slider = ul element
	var leftProperty, newleftProperty;
		
	// the click event handler for the right button						
	$("#right_button").click(function() { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		// determine new value of left property
		if (leftProperty - 205 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 205; }
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click(function() {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 205;
		}
		else {
			newLeftProperty = 0;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click
	
	$('#image_list a').click(function(evt){ //click event for image selection
		var thisImage = this; //storing the current image  which is clicked
		$('#image').animate({ opacity: 0}, 1000, function () { //selecting the image to animate and a call back function 
				$('#image').attr('src', $(thisImage).attr("href"));
				$(this).animate({ opacity: 1}, 1000);
			}); //end animate
			evt.preventDefault();
		}); //end click		
	
}); // end ready