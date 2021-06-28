function View(canvas) {
	this.canvas = canvas;
	this.clicks = []; // add mouse clicks to an array
	this.frameRate = 1000 / 30; // Gives us 33fps
	this.loopRate = 4000;
	this.maxRadius = 80;
}

View.prototype.handleClick = function(event) {
	// console.log(this);
	var view = this;
	var x = event.offsetX;
	var y = event.offsetY;

	var pos = view.clicks.push({x: x, y: y, radius: 0});
	console.log("Add a circle at", x + ", " + y);
	Audio.play(x%10);
	setInterval(function() {
		view.clicks[pos-1].radius= 0;
		Audio.play(x%10);
	}, view.loopRate);
};

View.prototype.updateDisplay = function() {
	var view = this;
	var context = view.canvas.getContext("2d");
	context.clearRect(0, 0, view.canvas.width, view.canvas.height);
	context.fillStyle = "black";
	context.fillRect(0, 0, view.canvas.width, view.canvas.height); // set background to cover canvas area
    // context.strokeStyle = "orange";
    // context.strokeRect(canvas.width-110, canvas.height-110, 100, 100)
	// view.drawCircle(context, 150, 150, 100, 1);
	for (var i = 0; i < view.clicks.length; i++) {
		var circle = view.clicks[i];
		if (circle.radius >  view.maxRadius) continue;
		circle.radius += 1;
		
		var alpha = .7;
		if (circle.radius >  (view.maxRadius - 5)) {
			alpha = (view.maxRadius - circle.radius) / 10;
		}

		view.drawCircle(context, circle.x, circle.y, circle.radius, alpha); // Use this code to draw circles
		//view.drawFlower(context, circle.x, circle.y, circle.radius, alpha); // Use this code to draw flowers
	}
};

View.prototype.drawCircle = function(context, x, y, radius, alpha) {
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI);
	context.fillStyle = "rgba(" + x%256 + ", " + y%256 + ", " + (x * y % 256) + " ," + alpha + ")";
	context.fill();
}


// View.prototype.drawFlower = function(context, x, y, size, alpha) {
// 	var degrees = 36;

// 	context.save();
// 	context.translate(x, y);
// 	context.fillStyle = "rgba(" + x%256 + ", " + y%256 + ", " + (x * y % 256)+ " ," + alpha + ")";

// 	for (var i = 0; i < 360/degrees; i++) {
// 		context.fillRect(0, 0, size, size);
// 		context.rotate(degreesToRadians(degrees));
// 	}
// 	context.restore();
// }

function degreesToRadians(degrees) {
	return (degrees * Math.PI) /180;
}