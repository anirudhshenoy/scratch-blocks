/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for the Math blocks.
 *
 * TODO: Math on list needs lists to be implemented.
 *       math_constant and math_change needs to be tested in compiler.
 */
'use strict';

goog.provide('Blockly.Arduino.sensing');

goog.require('Blockly.Arduino');

Blockly.Arduino['sensing_light'] = function(block) {
  var dropdown_pin = block.getFieldValue('PORT');
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['sensing_ultrasonic'] = function(block) {
  var dropdown_pin = block.getFieldValue('PORT');
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'get_ultrasonic_distance('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['sensing_touch'] = function(block) {
  var dropdown_pin = block.getFieldValue('PORT');
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'touch_sensor('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['sensing_tilt'] = function(block) {
  var dropdown_pin = block.getFieldValue('PORT');
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'tilt_sensor('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};