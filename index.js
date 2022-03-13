const readline = require('readline');

const debug = require('./debugger.js');

const { ADD_GUESTS, ALLOT_WATER, BILL } = require('./constant.js');

// Cost and Consumption calculations functions
const calculate_for_allot_water = require('./fn_allot_water.js')
const calculate_for_add_guests = require('./fn_add_guest.js')

var fnName = function main() {
  var apartment_type, command, command_alias, corporation_to_bore_ration, cost_ADD_GUEST, cost_ALLOT_WATER, cost_of_water_consumed, input_file, net_water_consumed, no_of_guests, opened_file_ptr, parsed_commands_with_args, ratio_extraction_string, water_ADD_GUEST, water_ALLOT_WATER;
  input_file = sys.argv[1]  
    opened_file_ptr = open(input_file,'r')
  
  
  net_water_consumed = 0;
  cost_of_water_consumed = 0;
  no_of_guests = 0;

  while (true) {
    command = opened_file_ptr.readline();
    command = command.replace("\n", "");

    if (!command) {
      break;
    }

    parsed_commands_with_args = command.split(" ");
    debug("parsed_commands_with_args: ", parsed_commands_with_args);
    command_alias = parsed_commands_with_args[0];

    if (command_alias === ALLOT_WATER) {
      apartment_type = Number.parseInt(parsed_commands_with_args[1]);
      ratio_extraction_string = parsed_commands_with_args[2].split(":");
      corporation_to_bore_ration = Number.parseInt(ratio_extraction_string[0]) / Number.parseInt(ratio_extraction_string[1]);

      debug("corporation_to_bore_ration", corporation_to_bore_ration);
      
      [water_ALLOT_WATER, cost_ALLOT_WATER] = calculate_for_allot_water(apartment_type, corporation_to_bore_ration);
      net_water_consumed += water_ALLOT_WATER;
      cost_of_water_consumed += cost_ALLOT_WATER;
      debug("water_ALLOT_WATER", water_ALLOT_WATER);
      debug("cost_ALLOT_WATER", cost_ALLOT_WATER);
    } else {
      if (command_alias === ADD_GUESTS) {
        no_of_guests += Number.parseInt(parsed_commands_with_args[1]);
      } else {
        if (command_alias === BILL) {
          [water_ADD_GUEST, cost_ADD_GUEST] = calculate_for_add_guests(no_of_guests);
          debug("water_ADD_GUEST", water_ADD_GUEST);
          debug("cost_ADD_GUEST", cost_ADD_GUEST);
          net_water_consumed += water_ADD_GUEST;
          cost_of_water_consumed += cost_ADD_GUEST;
          console.log(round(net_water_consumed), round(cost_of_water_consumed));
          break;
        }
      }
    }
  }
}


if (require.main === module) {
  fnName();
}
