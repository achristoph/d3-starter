// // var d3 = require('d3');
// var w = 100;
// var h = 100;
// var padding = 2;
// var dataset = [5, 10, 15, 20, 25];
// var svg = d3.select("body").append("svg")
//     .attr("width", w).attr("height", h)

// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", (d, i) => { return i * 21; })
//     .attr("y", 0)
//     .attr("width", 20)
//     .attr("height", 100);

var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello Worlda!!')
});
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});