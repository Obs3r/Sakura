var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var sakuraImg = new Image();
sakuraImg.src = 'sakura.png';

var sakura = [];

function Sakura() {
	this.x = Math.random() * canvas.width;
	this.y = -50;
	this.speed = 2 + Math.random() * 2;
	this.size = 40 + Math.random() * 40;
	this.angle = Math.random() * 360;
	this.angleSpeed = 0.1 + Math.random() * 0.2;

	this.draw = function() {
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle * Math.PI / 180);
		ctx.drawImage(sakuraImg, -this.size/2, -this.size/2, this.size, this.size);
		ctx.restore();
	}

	this.update = function() {
		this.y += this.speed;
		this.angle += this.angleSpeed;
		if (this.y > canvas.height + 100) {
			this.y = -50;
			this.x = Math.random() * canvas.width;
		}
	}
}

function createSakura() {
	for (var i = 0; i < 50; i++) {
		sakura.push(new Sakura());
	}
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < sakura.length; i++) {
		sakura[i].update();
		sakura[i].draw();
	}
}

sakuraImg.onload = function() {
	createSakura();
	animate();
}
