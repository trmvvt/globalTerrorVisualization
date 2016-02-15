/********************************************************************************************\
Description: Function to bind view when DOM is loaded and start drawing all components
Author: Poushali Banerjee
Update: Feb 1, 2016
/*******************************************************************************************/


function initialize(){

	//var view;
	var myyear;

	$(document).ready(function(){
	    $(".dropdown-menu").on("click", function(e){
	        var linkText = $(e.target).text(); // Get the link text
	        handleChange(linkText);

	    });
	});


	function handleChange(selectText){

		console.log("printing from handleChange " + selectText);
		view = selectText;
	 	drawPanel(false);

	}

  
	drawComponents();
	
}