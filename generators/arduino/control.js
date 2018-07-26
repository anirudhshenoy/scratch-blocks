/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Time blocks.
 *     Arduino built-in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.control');

goog.require('Blockly.Arduino');


/**
 * Code generator for the delay Arduino block.
 * Arduino code: loop { delay(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
 Blockly.Arduino['control_wait'] = function(block) {
  var delayTime = Blockly.Arduino.valueToCode(
      block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'delay(' + delayTime + ');\n';
  return code;
};

/**
 * Code generator for the repeat forever Arduino block.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */

Blockly.Arduino['control_forever'] = function(block) {
 
  var branch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  Blockly.Arduino.addLoop('',branch + '\n');
  return '';
};

/**
 * Code generator for the if Arduino block.
 * Arduino code: loop { delay(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_if'] = function(block) {
  var argument = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var sub = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  var code = "if(" + argument + "){\n";
  code += sub;
  code += "\n}";
  return code;
}


/**
 * Code generator for the if else Arduino block.
 
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_if_else'] = function(block) {
  var argument = Blockly.Arduino.valueToCode(block, 'CONDITION',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var sub_if = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
  var sub_else = Blockly.Arduino.statementToCode(block, 'SUBSTACK2');

  var code = "if(" + argument + "){\n";
  code += sub_if;
  code += "\n} \n";
  code += "else { \n";
  code += sub_else;
  code += "\n} \n";

  return code;
}
/**
 * Code generator for the if else Arduino block.
 
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['control_repeat'] = function(block) {
  var arg_times = Blockly.Arduino.valueToCode(block, 'TIMES',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var sub = Blockly.Arduino.statementToCode(block, 'SUBSTACK');

  var code= "for(int loop_counter=0, loop_counter<" + arg_times + ", loop_counter++) {\n";
  code += sub;
  code += "\n} \n"
  return code;
}
