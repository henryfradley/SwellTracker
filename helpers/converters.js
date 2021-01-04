let celciusConverter = function (temp) {
  let fahrenheit = (temp * 9 / 5) + 32;
  return Math.round(fahrenheit);
};

let meterConverter = function (height) {
  let feet = height / 0.3048;
  feet = Math.round(feet * 100) / 100;
  return feet;
};


let mpsConverter = function (speed) {
  let mph = speed * 2.237;
  return Math.round(mph);
};

let directionToEnglish = function (dir) {
  let num = Math.floor((dir / 22.5) + 0.5);
  let directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return directions[(num % 16)];
};


let timeConverter = function (time) {
  time = time.split('T');
  time = time[1];
  time = time.slice(0, 5);

  let firstHalf = time.slice(0, 2);

  if (firstHalf === '00') {
    firstHalf = '12';
  }
  let secondHalf = time.slice(3);
  firstHalf = parseInt(firstHalf);
  if (firstHalf < 12) {
    return firstHalf.toString() + ':' + secondHalf + 'am';
  }
  if (firstHalf === 12) {
    return firstHalf.toString() + ':' + secondHalf + 'pm';
  } else {
    return (firstHalf - 12).toString() + ':' + secondHalf + 'pm';
  }

};
let closestTime = function (currentTime, times) {


  let now = currentTime.toString().split(' ');
  now = now[4];
  now = now.slice(0, 5);
  now = now.replace(':', '.');
  now = parseFloat(now);

  let tides = [];
  for (var tide of times) {
    tide = tide.time.split('T');
    tide = tide[1];
    tide = tide.slice(0, 5);
    tide = tide.replace(':', '.');
    tide = parseFloat(tide);
    tides.push(tide);
  }
  let beforeSorted = tides;


  let formattedTimes = tides;
  formattedTimes.push(now);
  formattedTimes = formattedTimes.sort((a, b) => a - b);

  let nextIdx = formattedTimes.indexOf(now);
  let next = formattedTimes[nextIdx];
  next = beforeSorted.indexOf(next) - 1;
  // return ('tides', tides);
  return next;
};

let positions = function() {
  let nums = [];
  let position = 0;
  for (let i = 0; i <= 25; i++) {
    position += 28;
    nums.push(position);
  }
  return nums;
};





module.exports = {
  celciusConverter,
  meterConverter,
  mpsConverter,
  directionToEnglish,
  timeConverter,
  closestTime
};
