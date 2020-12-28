let celciusConverter = function(temp) {
  let fahrenheit = (temp * 9/5) + 32;
  return Math.round(fahrenheit);
};

let meterConverter = function(height) {
  let feet = height / 0.3048;
  return Math.round(feet);
};
let mpsConverter = function(speed) {
  let mph = speed * 2.237;
  return Math.round(mph);
};

let directionToEnglish = function(dir) {
  let num = Math.floor((dir/ 22.5) + 0.5);
  let directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return directions[(num % 16)];
}
// let directionToEnglish = function(dir) {
//   if (dir <= 11.25 || dir >= 348.75) { return 'N'; }
//   if (dir > 11.25 && dir <= 33.75) {return 'NNE'; }
//   if (dir > 33.75 && dir <= 56.25) {return 'NE'; }
//   if (dir > 56.25 && dir <= 78.75) {return 'ENE'; }
//   if (dir > 78.75 && dir <= 101.25) {return 'E'; }
//   if (dir > 101.25 && dir <= 123.75) {return 'ESE'; }
//   if (dir > 123.75 && dir <= 146.25) {return 'SSE'; }
//   if (dir > 146.25 && dir <= 168.75) {return 'SE'; }
//   if (dir > 168.75 && dir <= 191.25) {return 'S'; }
//   if (dir > 191.25 && dir <= 213.75) {return 'SSW'; }
//   if (dir > 213.75 && dir <= 236.25) {return 'SW'; }
//   if (dir > 236.25 && dir <= 258.75) {return 'WSW'; }
//   if (dir > 258.75 && dir <= 281.25) {return 'W'; }
//   if (dir > 281.25 && dir <= 303.75) {return 'WNW'; }
//   if (dir > 303.75 && dir <= 326.25) {return 'NW'; }
//   if (dir > 326.25 && dir <= 348.75) {return 'NNW'; }
// };

module.exports = {
  celciusConverter,
  meterConverter,
  mpsConverter,
  directionToEnglish
};