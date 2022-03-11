const prompt = require('prompt');

const properties = [
  {
    name: 'Please_provide_the_Assignment_type_and_ratio',
    // validator: /^[0-9]*\d$/,
    warning: 'ApartmentType_Ratio must be only number'
  },
  {
    name: 'ADD_GUESTS_2',
    validator: /^[0-9]*\d$/,
    warning: 'ALLOT_WATER_2  must be only number'
  },

  {
    name: 'ADD_GUESTS_3',
    validator: /^[0-9]*\d$/,
    warning: 'ADD_GUESTS_3 must be only number'
  },
];

prompt.start();

prompt.get(properties, function (err, result) {
  if (err) {
    return onErr(err);
  }

  console.log('Command-line input received:');
  console.log(result);
  console.log('ALLOT_WATER 2 3:7 : ' + result.Please_provide_the_Assignment_type_and_ratio);
  console.log('ADD_GUESTS 2: ' + result.ADD_GUESTS_2);
  console.log('ADD_GUESTS 3: ' + result.ADD_GUESTS_3);
  // console.log('Bill : ' + result.Bill);
});

function onErr(err) {
  console.log(err);
  return 1;
}