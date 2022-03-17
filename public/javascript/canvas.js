/** @format */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Mouse {
	pageX;
	pageY;
	points = Array.apply(null, Array(4)).map(function () {});
	images = {};
	constructor(pageX, pageY) {
		this.pageX = pageX;
		this.pageY = pageY;
	}
	addPoints(pageX, pageY) {
		while (/**condition for clicked class statement */ 1) {
			setTimeout(() => {
				this.points.map({
					X: pageX,
					Y: pageY,
				});
			}, 200);
			if (length(this.points) == 4) break;
		}
	}
	//gets X,Y coordinates and uses moveto
	beginDraw() {
		ctx.moveTo(this.points[0].X, this.points[0].Y);
		while (length(this.points) <= 4) {
			switch (length(this.points)) {
				case 1:
					ctx.arc(this.points[0].X, this.points[0].Y, 1, 0, 30, true); //Draw a small circle around the point

					for (let i = 1; i < length(this.points); ++i) {
						this.points[i].X.map(() => {});
						this.points[i].Y.map(() => {});
					}
					break;

				case 2:
					ctx.lineTo(this.points[1].X, this.points[1].Y); //straight line
					this.points[0].X = this.points[1].X;
					this.points[0].Y = this.points[1].Y;
					for (let i = 1; i < length(this.points); ++i) {
						this.points[i].X.map(() => {});
						this.points[i].Y.map(() => {});
					}
					break;

				case 3:
					ctx.quadraticCurveTo(
						this.points[1].X,
						this.points[1].Y,
						this.points[2].X,
						this.points[2].Y
					); //quadratic curve
					this.points[0].X = this.points[2].X;
					this.points[0].Y = this.points[2].Y;
					for (let i = 1; i < length(this.points); ++i) {
						this.points[i].X.map(() => {});
						this.points[i].Y.map(() => {});
					}
					break;

				case 4:
					ctx.bezierCurveTo(
						this.points[1].X,
						this.points[1].Y,
						this.points[2].X,
						this.points[2].Y,
						this.points[3].X,
						this.points[3].Y
					); //bezier curve
					this.points[0].X = this.points[3].X;
					this.points[0].Y = this.points[3].Y;
					for (let i = 1; i < length(this.points); ++i) {
						this.points[i].X.map(() => {});
						this.points[i].Y.map(() => {});
					}
					break;

				default:
					break;
			}
			ctx.beginPath(); //create new line

			/*ctx.bezierCurveTo(*need to write function for producing control points.
  Start with a finding the slope, then subtract a line segment along that path );*/
			//set timeout function?
			//how many curves do I need?
			//Should I have a class for _mouse that creates X and Y coordinates over the time the .clicked class is active, then deletes the memory?
		}
	}
}

if (canvas.getContext) {
	//place function here
}

/*

create canvas path with parameters based on mousemove.pageX and mousemove.pageY
use while (class == .clicked) to start/stop path
short set time out?
create multiple small elements inside the canvas based on the length of set timeout


*/
