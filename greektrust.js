const prompt = require('prompt');

const debug = require('./debugger.js');

const { ADD_GUESTS, ALLOT_WATER, BILL } = require('./constant.js');


// Cost and Consumption calculations functions
const calculate_for_allot_water = require('./fn_allot_water.js')
const calculate_for_add_guests = require('./fn_add_guest.js')

// console.log(calculate_for_add_guests(2));


const properties = [
  {
    name: 'ALLOT_WATER',
    // validator: /^[0-9]*\d$/,
    warning: 'ALLOT_WATER must be only number'
  },
  {
    name: 'ADD_GUESTS',
    validator: /^[0-9]*\d$/,
    warning: 'ADD_GUESTS  must be only number'
  },

  {
    name: 'BILL',
    validator: /^[0-9]*\d$/,
    warning: 'BILL must be only number'
  },
];

prompt.start();

prompt.get(properties, function (err, result) {
  var apartment_type, command_alias, corporation_to_bore_ratio, cost_ADD_GUEST, cost_ALLOT_WATER, cost_of_water_consumed, net_water_consumed, no_of_guests, parsed_commands_with_args, ratio_extraction_string, water_ADD_GUEST, water_ALLOT_WATER;

  if (err) {
    return onErr(err);
  }

  while (true) {
   const x = prompt("\n", "");

    if (!x) {
      break;
    }

    parsed_commands_with_args = x.split(" ");
    debug("parsed_commands_with_args: ", parsed_commands_with_args);
    command_alias = parsed_commands_with_args[0];

    if (command_alias === ALLOT_WATER) {

      apartment_type = Number.parseInt(parsed_commands_with_args[1]);
      ratio_extraction_string = parsed_commands_with_args[2].split(":");

      corporation_to_bore_ratio = Number.parseInt(ratio_extraction_string[0]) / Number.parseInt(ratio_extraction_string[1]);

      debug("corporation_to_bore_ratio", corporation_to_bore_ratio);

      [water_ALLOT_WATER, cost_ALLOT_WATER] = calculate_for_allot_water(apartment_type, corporation_to_bore_ratio);

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
        }
      }
    }
  }

  console.log('Command-line input received:');
  console.log(result);
  console.log('ALLOT_WATER 2 3:7 : ' + result.ALLOT_WATER);
  console.log('ADD_GUESTS 2: ' + result.ADD_GUESTS);
  // console.log('ADD_GUESTS 3: ' + result.BILL);

});

function onErr(err) {
  console.log(err);
  return 1;
}



