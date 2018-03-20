const cheerio = require("cheerio");
const request = require('request');
var Headline = require('../models/Headline.js');

const scrape = function() {
  // scrape data from huffington post
  request("https://www.huffingtonpost.com/", function (error, res, html) {
    var $ = cheerio.load(html);
    // for each element with a "title" class
    $(".title").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var title = $(element).children("a").text();
      var link = $(element).children("a").attr("href");

      // If this found element had both a title and a link
      if (title && link) {
        // Insert the data in the scrapedData db
        db.scrapedData.insert({
          title: title,
          link: link
        },
        function(err, inserted) {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          }
          else {
            // Otherwise, log the inserted data
            console.log(inserted);
          }
        });
      }
    });
  });
  
}

module.exports = scrape
