---
---

# e = JQuery.Event 'click'
# JQuery('body').trigger e

class App
	constructor: () ->
		@snap = Snap("#canvas");
		@assignConstants()
		@circles = []
		@connections = []
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
				max: window.innerWidth	- @margin - @maxR
			height:
				min: @maxR + @margin
				max: window.innerHeight - @margin - @maxR
	_randomBetween: (min, max) ->
		Math.floor(Math.random() * (max - min + 1)) + min;
	_getRandomPosition: ->
		return position =
			x:	@_randomBetween @box.width.min, @box.width.max
			y: 	@_randomBetween @box.height.min, @box.height.max

	addConnections: ->
		# from = @circles[0]
		# # to = @circles[1].node.cx.
		# p =
		# 	f:
		# 		x: @circles[0].node.cx.animVal.value
		# 		y: @circles[0].node.cy.animVal.value
		# 	t:
		# 		x: @circles[1].node.cx.animVal.value
		# 		y: @circles[1].node.cy.animVal.value
		# path = @snap.path "M#{p.f.x} #{p.f.y}L#{p.t.x} #{p.t.y}"
		# path.attr
		# 	stroke: '#333'
		# group = @snap.g path, @circles[0],@circles[1]
		# @connections.push group

	removeCircles: (count) ->
		self = @
		for i in [0..count-1]
			if self.circles.length >= 1
				# self.circles =
				el = @circles[0]
				@circles.shift()
				attrs =
					cx: 0
					cy: 0
				el.animate attrs, 200, mina.easeinout, ->
					el.remove()

	addCircles: (count) ->
		self = @
		for i in [0..count-1]
			pos = @_getRandomPosition()
			rad = @_randomBetween @minR, @maxR

			circle = @snap.circle -50, -50, rad
			circle.attr
				fill: "#bada55"
				stroke: "#000"
				strokeWidth: 2
			attrs =
				cx: pos.x
				cy: pos.y
			self.circles.push circle
			circle.animate attrs, 400, mina.easeinout







aaaa = ->
	dragger = ->
		if @type == 'rect' then a = @attr('x') else a = @attr('cx')
		if @type == 'rect' then b = @attr('y') else b = @attr('cy')
		@data 'ox', a
		@data 'oy', b
		@animate { 'fill-opacity': .2 }, 500

	move = (dx, dy) ->
		att = null
		if @type == 'rect'
			att =
				x: parseInt(@data('ox')) + dx
				y: parseInt(@data('oy')) + dy
		else
			att =
				cx: parseInt(@data('ox')) + dx
				cy: parseInt(@data('oy')) + dy
		@attr att
		connections.map (c) ->
			app.snap.connection c
		return

	up = ->
		@animate { 'fill-opacity': 0 }, 500
		return

	connections = []
	shapes = [
		app.snap.rect(290, 80, 60, 40)
		app.snap.rect(290, 180, 60, 40)
	]
	shapes = shapes.map (shape) ->
		shape.attr
			fill: 'red'
			stroke: 'red'
			'fill-opacity': 0
			'stroke-width': 2
			cursor: 'move'
		shape.drag move, dragger, up
	connections.push app.snap.connection(shapes[0], shapes[1], '#ccc')
	return





window.onresize = ->
	@app.createBox()
window.onload = ->
	@app = new App

	app.addCircles 3

	animation = (e, TIMING) ->
		pos = app._getRandomPosition()
		attrs =
			cx: pos.x
			cy: pos.y
			r:	app._randomBetween app.maxR, app.minR
		e.animate attrs, TIMING, mina.easeinout


	$("#addCircles").click ->
		app.addCircles 1

	$("#removeCircles").click ->
		app.removeCircles 1
		# p =
		# 	f:
		# 		x: app.circles[0].node.cx.animVal.value
		# 		y: app.circles[0].node.cy.animVal.value
		# 	t:
		# 		x: app.circles[1].node.cx.animVal.value
		# 		y: app.circles[1].node.cy.animVal.value
		#
		# pathat = d: "M#{p.f.x} #{p.f.y}L#{p.t.x} #{p.t.y}"
		# path = app.connections[0].path
		# path.animate pathat, 2000, mina.linear
	TIMING = 500
	setInterval (->
		app.circles.map (c) ->
			animation c, TIMING
		), TIMING
