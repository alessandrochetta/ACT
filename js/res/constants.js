/**
 * Created by alessandro on 5/18/15.
 */
var style = {};

style.graph = {
    top_margin: 15,
    left_margin: 30,
    right_margin: 50,
    width: 800,
    x_axis_top_margin: 10,
    dot_r_start: 1,
    dot_r_end: 5
};

style.details = {
    top_margin: 20,
    width: 300,
    height: 200,
    nurse_name_x: 5,
    nurse_name_y: 15,
    nurse_name_color: "white",
    date_text_x: 5,
    date_text_y: 15,
    date_text_color: "white",
    message_text_x: 5,
    message_text_y: 50,
    message_text_color: "white"
};

var formatter = d3.time.format("%b_%e_%Y_%H_%M_%S");

var color = d3.scale.category20();
