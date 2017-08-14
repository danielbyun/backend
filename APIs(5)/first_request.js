let request = require("request");

request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(error, response, body){
   if(!error && response.statusCode === 200){
      // parse it into an object
      let parsedData = JSON.parse(body);

      // the results are in string format
       let sunsetTime = parsedData.query.results.channel.astronomy.sunset;
      console.log(`sunset in hawaii is at ${sunsetTime}`);
   }
});

request("https://api.darksky.net/forecast/4d1977dd251130f29bf178012ddc03f0/37.8267,-122.4233", function(error, response, body){
   if(!error && response.statusCode === 200){
      console.log("hey connected");
   }
});