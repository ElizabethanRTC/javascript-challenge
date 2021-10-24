// from data.js
function render(filtervalue)
{
    var tableData = data;
    var tablerows = document.getElementById("ufo-rows");
    tablerows.innerHTML = ""
    // for loop
    for(i =0; i< tableData.length; i++){
        if(filtervalue != null && filtervalue != tableData[i].datetime) 
            continue;
            
        var tr=document.createElement("tr");
        var date = document.createElement("td")
        date.innerHTML = tableData[i].datetime;
        tr.appendChild(date);
        
        var city = document.createElement("td")
        city.innerHTML = tableData[i].city;
        tr.appendChild(city);
        
        var state = document.createElement("td")
        state.innerHTML = tableData[i].state;
        tr.appendChild(state);

        var country = document.createElement("td")
        country.innerHTML = tableData[i].country;
        tr.appendChild(country);

        var shape = document.createElement("td")
        shape.innerHTML = tableData[i].shape;
        tr.appendChild(shape);

        var durationMinutes = document.createElement("td")
        durationMinutes.innerHTML = tableData[i].durationMinutes;
        tr.appendChild(durationMinutes);

        var comments = document.createElement("td")
        comments.innerHTML = tableData[i].comments;
        tr.appendChild(comments);
        
        tablerows.appendChild(tr)
    }
}
function filterDate(){
    var datetime = document.getElementById("filter");
    if(datetime.value.length < 8)
        return;
        
    render(datetime.value);
}

function filterMultiple() {
    var dateFilter = document.getElementById("filter").value;
    // var stateFilter = document.getElementById("stateFilter").value;
    //var xFilter = doc.GEBI("shaha").valeu;

    var filteredResults = tableData;
    if(dateFilter !== '') {
        filteredResults = filteredResults.filter(
            function(ufo) {
                return ufo.date === dateFilter;
            }
        );
    }

    // if(stateFilter !== '') {
    //     filteredResults = filteredResults.filter(
    //         function(ufo) {
    //             return ufo.state === stateFilter;
    //         }
    //     );  
    // }

    return filteredResults;
}

render();

