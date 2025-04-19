//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
// Fahrenheit temps
const day1TempF = 32;
const day3TempF = 70;
const day5TempF = 80;
const day7TempF = 72;
const day9TempF = 68;
const day11TempF = 75;
const day13TempF = 82;
const day15TempF = 65;
const day17TempF = 77;
const day19TempF = 78;
const day21TempF = 73;
const day23TempF = 79;
const day25TempF = 71;
const day27TempF = 74;
const day29TempF = 29;

// Celsius temps
const day2TempC = 25;
const day4TempC = 18;
const day6TempC = 15;
const day8TempC = 28;
const day10TempC = 20;
const day12TempC = 23;
const day14TempC = 30;
const day16TempC = 22;
const day18TempC = 26;
const day20TempC = 24;
const day22TempC = 21;
const day24TempC = 27;
const day26TempC = 19;
const day28TempC = 17;
const day30TempC = 29;

const fahrenheitTemps = [
    day1TempF, day3TempF, day5TempF, day7TempF, day9TempF,
    day11TempF, day13TempF, day15TempF, day17TempF, day19TempF,
    day21TempF, day23TempF, day25TempF, day27TempF, day29TempF
  ];
  
  const celsiusTemps = [
    day2TempC, day4TempC, day6TempC, day8TempC, day10TempC,
    day12TempC, day14TempC, day16TempC, day18TempC, day20TempC,
    day22TempC, day24TempC, day26TempC, day28TempC, day30TempC
  ];

  function convertCtoF(celsius) {
    return (celsius * 9) / 5 + 32;
};

console.log(convertCtoF(day2TempC));
console.log(convertCtoF(day4TempC));
console.log(convertCtoF(day6TempC));
console.log(convertCtoF(day8TempC));
console.log(convertCtoF(day10TempC));
console.log(convertCtoF(day12TempC));
console.log(convertCtoF(day14TempC));
console.log(convertCtoF(day16TempC));
console.log(convertCtoF(day18TempC));
console.log(convertCtoF(day20TempC));
console.log(convertCtoF(day22TempC));
console.log(convertCtoF(day24TempC));
console.log(convertCtoF(day26TempC));
console.log(convertCtoF(day28TempC));
console.log(convertCtoF(day30TempC));

const tot_temperature_in_fahrenheit = fahrenheitTemps.reduce((sum, temp) => sum + temp, 0);
const tot_temperature_in_celsius = celsiusTemps.reduce((sum, temp) => sum + temp, 0);
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / fahrenheitTemps.length;
const avg_temperature_in_celsius = tot_temperature_in_celsius / celsiusTemps.length;

console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);