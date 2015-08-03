var svg = undefined;
var graph_width = undefined;
var data = undefined;
var i = 0;
var data_array = [data1, data2, data3];
var mode = "";

$(function() {
    if(mode == "random")
        setInterval(function(){ random_data() }, 3000);
    else{
        data = data_array[i];
        start();
    }
    $('.header').on('click', function(){
        window.location.href = '../../';
    });
});

var random_data = function () {

    data = data_array[i];
    if(i==2)
            i=0;
    else
        i+=1;
    if(svg != undefined)
        svg.remove();
    start();
};

var calculate_ratio = function () {
    var width = window.innerWidth*style.graph.width;
    var height = window.innerHeight/2;

    style.graph.bar_width = width/data.length*0.8;
    style.graph.bar_right_margin = width/data.length*0.2;
    style.graph.bar_height = height;

    graph_width = width;
};

var start = function () {
    calculate_ratio();

    svg = d3.select('body')
        .append('svg');

    svg
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight);

    plot_chart();
    draw_line();
};

var plot_chart = function(){

    //var start_x_position = window.innerWidth/2 - (data.length*(style.graph.bar_right_margin+style.graph.bar_width)/2);
    var start_x_position = (window.innerWidth - graph_width)/2;
    // Because of the rotation of 180 degrees clockwise of the rectangles
    start_x_position += style.graph.bar_width;
    // Because of the last margin added to the right
    start_x_position += style.graph.bar_right_margin;


    data.forEach(function (d, i) {
        var current_group = svg.append('g')
            .attr("transform", "translate(" +( start_x_position + style.graph.bar_right_margin*i + style.graph.bar_width*i)+ "," + ( window.innerHeight/2 + window.innerHeight * style.graph.margin_top) + ")")
            .on('click', function(diseases){
                return function(){
                    window.location.href = '../ML-report/index.html?ids=' + diseases.toString();
                }
            }(d.clinical_events));
        new Bar(d, current_group);
    });
};

var draw_line = function () {
    var end_x = window.innerWidth*style.graph.line_width + (window.innerWidth - window.innerWidth*style.graph.line_width)/2;
    var start_x = (window.innerWidth - window.innerWidth*style.graph.line_width)/2;
    var y = style.graph.margin_top*window.innerHeight + style.graph.bar_height/2;

    var line_data = [{'x':start_x, 'y':y}, {'x':end_x, 'y':y}];
    var line_function = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .interpolate("linear");

  svg.append('path').attr('d', line_function(line_data))
      .attr('stroke', '#7f8c8d')
      .attr('fill', 'none')
      .attr('stroke-dasharray','5, 5');
    svg.append('text')
        .attr('x', end_x - style.graph.high_low_risk_labels_margin_x)
        .attr('y', y - style.graph.high_low_risk_labels_margin_y)
        .attr('text-anchor', 'end')
        .text('high risk');
    var low_risk_label = svg.append('text')
        .attr('x', end_x - style.graph.high_low_risk_labels_margin_x)
        .attr('text-anchor', 'end')
        .text('low risk');

    low_risk_label.attr('y', y + style.graph.high_low_risk_labels_margin_y + low_risk_label.node().getBBox().height/2);
};