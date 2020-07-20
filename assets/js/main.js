const url = "assets/js/roster.json"

$(document).ready(function() {
    $.getJSON(url, function(data) {
        var member_roster = "";
        for (i=0; i <= 9; i++) {
            
            member_roster += '<tr>';
            member_roster += '<td>'+data[i].name+'</td>';
            member_roster += '<td>'+data[i].level+'</td>';
            member_roster += '<td>'+data[i].role+'</td>';
            member_roster += '<td>'+data[i].rank+'</td>';
            member_roster += '</tr>';
        };
        $('#data').append(member_roster);
    });
        
})

function writeToDocument(url) {
    
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(url, function(data){

        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous)
        }
        var tableRows = [];
        data = data.results;
        var tableHeaders =  getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];
            console.log(item);
            
            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0,15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });
        
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g, "");
    });
}