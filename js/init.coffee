---
---
class @App
	constructor: () ->
		@snap = Snap("#canvas");
		@assignConstants()
		@circles = []
		@boxes = []
		@connections = []
		@createBox()
		@
	assignConstants: ->
		@minR = 30
		@maxR = 30
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
