/**
 * Define an object to hold all our images for the game so images 
 * are only created once. This type of object is known as a 
 * singleton. 
 */
var imageRepository = new function() {
	// Define images
	this.background = new Image();	

	// Set images src 
	this.background.src = "images/bg.jpg";
}

/** 
 * Creates the Drawable object which will be the base class for 
 * all drawable objects in the game. Sets up default variables 
 * that all child objects will inherit as well as the default 
 * functions. 
 */
function Drawable() {
	console.log('Drawable function executed');
	//init method allows us to set the x & y position of object
	this.init = function(x, y) {
		//Default variables
		this.x = x;
		this.y = y;
	}
	this.speed = 0;
	this.canvasWidth = 0;
	this.canvasHeight = 0;

	//Define abstract function to be implemented in child objects
	this.draw = function() {
	};
}

/**
 * Creates the Background object which will become a child of 
 * the Drawable object. THe backgroun is drawn on the "background"
 * canvas and creates the illusion of moving by panning the image.
 */
function Background() {
	this.speed = 1; //Redefine speed of the background for panning
	//Implement abstract function
	this.draw = function() {
		// Pan background
		this.y += this.speed;
		this.context.drawImage(imageRepository.background, this.x, this.y);
		// Draw another image at the top edge of the first image
		this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);

		// If the image scrolled off the screen, reset
		if (this.y >= this.canvasHeight)
			this.y = 0;
	};
}

// Set Background to inherit properties from Drawable
Background.prototype = new Drawable();

/**
 * Creates the Game object which will hold all objects and data for the game.
 */
function Game() {
	/**
	 * Gets canvas information and context and sets up all game
	 * objects.
	 * Returns true if the canvas is supported and false if it is not.
	 * This is to stop the animation scriopt from constantly 
	 * running on older browsers. 
	 */
	this.init = function() {
		//Get the canvas element 
		console.log('this.init started');
		this.bgCanvas = document.getElementById('backgrounds');
		// Test to see if canvas is supported
		if (this.bgCanvas.getContext) {
			console.log('got getContext!');
			this.bgContext = this.bgCanvas.getContext('2d');
			//initialize objects to contain their context and canvas 
			// Information
			Background.prototype.context = this.bgContext;
			Background.prototype.canvasWidth = this.bgCanvas.width;
			Background.prototype.canvasHeight = this.bgCanvas.height;
			// Initialize the background object
			this.background = new Background();
			this.background.init(0,0); // Set draw point to 0,0
			console.log('Think were done here.');
			return true;
			
		} 
		else {
		return false;
		console.log("did not get 'getContext' ");
		}
	};

	// Start the animation loop
	this.start = function() {
		animate();
	};
}

/**
 * The animation loop. Calls the requestAnimationFrame shim to 
 * optimze the game loop and draws all game objects. This 
 * function must be a global function and cannot be within an object.
 */
function animate() {
	requestAnimFrame( animate );
	game.background.draw();
}

/**
 * requestAnim shim layer by Paul Irish
 * Finds the first API that works to optimze teh animation loop,
 * otherwise defaults to setTimeout().
 */
window.requestAnimFrame = (function() {
	console.log('requestAminFrame started');
	return window.requestAnimationFrame		||
		window.webkitRequestAnimationFrame  ||
		window.mozRequestAnimationFrame		||	
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function(/* function */ callback, /* DOMElement */ element){
			console.log('function started');
			window.setTimeout(callback, 1000 / 60);
		};
})(); //create an IIFE, immediately Invoked Function Expression.

/**
 * Initialize the Game and starts it.
 */
var game = new Game();

function init() {
	console.log('init function started');
	if(game.init())
		game.start();
}