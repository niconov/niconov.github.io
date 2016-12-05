---
---
window.onload = ->
	s = Snap("#canvas");
	# s = Snap(800, 100%);
	bigCircle = s.circle(150, 150, 100);
	bigCircle.attr
		fill: "#bada55",
		stroke: "#000",
		strokeWidth: 5
	bigCircle.animate({r: 50}, 1000);
