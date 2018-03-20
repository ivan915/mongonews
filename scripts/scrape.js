var axios = require("axios");
var cheerio = require("cheerio");
const request = require('request');

var scrape = function() {
  return axios.get("https://www.huffingtonpost.com/")
    .then(function(res) {
      console.log(res)
    });
};

module.exports = scrape
