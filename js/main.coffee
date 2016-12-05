---
---

class App
	constructor: () ->
		@snap = Snap("#canvas");
		@assignConstants()
		@circles = []
		@createBox()
		@
	assignConstants: ->
		@minR = 30
		@maxR = 10
		@margin = 20

	createBox: ->
		@box =
			width:
				min: @maxR + @margin
				max: window.innerWidth  - @margin - @maxR
			height:
				min: @maxR + @margin
				max: window.innerHeight - @margin - @maxR
	_randomBetween: (min, max) ->
		Math.floor(Math.random() * (max - min + 1)) + min;

	_getRandomPosition: ->
		return position =
			x:  @_randomBetween @box.width.min, @box.width.max
			y: 	@_randomBetween @box.height.min, @box.height.max


	addCircles: () ->
		for i in [0..100]
			pos = @_getRandomPosition()
			rad = @_randomBetween @minR, @maxR
			circle =  @snap.circle pos.x, pos.y, rad
			circle.attr
				fill: "#bada55"
				stroke: "#000"
				strokeWidth: 2
			@circles.push circle




window.onresize = ->
	@app.createBox()
window.onload = ->
	@app = new App
	app.addCircles()
	animation = (e) ->
		pos = app._getRandomPosition()
		attrs =
			cx: pos.x
			cy: pos.y
			r:  app._randomBetween app.maxR, app.minR
		e.animate attrs, 2000, mina.easeinout, ->
			animation e

	app.circles.map (c) ->
		animation c
