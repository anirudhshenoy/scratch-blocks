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

goog.provide('Blockly.Blocks.output');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['output_LED'] = {

  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OUTPUT_LED,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "led.png",
          "width": 30,
          "height": 30
        },
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Arduino.Boards.selected.outputPortPWM
        },
        {
          "type": "field_dropdown",
          "name": "OPTION",
          "options": Blockly.Arduino.Boards.selected.booleanOption
        }
      ],
      "category": Blockly.Categories.output,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['output_laser'] = {

  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OUTPUT_LASER,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Arduino.Boards.selected.outputPortPWM
        },
        {
          "type": "field_dropdown",
          "name": "OPTION",
          "options": Blockly.Arduino.Boards.selected.booleanOption
        }
      ],
      "category": Blockly.Categories.output,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['output_rainbow'] = {
  /**
   * Block to Report if a color is touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OUTPUT_RAINBOW,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Arduino.Boards.selected.outputPortPWM
        },
        {
          "type": "input_value",
          "name": "COLOR"
        },
        {
          "type": "input_value",
          "name": "BRIGHTNESS"
        }
      ],
      "category": Blockly.Categories.output,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['output_buzzer'] = {
  /**
   * Block to Report if a color is touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OUTPUT_BUZZER,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Arduino.Boards.selected.outputPortPWM
        },
        {
          "type": "field_dropdown",
          "name": "OPTION",
          "options": Blockly.Arduino.Boards.selected.booleanOption
        },
        {
          "type": "input_value",
          "name": "FREQUENCY"
        }
      ],
      "category": Blockly.Categories.output,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['output_servo'] = {
  /**
   * Block to Report if a color is touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OUTPUT_SERVO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PORT",
          "options": Blockly.Arduino.Boards.selected.outputPortPWM
        },
        {
          "type": "input_value",
          "name": "ANGLE",
        }
      ],
      "category": Blockly.Categories.output,
      "extensions": ["colours_motion", "shape_statement"],
      "colour": Blockly.Colours.motion.secondary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary,
    });
  }
};
