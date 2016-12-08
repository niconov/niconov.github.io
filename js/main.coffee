---
---


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

	app.Circles().add 3
	app.Boxes().add 3

	animation = (e, TIMING) ->
		pos = app._getRandomPosition()
		if e.type is 'rect'
			attrs =
				x: pos.x
				y: pos.y

		if e.type is 'circle'
			attrs =
				cx: pos.x
				cy: pos.y
				r:	app._randomBetween app.maxR, app.minR
		e.animate attrs, TIMING, mina.easeinout

	$("#addCircles").click ->
		app.Circles().add 1

	$("#removeCircles").click ->
		app.Circles().remove 1

	$("#addBoxes").click ->
		app.Boxes().add 1

	$("#removeBoxes").click ->
		app.Boxes().remove 1

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
			console.log c
			animation c, TIMING
		), TIMING

	setInterval (->
		app.boxes.map (c) ->
			console.log c
			animation c, TIMING
		), TIMING
