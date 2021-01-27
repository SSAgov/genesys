Adding Animation
================

This tutorial will show you how to add animation effects to your prototypes.

The `Genesys Extension` for VS Code supports the AniJS and Animate.css libraries for adding animation effects to your designs through HTML. You can also add animation effects on Events (such as Click) and Conditions (if/then).

To add animation support to your prototype page:

1. In the <code>HEAD</code> of your page, type <code>gns-add-animation</code>.
2. Add any of the animation classes to any HTML element you want to animate.

Animation Classes
-----------------

From AniJS:

- Use [AniCollection](http://anicollection.github.io/#/)  to see all of the AniJS classes in action.

From Animate.css:

- bounce
- flash
- pulse
- rubberBand
- shake
- headShake
- swing
- tada
- wobble
- jello
- bounceIn
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp
- bounceOut
- bounceOutDown
- bounceOutLeft
- bounceOutRight
- bounceOutUp
- fadeIn
- fadeInDown
- fadeInDownBig
- fadeInLeft
- fadeInLeftBig
- fadeInRight
- fadeInRightBig
- fadeInUp
- fadeInUpBig
- fadeOut
- fadeOutDown
- fadeOutDownBig
- fadeOutLeft
- fadeOutLeftBig
- fadeOutRight
- fadeOutRightBig
- fadeOutUp
- fadeOutUpBig
- flipInX
- flipInY
- flipOutX
- flipOutY
- lightSpeedIn
- lightSpeedOut
- rotateIn
- rotateInDownLeft
- rotateInDownRight
- rotateInUpLeft
- rotateInUpRight
- rotateOut
- rotateOutDownLeft
- rotateOutDownRight
- rotateOutUpLeft
- rotateOutUpRight
- hinge
- jackInTheBox
- rollIn
- rollOut
- zoomIn
- zoomInDown
- zoomInLeft
- zoomInRight
- zoomInUp
- zoomOut
- zoomOutDown
- zoomOutLeft
- zoomOutRight
- zoomOutUp
- slideInDown
- slideInLeft
- slideInRight
- slideInUp
- slideOutDown
- slideOutLeft
- slideOutRight
- slideOutUp

Example
-------

To slide in a UEF Notice pattern from the top of the screen, you would add the <code>slideInDown</code> class to the UEF Notice markup like this:

````
<div class="uef-notice slideInDown>
````

----------------------------------------------------------

Further References
------------------

- [AniJS](http://anijs.github.io/)
- [AniJS Wiki](https://github.com/anijs/anijs/wiki)
- [Animate.css](https://daneden.github.io/animate.css/)
- [Animate.css Reference](https://github.com/daneden/animate.css)
