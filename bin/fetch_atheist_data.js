#! /app/bin/node
var http = require('https');
var fs = require('fs');

var file = fs.createWriteStream("./public/data/atheist_data.csv")
var spread = 'https://docs.google.com/spreadsheets/d/1KP7ULBAyavnohP4h8n2J2yaXNpIRnyIXdjJj_AwtwK0/export?gid=1&format=csv'
var request = http.get(spread, function(response) {
    response.pipe(file);
});
exit();