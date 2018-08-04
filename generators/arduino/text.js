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

goog.provide('Blockly.Arduino.texts');

goog.require('Blockly.Arduino');

Blockly.Arduino['text'] = function(block) {
  var code = '\"' + block.getFieldValue('TEXT') + '\"';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
