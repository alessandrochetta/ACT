/**
 * Created by alessandro on 6/9/15.
 */
var color = d3.scale.category20();

$(function() {
    start();
});

var start = function () {
    var reportDiv = $(document.createElement('div')).attr("class", "report");

    // Report Header
    var reportHeaderDiv = $(document.createElement('div')).attr("class", "report-header");
    var titleDiv = $(document.createElement('div'))
        .attr("class", "title")
        .html(data.name + ' (' + data.probability + '%)');
    reportHeaderDiv.append(titleDiv);
    data.causes.forEach(function (c) {
        var causeDiv = $(document.createElement('div'))
            .attr("class", "causes")
            .html('- ');
        var span = $(document.createElement('span'))
            .css("color", color(c.class))
            .html(c.name);
        causeDiv.append(span);
        reportHeaderDiv.append(causeDiv);
    });

    // Report center div
    var reportCenterDiv = $(document.createElement('div')).attr("class", "report-center");
    var table = $(document.createElement('table'));
    var tds = [];
    data.values.forEach(function (v) {
        var column = [];
        var labelTd = $(document.createElement('td'))
            .html(v.label);
        column.push(labelTd);
        v.values.forEach(function (value) {
            var td = $(document.createElement('td'));
            var span = $(document.createElement('span'))
                .css("color", color(v.class))
                .html(value);
            td.append(span)
            column.push(td)
        });
        tds.push(column);
    });

    console.log(tds);

    // Create rows
    var rows = [];
    tds[0].forEach(function () {
        var tr = $(document.createElement('tr'));
        rows.push(tr)
    });

    tds.forEach(function (column) {
        column.forEach(function (td, i) {
            rows[i].append(td)
        });
    });

    rows.forEach(function (tr) {
        table.append(tr);
    });

    reportCenterDiv.append(table);

    // Report borrom div
    var reportBottomDiv = $(document.createElement('div')).attr("class", "report-bottom");

    var messageDiv = $(document.createElement('div')).attr("class", "message");

    data.text.forEach(function (t) {
       if(t.class == null)
        messageDiv.append(t.string);
       else{
           var span = $(document.createElement('span'))
               .css("color", color(t.class))
               .html(t.string);
           messageDiv.append(span);
       }
    });

    reportBottomDiv.append(messageDiv);

    reportDiv.append(reportHeaderDiv);
    reportDiv.append(reportCenterDiv);
    reportDiv.append(reportBottomDiv);

    $('body').append(reportDiv);
};