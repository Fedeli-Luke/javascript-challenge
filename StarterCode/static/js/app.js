// from data.js
var tableData = data;

// YOUR CODE HERE!

// Gather data
var tbody = d3.select("#ufo-table > tbody");
var filter_btn = d3.select("#filter-btn");
var reset_btn = d3.select("#reset-btn")
var input_date = d3.select("#datetime");
var input_country = d3.select("#country");
var input_state = d3.select("#state");
var input_city = d3.select("#city");
var input_shape = d3.select("#shape");

showData(tableData);

// Button click and reset
filter_btn.on("click", handelFind);
reset_btn.on("click", handelReset);

// Dropdown selections

// Date
dates = {}
tableData.forEach(datar => {
    var date = datar.datetime;
    if (date in dates) dates[date] += 1;
    else dates[date] = 1;
})

// Country
countries = {}
tableData.forEach(datar => {
    var country = datar.country;
    if (country in countries) countries[country] += 1;
    else countries[country] = 1;
})

// State
states = {}
tableData.forEach(datar => {
    var state = datar.state;
    if (state in states) states[state] += 1;
    else states[state] = 1;
})

// City
cities = {}
tableData.forEach(datar => {
    var city = datar.city;
    if (city in cities) cities[city] += 1;
    else cities[city] = 1;
})


// Add list of items to table
function showData(dataList){
    dataList.forEach((datar) =>{
        var row = tbody.append("tr");
        Object.entries(datar).forEach(([key, val]) => {
            row.append("td").text(val);
        })
    })
}

