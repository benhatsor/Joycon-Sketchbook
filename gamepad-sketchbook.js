
/* Gamepad integration for Sketchbook */

const controllers = Gamepad.controllers;

controllers.on.press('a', (value) => {

  if (value == 1) Controller.pressKey('KeyA');
  else Controller.releaseKey('KeyA');

});

