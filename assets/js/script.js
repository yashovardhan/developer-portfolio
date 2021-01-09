var COLOURS = [ '#c3c4eb', '#FDF5E6', '#FFEBCD', '#F0F0FE', '#FFFFFF', '#FFFAFA', '#E0E0E0']; // Background Colours
var radius = 0;
var randomColor = 0;

function colourChange() {
	randomColor = parseInt( 0 + (COLOURS.length - 0) * Math.random(), 10 ) ;
}

// Menu Constants
const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
const navItem1 = menu.querySelector('.nav-item1');
const navItem2 = menu.querySelector('.nav-item2');
const navItem3 = menu.querySelector('.nav-item3');
const navItem4 = menu.querySelector('.nav-item4');
const navItem5 = menu.querySelector('.nav-item5');

// Menu Event Listeners
btn.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem1.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem2.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem3.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem4.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem5.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});

//Sketch.js Implementation

Sketch.create({

	container: document.getElementById( 'background-content' ),
	autoclear: false,
	retina: 'auto',

	update: function() {
		radius = 300;
	},

	click: () => colourChange(),

	touchmove: function() {

		for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

			touch = this.touches[i];

			this.lineCap = 'round';
			this.lineJoin = 'round';
			this.fillStyle = this.strokeStyle = COLOURS[ randomColor % COLOURS.length ];
			this.lineWidth = radius;

			this.beginPath();
			this.moveTo( touch.ox, touch.oy );
			this.lineTo( touch.x, touch.y );
			this.stroke();
		}
	},

	touchend: () => colourChange()
});

// Fade-in Animation

$(document).ready(function($) {
	"use strict";

	$(".animate").each(function(e) {
		var $this = $(this);
		setTimeout(function(){
			$this.addClass("idle");
		}, e * 100);
	});
});