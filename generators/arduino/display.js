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

goog.provide('Blockly.Arduino.display');

goog.require('Blockly.Arduino');

Blockly.Arduino['display_lcd'] = function(block) {
  //var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var text = Blockly.Arduino.valueToCode(this, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);
  //var line = Blockly.Arduino.valueToCode(this, 'Line', Blockly.Arduino.ORDER_ATOMIC);
  //var pos = Blockly.Arduino.valueToCode(this, 'Position', Blockly.Arduino.ORDER_ATOMIC);
  var line = this.getFieldValue('LINE');
  var pos = this.getFieldValue('POSITION');
  Blockly.Arduino.addSetup('','lcd_begin();\n  lcd.backlight();',true);
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'lcd.setCursor(' + pos + ',' + line +');\n';
  code+='lcd.print('+text+');\n';
  return code;
};

Blockly.Arduino['display_lcd_clear'] = function(block) {

  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  Blockly.Arduino.addSetup('lcd.init();');
  var code = 'lcd.clear();\n';
  return code;
};