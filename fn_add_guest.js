/*
Tanker Water - Slab rate:

- 0 to 500L - Rs. 2 per litre
- 501L to 1500L - Rs. 3 per litre
- 1501 to 3000L - Rs. 5 per litre
- 3001L+ - Rs. 8 per litre

Tanker water has a slab rate similar to income tax slabs, which means you pay different amounts for each slab. For e.g if you have consumed 2000L of tanker water then your cost is 500*2 + 1000*3 + 500*5 = Rs. 6500*/
const  debug  = require('./debugger.js');


const { monthly_use_per_person } = require('./constant.js');
//  console.log(monthly_use_per_person)

function calculate_for_add_guests(no_of_guests) {
  /*Gives the Cost and Consumption of the Water for Guest
   Args:
  no_of_guests `int`: take the No of Guests as input parameter
   Returns:
  `net_monthly_use,net_monthly_cost`
  */
  var add_in_list_flag, min_complete_idx, net_monthly_cost, net_monthly_use, new_step_wise_capacity, slab_cost, slab_length, step_wise_capacity, step_wise_unit_costs;

  net_monthly_use = no_of_guests * monthly_use_per_person;
  net_monthly_cost = 0;
  step_wise_capacity = [0, 500, 1500, 3000];
  step_wise_unit_costs = [2, 3, 5, 8];
  min_complete_idx = -1;
  new_step_wise_capacity = [];
  add_in_list_flag = false;

  for (var itr, _pj_c = 0, _pj_a = step_wise_capacity, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    itr = _pj_a[_pj_c];

    if (itr < net_monthly_use) {
      new_step_wise_capacity.push(itr);
    } else {
      new_step_wise_capacity.push(net_monthly_use);
      add_in_list_flag = true;
      break;
    }
  }

  if (!add_in_list_flag) {
    new_step_wise_capacity.push(net_monthly_use);
  }

  debug("new_step_wise_capacity", new_step_wise_capacity);

  if (new_step_wise_capacity.length === 1) {
    return [0, 0];
  }

  for (var itr = 0, _pj_a = new_step_wise_capacity.length; itr < _pj_a; itr += 1) {
    if (itr !== 0) {
      slab_length = new_step_wise_capacity[itr] - new_step_wise_capacity[itr - 1];
      slab_cost = slab_length * step_wise_unit_costs[itr - 1];
      net_monthly_cost += slab_cost;
    }
  }

  return [net_monthly_use, net_monthly_cost];
}

// console.log(calculate_for_add_guests(2));
module.exports = calculate_for_add_guests;