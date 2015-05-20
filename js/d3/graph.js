/**
 * Created by alessandro on 5/17/15.
 */
    // TODO funzione globale che seleziona i dati usando underscore per prendere i dati dalla detail container come i vari valori del record

var svg = undefined;
var graph_groups = undefined;
var graphs = [];
var time_to_x_coo = undefined;
var details_group = undefined;
var detail_containers = [];
var graphs_data =
{"graphs":[
    {"plot_name":"Bpm",
        "line_data": [
            { "y": 0, "date":"May 18 2015 10:16:51 GMT-0500 (CDT)"},
            { "y": 40, "date":"May 18 2015 11:16:51 GMT-0500 (CDT)"},
            { "y": 10, "date":"May 18 2015 12:16:51 GMT-0500 (CDT)"},
            { "y": 60, "date":"May 18 2015 13:16:51 GMT-0500 (CDT)"},
            { "y": 50, "date":"May 18 2015 14:16:51 GMT-0500 (CDT)"},
            { "y": 5, "date":"May 18 2015 15:36:51 GMT-0500 (CDT)"},
            { "y": 5, "date":"May 18 2015 17:16:51 GMT-0500 (CDT)"},
            { "y": 5, "date":"May 18 2015 19:16:51 GMT-0500 (CDT)"},
            { "y": 50, "date":"May 18 2015 20:16:51 GMT-0500 (CDT)"},
            { "y": 5, "date":"May 18 2015 22:16:51 GMT-0500 (CDT)"},
            { "y": 20, "date":"May 18 2015 23:16:51 GMT-0500 (CDT)"}
        ]
    },
    {"plot_name":"Temp",
        "line_data": [
            { "y": -50, "date":"May 18 2015 10:16:51 GMT-0500 (CDT)"},
            { "y": 0, "date":"May 18 2015 11:16:51 GMT-0500 (CDT)"},
            { "y": 10, "date":"May 18 2015 12:16:51 GMT-0500 (CDT)"},
            { "y": -40, "date":"May 18 2015 13:16:51 GMT-0500 (CDT)"},
            { "y": 20, "date":"May 18 2015 14:16:51 GMT-0500 (CDT)"},
            { "y": 1, "date":"May 18 2015 15:36:51 GMT-0500 (CDT)"},
            { "y": -20, "date":"May 18 2015 17:16:51 GMT-0500 (CDT)"},
            { "y": -25, "date":"May 18 2015 19:16:51 GMT-0500 (CDT)"},
            { "y": 0, "date":"May 18 2015 20:16:51 GMT-0500 (CDT)"},
            { "y": 5, "date":"May 18 2015 22:16:51 GMT-0500 (CDT)"},
            { "y": -20, "date":"May 18 2015 23:16:51 GMT-0500 (CDT)"}
        ]
    }
    ,
    {"plot_name":"Temp2",
        "line_data": [
            { "y": 60, "date":"May 18 2015 10:16:51 GMT-0500 (CDT)"},
            { "y": 0, "date":"May 18 2015 11:16:51 GMT-0500 (CDT)"},
            { "y": 65, "date":"May 18 2015 12:16:51 GMT-0500 (CDT)"},
            { "y": 0, "date":"May 18 2015 13:16:51 GMT-0500 (CDT)"},
            { "y": 40, "date":"May 18 2015 14:16:51 GMT-0500 (CDT)"},
            { "y": 10, "date":"May 18 2015 15:36:51 GMT-0500 (CDT)"},
            { "y": 40, "date":"May 18 2015 17:16:51 GMT-0500 (CDT)"},
            { "y": 30, "date":"May 18 2015 19:16:51 GMT-0500 (CDT)"},
            { "y": 0, "date":"May 18 2015 20:16:51 GMT-0500 (CDT)"},
            { "y": 50, "date":"May 18 2015 22:16:51 GMT-0500 (CDT)"},
            { "y": 10, "date":"May 18 2015 23:16:51 GMT-0500 (CDT)"}
        ]
    }
],
    "messages":[
        { "nurse": "Mary", "date":"May 18 2015 10:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Mary", "date":"May 18 2015 11:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Rose", "date":"May 18 2015 12:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Rose", "date":"May 18 2015 13:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Hayley", "date":"May 18 2015 14:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Hayley", "date":"May 18 2015 15:36:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Hayley", "date":"May 18 2015 17:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Hayley", "date":"May 18 2015 19:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Hayley", "date":"May 18 2015 20:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Mark", "date":"May 18 2015 22:16:51 GMT-0500 (CDT)", "message":"text text text text text"},
        { "nurse": "Mark", "date":"May 18 2015 23:16:51 GMT-0500 (CDT)", "message":"text text text text text"}
    ]
};

var date_range = function(mode){
    var dates = [];
    var gs = graphs_data.graphs;
    gs.forEach(function(d){
            d.line_data.forEach(function(g){
                dates.push(new Date(g.date));
            });
        }
    );

    if(mode == "max")
        var date=new Date(Math.max.apply(null,dates));
    if(mode == "min")
        var date=new Date(Math.min.apply(null,dates));
    console.log(date);
    return date;
};

var render = function(){

    svg = d3.select("#container");
    svg.attr("height", window.innerHeight);
    svg.attr("width", window.innerWidth);

    render_graphs();

};

var calculate_height = function(){
    var h = 0;
    graphs.forEach(function(d){h += d.height() + style.graph.top_margin });
    return h;
};

var render_graphs = function(){

    var current_graph;
    var current_group;

    time_to_x_coo = d3.time.scale()
        .domain([date_range("min"), date_range("max")])
        .rangeRound([0, window.innerWidth - style.graph.right_margin]);

    graph_groups = svg.selectAll(".graph")
        .data(graphs_data.graphs)
        .enter()
        .append("g")
        .attr("id", function(d){return "graph_"+ d.plot_name;})
        .each(function(d, i){
            current_group = d3.select("#graph_"+ d.plot_name);
            current_graph = Plotter(current_group, d.line_data, i, time_to_x_coo);
            if(graphs.length > 0)
            {
                var current_height = 0;
                graphs.forEach(function(d){current_height += d.height() + style.graph.top_margin });
                current_group.attr("transform","translate(0," + (style.graph.top_margin + current_height ) + ")");
                console.log("#graph_"+ d.plot_name + " " + graphs[graphs.length-1].height() + " current h " + current_graph.height() );
            }
            else
                current_group.attr("transform","translate(0," + (style.graph.top_margin ) + ")");

            graphs.push(current_graph);

        });

    var xAxis = d3.svg.axis()
        .scale(time_to_x_coo)
        .orient('bottom')
        .ticks(d3.time.hours, 1)
        .tickFormat(d3.time.format('%X'))
        .tickSize(5)
        .tickPadding(8);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform","translate(" + style.graph.left_margin + "," + (calculate_height() + style.graph.x_axis_top_margin) +")")
        .call(xAxis);

    draw_details();
};

var draw_details = function(){
    details_group = svg.append("g").attr("class", "details_group");
    details_group.attr("transform", "translate(" + style.graph.left_margin + "," + (style.details.top_margin + calculate_height() + 40) + ")");

    var detail_groups = details_group
        .selectAll("detail")
        .data(graphs_data.messages)
        .enter()
        .append("g")
        .attr("opacity", 0)
        .attr("class", "detail")
        .attr("id", function(d){
            var id = "detail_"+ formatter(new Date(d.date));
            notification_center.subscribe("show_detail_"+id, function(extra){show_detail(id, extra)});
                var current_group = d3.select(this);
                var current_detail_container = Detail_container(current_group, d);
                detail_containers.push({"id":id, "detail_container":current_detail_container});
            return id;
        })
        .attr("width", style.details.width)
        .attr("height", style.details.height)
            .attr("transform", function(d) {
                var x_coo = time_to_x_coo(new Date(d.date));
                if (x_coo - (style.details.width / 2) < 0)
                {
                    return "translate(" + 0 + ",0)";
                }
                if (x_coo + (style.details.width / 2) > window.innerWidth - style.graph.right_margin)
                    return "translate(" + (x_coo - style.details.width + (window.innerWidth - style.graph.right_margin - x_coo)) + ",0)";
                return "translate(" + (x_coo - (style.details.width / 2)) + ",0)";
            } );
};

var show_detail = function(id, extra){
    hide_details();
    var current_detail_container = undefined;

    detail_containers.forEach(function(d){
        if(d.id == id)
            current_detail_container = d.detail_container;
    });
    current_detail_container.draw_vertical_line( extra.x_dot, extra.y_dot, extra.color, extra.dot_id, id);
    current_detail_container.set_color(extra.color);
    details_group.select("#"+id)
        .transition()
        .attr("opacity", "1");
};

var hide_details = function(){
    detail_containers.forEach(function(d){
        d.detail_container.remove_elements();
    });

    details_group.selectAll(".detail")
        .attr("opacity", 0);
};
