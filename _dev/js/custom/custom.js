(function($){
$(document).ready(function(){

	
	// form validation
	$("#contact_form").validate({
		submitHandler: function(form) {
			form.submit();
		}
	});


	// GET form submission data
	// and populate name in thankyou message
	function getUrlParameter( query ) {
        query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var expr = "[\\?&]"+query+"=([^&#]*)";
        var regex = new RegExp( expr );
        var results = regex.exec( window.location.href );
        if( results !== null ) {
            return decodeURIComponent(results[1].replace('/\+/g', " "));
        } else {
            return false;
        }
    };
	var name = getUrlParameter('first-name')+' '+getUrlParameter('last-name')+' ';
	$('.thankyou__name').text( name ); 
	

});	
})(jQuery);