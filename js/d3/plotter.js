/**
 * Created by alessandro on 5/18/15.
 */

var Plotter = function(plot_group, line_data, i, x_scale) {
    var self = {};
    var line_graph = undefined;
    var dot_group = undefined;
    var plot_color = color(i);
    /*
    comes as parameter
    self.x_scale = d3.time.scale()
        .domain([new Date(line_data[0].date), d3.time.hour.offset(new Date(line_data[line_data.length - 1].date), 1)])
        .rangeRound([0, plot_width]);*/

    self.lineFunction = d3.svg.line()
        .x(function(d) { return x_scale(new Date(d.date)); })
        .y(function(d) { return d.y; })
        .interpolate("cardinal");

    self.plot_graph = function(){
        line_graph = plot_group.append("path")
            .attr("d", self.lineFunction(line_data))
            .attr("stroke", plot_color)
            .attr("stroke-width", 2)
            .attr("fill", "none");

        // If the function goes out of the g, translate its coordination to fit into the g
        // Adjusting position to the vertical axis
        line_graph.attr("transform","translate(" + style.graph.left_margin + "," + self.top_space() + ")");

        var axisScale = d3.scale.linear()
            .domain([self.minimum(),self.maximum()])
            .range([0,self.height()]);

        var xAxis = d3.svg.axis()
            .orient("left")
            .scale(axisScale).ticks(4).tickSize(5);

        plot_group.append("g").attr("class", "axis").attr("transform", "translate(" + style.graph.left_margin + ",0)").call(xAxis);

        self.draw_dots();
    };

    self.draw_dots = function(){
        dot_group = plot_group.append("g")
            .attr("class", "dot_group")
            .attr("transform", "translate( " + style.graph.left_margin + "," + self.top_space() + " )");

        dot_group = dot_group
            .selectAll(".dot")
            .data(line_data)
            .enter()
            .append("circle")
            .attr("class", "dot")
            .attr("id", function(d){
                var id = "dot_"+ i +"_"+ formatter(new Date(d.date));
                return id;
            })
            .attr("r",style.graph.dot_r_start)
            .attr("fill", plot_color)
            .attr("cx", function(d) { return x_scale(new Date(d.date)); })
            .attr("cy", function(d) { return d.y; })
            .on("click", function(d){
                var date_for_id = formatter(new Date(d.date));
                var id = "detail_" + date_for_id;
                var x = x_scale(new Date(d.date));
                var dot_id = "dot_"+ i +"_" + date_for_id;
                var extra = {"color": plot_color, "x_dot": x, "y_dot": d.y, "dot_id": dot_id};
                notification_center.dispatch("show_detail_"+id, extra);
            })
            .transition()
            .attr("r",style.graph.dot_r_end);

    };

    self.minimum = function(){
        var minimum_y = line_data[0].y;

        line_data.forEach(function(d){
            if(d.y < minimum_y)
                minimum_y = d.y;
        });

        return minimum_y;
    };

    self.maximum = function(){
        var maximum_y = 0;

        line_data.forEach(function(d){
            if(d.y > maximum_y)
                maximum_y = d.y;
        });

        return maximum_y;
    };

    self.height = function(){

            return self.maximum()-self.minimum();

    };

    self.top_space = function(){

        if( self.minimum() < 0)
            return -self.minimum();
        else
            return 0;
    };

    // Constructor
    self.init = function() {
        self.plot_graph();

        //window.addEventListener("resize", self.resizeWindow);
    }();

    // Destructor
    self.deinit = function() {
        // Place here the code for dealloc eventual objects
    };

    return self;
};

