---
---

App::Circles = ->
	return new Circles @

class Circles extends App
	constructor: (self) ->
		Object.assign @, self
		return @

	remove: (count) ->
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

	add: (count) ->
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
