const axios = require('axios');

function getDailyLeaders (city) {

  return axios.get('http://localhost:3000/playerSplits')
    .then(function (data) {
      //return currentWeatherData.data
      console.log(data);
    })


}

module.exports = {
  getDailyLeaders: getDailyLeaders
}
