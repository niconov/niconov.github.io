#
# function animateAlongPath( path, element, start, dur ) {
#     var len = Snap.path.getTotalLength( path );
#     Snap.animate( start, len, function( value ) {
#             var movePoint = Snap.path.getPointAtLength( path, value );
#             element.attr({ x: movePoint.x, y: movePoint.y });
#     }, dur);
# };
