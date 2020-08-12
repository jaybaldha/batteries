$(document).ready(function() {
    $.validator.setDefaults({  // email address format checker
  		debug: true,
  		success: "valid"
	});
	$.validator.addMethod("Date",function(value, element) { //date format method
			return value.match(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/);
        },
        "Please enter a date in the format dd/mm/yyyy" //Error msg
	);
    $.validator.addMethod('positive', // positive number validator
    function (value) { 
        return Number(value) > 0;
    }, 'Please enter a positive number.'); //Error msg

  $("#contact_form").validate({ //validation function
    rules: {
      fName:{
	  	required:true,
	  },
	  lName:{
		required:true,
	  },	
      email: {
        required: true,
        email: true,
	  },
	  phone:{
		  required:true,
		  digits:true,
		  maxlength:10,
	  }
    },
    messages: {
      email: {
        required: 'Please enter an email address.',
		email: 'Please enter a <em>valid</em> email address.',
	  }
	},
  });
$("#reset").click(function() {
	$("#contact_form").validate().resetForm();
});
// });


	// var $ =function(id) { 
	// 	return document.getElementById(id); 
	// };
	// var processEntries= function() {
	// 	var isValid = true;
	// 	var email = $("email_address").value;
	// 	var phone = $("phone").value;
	// 	var country = $("country").value;
	// 	var contact = "Text";
	// 	if ($("email").checked) { 
	// 		contact = "Email"; }
	// 		if ($("none").checked) { 
	// 			contact = "None"; 
	// 		}
	// 		var terms = $("terms").checked;
	// 		if (email == "") {
	// 			$("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
	// 			isValid = false; 
	// 		}else {
	// 			$("email_address").nextElementSibling.firstChild.nodeValue = ""; 
	// 		}
	// 		if (phone == "") {
	// 			$("phone").nextElementSibling.firstChild.nodeValue ="This field is required.";
	// 			isValid = false; 
	// 		}else { 
	// 			$("phone").nextElementSibling.firstChild.nodeValue ="";
	// 		}
	// 		if (country == "") {
	// 			$("country").nextElementSibling.firstChild.nodeValue = "Please select a country.";
	// 			isValid = false;
	// 			}else{ 
	// 				$("country").nextElementSibling.firstChild.nodeValue ="";
	// 			}
	// 			if (terms == false) {
	// 				$("terms").nextElementSibling.firstChild.nodeValue ="This box must be checked.";
	// 				isValid = false; 
	// 			}else { 
	// 				$("terms").nextElementSibling.firstChild.nodeValue ="";
	// 			}
	// 			 //submit the form if all fields are valid
	// 			if (isValid == true) {
	// 				$("reservation_form").submit(); 
	// 			}
	// window.onload = function() {
	// 	$("submit").onclick = processEntries;
	// 	$("reset_form").onclick = resetForm;    
	// 	$("email_address").focus();
	// };
		// }
		// $("submit").onclick = processEntries;

}); // end ready
