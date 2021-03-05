// from data.js
var tableData = data;

// YOUR CODE HERE!

// Variables to gather data
var tbody = d3.select("#ufo-table > tbody");
var filter_btn = d3.select("#filter-btn");
var reset_btn = d3.select("#reset-btn")
var input_date = d3.select("#datetime");
var input_country = d3.select("#country");
var input_state = d3.select("#state");
var input_city = d3.select("#city");
var input_shape = d3.select("#shape");

showData(tableData);

// Button find and reset
filter_btn.on("click", handelFind);
reset_btn.on("click", handelReset);

//Grab data

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

function handelFind(){

    filtered = tableData.filter(filterDate).filter(filterCountry).filter(filterState).filter(filterCity).filter(filterShape);
    tbody.text("")
    showData(filtered);
}

// Reset table to all data
function handelReset(){
    tbody.text("");
    d3.selectAll(".form-control").property("value", "");
    showData(tableData);
}

// Filter on Date
function filterDate(table){
    text = input_date.property("value");
    if ( text == "") return table;  
    else return table.datetime == text;
}

// FIlter on COuntry
function filterCountry(table){
    text = input_country.property("value");
    if ( text == "") return table; 
    else return table.country == text;
}

//FIlter on State
function filterState(table){
    text = input_state.property("value");
    if ( text == "") return table; 
    else return table.state == text;
}

//Filter on City
function filterCity(table){
    text = input_city.property("value");
    if ( text == "") return table; 
    else return table.city == text;
}

//Filter on Shape
function filterShape(table){
    text = input_shape.property("value");
    if ( text == "") return table; 
    else return table.shape == text;
}
