/**
 * Created by alessandro on 5/19/15.
 */
var Detail_container = function(g, message_data){
    var self = [];
    var background_rect = undefined;
    var line = undefined;
    var nurse_name_text = undefined;
    var date_text = undefined;
    var message_text = undefined;

    // Constructor
    self.init = function() {

    }();

    self.set_color = function(color){
        background_rect = g.append("rect")
            .attr("width", style.details.width)
            .attr("height", style.details.height)
            .attr("fill", color);

        nurse_name_text = g.append("text")
            .text(message_data.nurse)
            .attr("fill", style.details.nurse_name_color)
            .attr("x", style.details.nurse_name_x)
            .attr("y", style.details.nurse_name_y);

        date_text = g.append("text")
            .text(function(d){
                var formatter = d3.time.format("%b %e %Y - %H:%M:%S");
                return formatter(new Date(d.date));
            })
            .attr("text-anchor", "end")
            .attr("fill", style.details.date_text_color)
            .attr("x", style.details.width - style.details.date_text_x)
            .attr("y", style.details.date_text_y);

        message_text = g.append("text")
            .text(message_data.message)
            .attr("fill", style.details.message_text_color)
            .attr("x", style.details.message_text_x)
            .attr("y", style.details.message_text_y);
    };

    self.draw_vertical_line = function(x, y, color, dot_id, this_id){
        var dot_position = $("#"+dot_id).offset();

        var this_position = $("#"+this_id).offset();
        var this_x = this_position.left;
        var line_x = dot_position.left - this_x + style.graph.dot_r_end;
        var lineData = [ { "x": line_x,   "y": -(this_position.top-dot_position.top)}, { "x": line_x, "y": style.details.height}];
        var lineFunction = d3.svg.line()
                                 .x(function(d) { return d.x; })
                                 .y(function(d) { return d.y; })
                                 .interpolate("cardinal");

        line = g.append("path")
            .attr("d", lineFunction(lineData))
            .attr("stroke", color)
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("class", "no_interaction");
    };

    self.remove_elements = function(){
        if(line != undefined)
            line.remove();
        if(background_rect != undefined)
            background_rect.remove();
        if(nurse_name_text != undefined)
            nurse_name_text.remove();
        if(message_text != undefined)
            message_text.remove();
        if(date_text != undefined)
            date_text.remove();
    };

    // Destructor
    self.deinit = function() {
        // Place here the code for dealloc eventual objects

    };



    return self;
}