/**
 * Created by alessandro on 6/4/15.
 */
var style = {};

style.graph = {
    bar_width: 40,
    bar_right_margin: 20,
    bar_height: 100,
    /* percentage values*/
    margin_top: 0.2,
    width: 0.6,
    line_width: 0.8,
    label_bottom_margin: 5,
    high_low_risk_labels_margin_y: 10,
    high_low_risk_labels_margin_x: 10

};

var color = d3.scale.linear()
    .domain([0, 100])
    .range(["#27ae60", "#d35400", "#c0392b"]);