var p1 = 
 "Bonjour, je suis l’oracle du web.<br>"+
 "Donnez moi juste votre mail...<br>"+
 "et mes algorithmes prédiront votre avenir.<br> ";
 
var p2 = "Oups pardon, je rêvais." ;
var speed = 25;
var showCursor = false;
var thisInt = null;
var type = null;

function typeThis() {
	type  = $(".text").typed({
	        	strings: ["Des données, des données...", p2, p1],
	        	typeSpeed: speed,
	        	showCursor: false,
	        	contentType: 'html',
	        	callback: function() {
	        	 	stopScrollAuto()
	        	},
	   	 	});

}


/*function scrollAuto() {
    thisInt = setInterval(
        function() { 
            window.scrollTo(0,$('body').height()); 
    }, 500 );
}

function stopScrollAuto() {
    clearInterval(thisInt);
    thisInt = null;
}*/



$(document).ready( function() {
    typeThis();
    //scrollAuto();
});


