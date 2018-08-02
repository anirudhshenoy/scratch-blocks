/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.display');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');



Blockly.Blocks['display_lcd'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DISPLAY_LCD,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LINE",
          "options": [['1', '0'], ['2', '1']]
        },
        {
          "type": "field_dropdown",
          "name": "POSITION",
          "options": [['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'],['5', '4'],['6', '5'], ['7', '6'], ['8', '7'], ['9', '8'],['10', '9'],['11', '10'], ['12', '11'], ['13', '12'], ['14', '13'],['15', '14'],['16', '15']]
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.display,
      "extensions": ["colours_motion" , "shape_statement"]
    });
  }
};

Blockly.Blocks['display_lcd_clear'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.DISPLAY_LCD_CLEAR,
      "category": Blockly.Categories.display,
      "extensions": ["colours_motion" , "shape_statement"]
    });
  }
};