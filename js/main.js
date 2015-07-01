/**
 * Created by alessandro on 6/9/15.
 */
var color = d3.scale.category20();

$(function() {
    start();
});

var start = function () {

    var param = getUrlVars()["ids"];

    var params = parseParams(param);

    console.log('params: ' + params);
    params.forEach(function (clinicalEventIndex, i) {
        if(clinicalEventIndex<clinicalEvents.length)
            renderReport(clinicalEvents[clinicalEventIndex], i);
    });


    $('.header').on('click', function(){window.history.back()});
};

var renderReport = function (clinicalEvent, i) {
    var reportDiv = $(document.createElement('div')).attr("class", "report");

    // Report Header
    var reportHeaderDiv = $(document.createElement('div')).attr("class", "report-header");
    var titleDiv = $(document.createElement('div'))
        .attr("class", "title")
        .html(clinicalEvent.name + ' (' + clinicalEvent.probability + '%)')
        .on('click', function (id) {
            return function(){
                openReport(id)
            }
        }('ce'+i));
    reportHeaderDiv.append(titleDiv);
    clinicalEvent.causes.forEach(function (c) {
        var causeDiv = $(document.createElement('div'))
            .attr("class", "causes " + 'ce'+i)
            .html('- ')
            //.attr('class', 'ce'+i)
            .css('display', 'none');
        var span = $(document.createElement('span'))
            .css("color", color(c.class))
            .html(c.name);
        causeDiv.append(span);
        reportHeaderDiv.append(causeDiv);
    });

    // Report center div
    var reportCenterDiv = $(document.createElement('div'))
        .attr("class", "report-center " + 'ce'+i)
        //.attr('class', 'ce'+i)
        .css('display', 'none');

    /*
    var table = $(document.createElement('table'));
    var tds = [];
    clinicalEvent.values.forEach(function (v) {
        var column = [];
        var labelTd = $(document.createElement('td'))
            .html(v.label);
        column.push(labelTd);
        v.values.forEach(function (value) {
            var td = $(document.createElement('td'));
            var span = $(document.createElement('span'))
                .css("color", color(v.class))
                .html(value);
            td.append(span);
            column.push(td)
        });
        tds.push(column);
    });

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
    */

    var table = $(document.createElement('table'));
    var trs = [];
    // Empty labelTd to make space to the dates
    var labelTd = $(document.createElement('td'))
        .html('');
    var row = $(document.createElement('tr')).append(labelTd);
    trs.push(row);
    table.append(row);
    // Create tr and td for the labels
    labels.forEach(function(rowLabel){
        var labelTd = $(document.createElement('td'))
            .html(rowLabel);
        var row = $(document.createElement('tr')).append(labelTd);
        trs.push(row);
        table.append(row)
    });

    clinicalEvent.values.forEach(function(value){
        var dataIndex = value.reportIndex;
        var tableData = samples[dataIndex];
        var datelTd = $(document.createElement('td'))
            .html(tableData.start + ' - ' + tableData.end);
        trs[0].append(datelTd);
        tableData.values.forEach(function (v, i) {
            var labelTd = $(document.createElement('td'));
            if(value.classes[i] != null) {
                var span = $(document.createElement('span'))
                    .css("color", color(value.classes[i]))
                    .html(v);
                labelTd.append(span)
            }
            else{
                labelTd.html(v);

            }
            trs[i+1].append(labelTd)
        });
    });

    reportCenterDiv.append(table);

    // Report borrom div
    var reportBottomDiv = $(document.createElement('div'))
        .attr("class", "report-bottom " + 'ce'+i)
        //.attr('class', 'ce'+i)
        .css('display', 'none');

    var messageDiv = $(document.createElement('div')).attr("class", "message");

    /* Previous implementation
    clinicalEvent.text.forEach(function (t) {
        if(t.class == null)
            messageDiv.append(t.string);
        else{
            var span = $(document.createElement('span'))
                .css("color", color(t.class))
                .html(t.string);
            messageDiv.append(span);
        }
    }); */

    clinicalEvent.texts.forEach(function (t) {
        var text = samples[t.reportIndex].message;
        messageDiv.append(samples[t.reportIndex].start + ' - ' + samples[t.reportIndex].end + '<br>');
        var i = 0;
        t.classes.forEach(function (c) {
            for(; i < c.startCharacter; i++)
                messageDiv.append(text[i])
            var span = $(document.createElement('span'))
                .css("color", color(c.class));
            for(j=c.startCharacter; j <= c.endCharacter; j++)
                span.append(text[j])
            messageDiv.append(span);
            i = j
        });
        for(; i < text.length; i++)
            messageDiv.append(text[i])
        messageDiv.append('<br><br>');
    });

    reportBottomDiv.append(messageDiv);

    reportDiv.append(reportHeaderDiv);
    reportDiv.append(reportCenterDiv);
    reportDiv.append(reportBottomDiv);

    $('body').append(reportDiv);
};

var openReport = function(id){
    if($('.'+id).css('display') == 'block')
    {
        $('.'+id).hide();
        return
    }
    $('.causes').hide();
    $('.report-center').hide();
    $('.report-bottom').hide();
    $('.'+id).fadeIn();
};

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var parseParams = function(param){
    if(param == undefined)
        return [];
    var params = param.split(',');
    var intParams = [];
    params.forEach(function (s) {
        intParams.push(parseInt(s))
    });
    return intParams;
};