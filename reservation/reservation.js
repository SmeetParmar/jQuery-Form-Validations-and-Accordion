"use strict";

// When page is loaded... 
$(document).ready( () => {

	// Pattern for checking Email...
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
	// Moving focus to Arrival date input....
	$("#arrival_date").focus();

	// As an when user submits the form following function will be executed....
	$("#reservation_form").submit(function(e){
		
		let valid=true;

		// Getting data from inputs and trimming it...
		let arrival_date=$("#arrival_date").val().trim();
		let nights=$("#nights").val().trim();
		let name=$("#name").val().trim();
		let email=$("#email").val().trim();
		let phone=$("#phone").val().trim();

		// Checking if arrival date is empty or not...
		if(!arrival_date)
		{
			$("#arrival_date").next().text("Please Enter Arrival Date.");
			valid=false;
		}
		else
		{
			$("#arrival_date").next().text("");
		}

		// Checking if night is empty or not...
		if(!nights)
		{
			$("#nights").next().text("Please Enter Number Of Nights.");
			valid=false;
		}
		else
		{
			$("#nights").next().text("");
		}

		// Checking if name is empty or not...
		if(!name)
		{
			$("#name").next().text("Please Enter Name.");
			valid=false;
		}
		else
		{
			$("#name").next().text("");
		}

		// Checking if email is empty or not and checking if email is matching the pattern or not...
		if(!email)
		{
			$("#email").next().text("Please Enter Email.");
			valid=false;
		}
		else if(!email.match(emailPattern))
		{
			$("#email").next().text("Please Enter A Valid Email Address.");
			valid=false;
		}
		else
		{
			$("#email").next().text("");
		}

		// Checking if phone is empty or not and checking if there are no alphabets in input....
		if(!phone)
		{
			$("#phone").next().text("Please Enter Phone Number.");
			valid=false;
		}
		else if(isNaN(phone))
		{
			$("#phone").next().text("Please Enter Only Digits.");
			valid=false;
		}
		else
		{
			$("#phone").next().text("");
		}

		// If all the inputs are correct the form will be submitted or else it won't be submitted...
		if(!valid) {  e.preventDefault(); }
	});
		
}); // end