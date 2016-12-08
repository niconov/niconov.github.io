---
---

App::Boxes = ->
	return new Boxes @

class Boxes extends App
	constructor: (self) ->
		Object.assign @, self
		return @

	remove: (count) ->
		self = @
		for i in [0..count-1]
			if self.boxes.length >= 1
				# self.boxer =
				el = @boxes[0]
				@boxes.shift()
				attrs =
					x: 0
					y: 0
				el.animate attrs, 200, mina.easeinout, ->
					el.remove()

	add: (count) ->
		self = @
		for i in [0..count-1]
			pos = @_getRandomPosition()
			rad = @_randomBetween @minR, @maxR
			box = @snap.rect -50,-50, rad, rad, 2
			box.attr
				fill: "#bada55"
				stroke: "#000"
				strokeWidth: 2
			attrs =
				x: pos.x
				y: pos.y
			self.boxes.push box
			box.animate attrs, 400, mina.easeinout
