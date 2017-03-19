	$(document).ready( function() {
		//main code goes here

		// declare our variables
		var seriously, // the main object that holds the entire composition
			source, // wrapper object for source video
			vignette,
			reformat, // edge detection effect
			target; // a wrapper object for our target canvas

		if (Seriously.incompatible('camera')) {
			document.body.appendChild(document.createTextNode('Sorry, your browser does not support getUserMedia'));
			document.querySelector('canvas').style.display = 'none';
			return;
		}
		var canvas = document.getElementById("canvas");
		//canvas.width  = $(window).width();
        //canvas.height = $(window).height();
		// construct our seriously object
		seriously = new Seriously();
		reformat = seriously.transform('reformat');
      	target = seriously.target('#canvas');

      	//set up reformat parameters
      reformat.width = target.width;
      reformat.height = target.height;
      reformat.mode = 'width';

		// time to get serious
		source = seriously.source('camera');
		reformat.source = '#canvas';
		vignette = seriously.effect('tvglitch');

		// connect all our nodes in the right order
			vignette.source = source;
			target.source = vignette;
			vignette.amount = '#vignette-range';

			

		seriously.go();
	}());

require.config({
			baseUrl: 'js/'
		});

		require([
			'seriously',
			'effects/seriously.accumulator',

			'sources/seriously.camera'
		], function (Seriously) {
			// declare our variables
			var seriously, // the main object that holds the entire composition
				target, // a wrapper object for our target canvas
		
				//reformat,
				accumulator,
				x = 0,
				y = 0,
				vx = 0,
				vy = 0,
				lastFrameTime = Date.now();

			/*function resize() {
				var aspect = window.innerWidth / window.innerHeight;
				target.width = Math.min(960, window.innerWidth);
				target.height = target.width / aspect;
				reformat.width = target.width;
				reformat.height = target.height;
			}*/

			//window.onresize = resize;

			seriously = new Seriously();
			//reformat = seriously.transform('reformat');
		
			accumulator = seriously.effect('accumulator');
			target = seriously.target('#canvas');

			//reformat.mode = 'cover';


			accumulator.opacity = 0.03;

			accumulator.source = seriously.source('camera');

			//reformat.source = accumulator;
			target.source = accumulator;
			//resize();
			seriously.go()
		});