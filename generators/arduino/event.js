/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Time blocks.
 *     Arduino built-in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.event');

goog.require('Blockly.Arduino');



 Blockly.Arduino['event_start'] = function(block) {
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = '';
  return code;
};

 Blockly.Arduino['event_end'] = function(block) {
  
  var code = 'while(1);\n';
  return code;
};