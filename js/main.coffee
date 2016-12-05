---
---
window.onload = ->
	s = Snap("#canvas");
	# s = Snap(800, 100%);
	bigCircle = s.circle('50%', '50%', 100);
	bigCircle.attr
		fill: "#bada55",
		stroke: "#000",
		strokeWidth: 5
	states = [{
			r: '50'
		}, {
			r: '100'
		}];

	f = (el, i) ->
		el.animate states[i], 1000, ->
			f el, if ++i of states then i else 0
	f bigCircle, 0
