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

goog.provide('Blockly.Arduino.output');

goog.require('Blockly.Arduino');

Blockly.Arduino['output_LED'] = function(block) {
  var dropdown_pin = block.getFieldValue('PORT');
  var selected_option = block.getFieldValue('OPTION');
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'digitalWrite('+dropdown_pin+ ',' + selected_option + ');\n';
  return code;
};

Blockly.Arduino['output_laser'] = function(block) {
  var dropdown_pin = block.getFieldValue('PORT');
  var selected_option = block.getFieldValue('OPTION');
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'digitalWrite('+dropdown_pin+ ',' + selected_option + ');\n';
  return code;
};

Blockly.Arduino['output_rainbow'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  var selected_color=Blockly.Arduino.valueToCode(
      block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var selected_brightness = Blockly.Arduino.valueToCode(
      block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC) || '0';  //ADD SELECTED BRIGHTNESS

//  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  Blockly.Arduino.addSetup('','Adafruit_NeoPixel pixels = Adafruit_NeoPixel(1, ' +dropdown_pin+ ', NEO_GRB + NEO_KHZ800); \n pixels.begin();',true);
  var code = 'char *hexstring = '+selected_color+ ';\n';
  code+= 'long number = strtol( &hexstring[1], NULL, 16);\n'
  code+='long r = number >> 16;\n';
  code+='long g = number >> 8 & 0xFF;\n';
  code+='long b = number & 0xFF;\n';
  code+='pixels.setPixelColor(0, pixels.Color(r,g,b)); \n';
  code+='pixels.show();\n';
  return code;
};

Blockly.Arduino['output_buzzer'] = function(block) {
  var dropdown_pin = block.getFieldValue('PORT');
  var selected_option = block.getFieldValue('OPTION');
  var selected_frequency = Blockly.Arduino.valueToCode(
      block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC) || '0';

  Blockly.Arduino.addInclude('', '#include <elementory.h>');

  var pinSetupCode = 'pinMode(' + dropdown_pin + ', OUTPUT);\n';
  Blockly.Arduino.addSetup('io_' + dropdown_pin, pinSetupCode, false);
  if (selected_option=='HIGH'){
    var code = 'tone(' + dropdown_pin + ',' + selected_frequency + ');\n';
  }
  else {
    var code = 'noTone(' + dropdown_pin + ');\n';
  }
  return code;
};

Blockly.Arduino['output_servo'] = function(block) {
  var dropdown_pin = block.getFieldValue('PORT');
  var servoAngle = Blockly.Arduino.valueToCode(
      block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
  var servoName = 'myServo' + dropdown_pin;

  Blockly.Arduino.reservePin(
      block, dropdown_pin, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration('servo_' + dropdown_pin, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + dropdown_pin + ');';
  Blockly.Arduino.addSetup('servo_' + dropdown_pin, setupCode, true);

  var code = servoName + '.write(' + servoAngle + ');\n';
  return code;
};