	$(document).ready( function() {

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