# MUGEN (Mini UnGame ENgine): A JavaScript library for creative coding and animation instruction
The MUGEN library is an extremely simple "ungame" engine. It lets novice developers quickly bring their art and character designs to life as a small, single-page, game-like experience on the web. It is not meant for full game development, but is instead a pedagogical tool to let beginner-to-intermediate coders practice CSS and gain experience using a JavaScript library in an art/design context.
## Live link
View a live demo (with rather rough placeholder graphics) at <a href="https://malloc-error.github.io/mugen/" target="_blank">malloc-error.github.io/mugen</a>
## Features
MUGEN displays three types of visual elements:
* background
* hero character
* monster character

It responds to user clicks/taps to support the following actions by the hero:
* display an "idle" state waiting for an action
* walking
* jumping
* attacking

MUGEN controls the location of the hero directly within the JavaScript engine, but the rest of the hero's visual styling, along with that of the monster, can be set with a typical CSS file. The engine simply adds or removes the corresponding class from each element according to user actions. Thus, coders with even basic CSS knowledge can take advantage of its full range of features, such as transitions, keyframes, and sprite-based animations, to quickly bring their visual designs to life.

Some additional enhancements can be enabled through initialization settings (see below), such as responsive resizing for a variety of screens, and an autoplay mode.

## Applications and intended learning outcomes
Depending on how your MUGEN-powered project is structured and how deeply it is pursued, this library could be a useful tool to teach topics such as:
* web design/front-end development with HTML and CSS
* using, configuring, and understanding the documentation of 3rd party libraries
* character design, illustration, and animation

MUGEN can be applied to projects covering a range of timeframes, from one-day workshops to longer design briefs.
## Included files
* `mugen.min.js` the library itself 
* `/demo/`directory containing a functioning demonstration powered by MUGEN:
  * `index.html` the web page to be opened in the user's browswer
  * `style.css` a style sheet with examples of all supported classes:
    * `.background` appearance of the background setting
    * `.hero` appearance of the hero in an idle, or neutral, state
    * `.hero.walking` appearance of the hero when walking
    * `.hero.jumping` appearance of the hero when jumping
    * `.hero.attacking` appearance of the hero when performing an attack
    * `.hero.left` appearance of the hero when facing left, with right being considered the default (note: this class may be applied in the walking, jumping, or attacking states)
    * `.monster` appearance and motion of the monster
    * `.instructions` appearance of a short instruction text blurb that displays when the page first loads
  * `script.js` a short JavaScript file that instantiates and initializes the MUGEN library
  * `img/` a directory containing all the images and sprite sheets required for the background, hero, and monster
## Getting started
The easiest way to get started with the library is to start tweaking the image assets and code in the demo files. 

Alternatively, to add MUGEN to a new project starting from scratch, follow these steps:
* Include the MUGEN library (mugen.min.js) in your HTML file
* In your own JavaScript file, initialize MUGEN like this:
```
  var mugen = new MUGEN();
  mugen.initialize();
```
* Create and link a CSS file that handles styles for the classes listed in the *Included files* section, following the pattern of the demo's CSS file
* That's it! MUGEN will respond to user clicks/taps, move the characters, and apply CSS classes according to the default settings—or the custom values you set during initialization (see *Initialization settings* for more)

## Initialization settings
MUGEN's operation can be customized with certain settings, passed as an object in the initialization function, as in the following example where the length of the hero's attack duration is set to 600ms:
```
  var mugen = new MUGEN();
  mugen.initialize({attackDuration: 600});
```
The following example shows how more than one setting can be passed into the initialization function:
```
  var mugen = new MUGEN();
  mugen.initialize({attackDuration: 600, jumpHeight: 220, monsterSpeed: 550});
```
The following is a complete list of available settings:
* `heroSpeed` (number) how fast the hero moves when walking, in pixels per second
* `jumpHeight` (number) how high the hero jumps, in pixels
* `attackDuration` (number) duration of the hero's attack animation, in milliseconds **note: this should match the setting in the CSS file**)
* `monsterSpeed` (number) how fast the monster moves, in pixels per second
* `timeBetweenMonsters` (number) length of time between new monster spawns, in milliseconds
* `makeResponsive` (boolean) when set to true, MUGEN will attempt to resize the page to fit on smaller screens **note: this feature is experimental and potentially buggy**
* `autoPlay` (boolean) when set to true, MUGEN will make the hero move, jump, and attack automatically instead of waiting for user input
## Formatting animation sprites
These guidelines will help get the best results while avoiding technical headaches:
* use png format, with a transparent background
* sprite sheets can be as many frames as desired
* frames should be arranged from left to right on each sprite sheet
* each frame should be a square
* each sprite sheet should end with one blank full frame
    * necessary due to an interaction between the way CSS handles percentages in background-position and the desire to keep the hero and monster as readily resizable/responsive as possible by using percentages
* example: a sprite sheet with 4 keyframes might be exported as a single png image, where each frame is 200x200px, for a total of 1000px wide and 200px tall (4 keyframes plus 1 blank totally 5 frames at 200px wide each)
* remember to set the `steps()` number of the animation-timing-function in the CSS to the number of keyframes in your animation
  * e.g. if a sprite sheet has 4 frames (not counting the required blank frame at the end), use `animation-timing-function: steps(4);`
* see the demo files for examples of properly formatted sprites and CSS files
