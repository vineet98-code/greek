const {math} = require('mathjs');

const { borewell_rate_per_ltr, corporation_rate_per_ltr, daily_use_per_person, no_of_days_in_month, no_of_peoples_2BHK, no_of_peoples_3BHK } = require('./constant.js');

const  debug = require('./debugger.js');

function round(no) {
  var value_after_decimal;
  value_after_decimal = no - Number.parseInt(no);

  if (value_after_decimal >= 0.5) {
    return Number.parseInt(no) + 1;
  }

  return Number.parseInt(no);
}

function calculate_for_allot_water(apartment_type, corporation_to_bore_ration) {
  console.log(apartment_type,corporation_to_bore_ration)
  /*[summary] - Return the Net Water consumed and Associated Cost with it
   Args:
  apartment_type `int`: [2 | 3] - Represents the 2BHK or 3BHK apartment
  corporation_to_bore_ration `float`: - Ration of Corporation to Borewell water
   Returns:
  [Net water in litres `int`,net cost in rs `float` ]
  */
  var cost_factor_bore, net_cost_in_rs, net_water_litres, take_from_borewell, take_from_coporation;
  net_water_litres = 0;
  net_cost_in_rs = 0;

  if (apartment_type === 2) {
    net_water_litres = daily_use_per_person * no_of_peoples_2BHK * no_of_days_in_month;
  } else {
    if (apartment_type === 3) {
      net_water_litres = daily_use_per_person * no_of_peoples_3BHK * no_of_days_in_month;
    }
  }

  cost_factor_bore = corporation_to_bore_ration / (1 + corporation_to_bore_ration);
  take_from_coporation = round(net_water_litres * cost_factor_bore);
  take_from_borewell = round(net_water_litres * (1 - cost_factor_bore));
  debug(take_from_coporation, take_from_borewell);
  debug(take_from_coporation * corporation_rate_per_ltr, round(take_from_borewell * borewell_rate_per_ltr));
  net_cost_in_rs = round(take_from_coporation * corporation_rate_per_ltr) + round(take_from_borewell * borewell_rate_per_ltr);
  return [net_water_litres, net_cost_in_rs];
}

// console.log(calculate_for_allot_water(2, 3 ))
module.exports = calculate_for_allot_water;
