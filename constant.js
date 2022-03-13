
const ALLOT_WATER = "ALLOT_WATER";
const ADD_GUESTS = "ADD_GUESTS";
const BILL = "BILL";
const DEBUG_MODE = false;
const corporation_rate_per_ltr = 1.0;
const borewell_rate_per_ltr = 1.5;
const daily_use_per_person = 10;
const no_of_days_in_month = 30;
const no_of_peoples_2BHK = 3;
const no_of_peoples_3BHK = 5;
const monthly_use_per_person = daily_use_per_person * no_of_days_in_month;

module.exports =  { ADD_GUESTS, ALLOT_WATER, BILL, DEBUG_MODE, borewell_rate_per_ltr, corporation_rate_per_ltr, daily_use_per_person, monthly_use_per_person, no_of_days_in_month, no_of_peoples_2BHK, no_of_peoples_3BHK }