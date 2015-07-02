/**
 * Created by alessandro on 6/4/15.
 */

var Bar = function (data, group) {
    var self = {};
    var bar_height = 0;
    var label = undefined;
    var name = undefined;

    self.plot_bar = function () {
        var bar = group.append('rect')
            .attr('class', 'bar')
            .attr('width', style.graph.bar_width)
            .attr("height", bar_height)
            .attr('transform', 'rotate(180)')
            .attr('fill', color(data.value));

        bar_height = style.graph.bar_height*data.value/100;

        self.add_label();
        self.add_bar_name();

        bar.transition()
            .attr('height', bar_height);
        label.transition()
            .attr('y', -bar_height-style.graph.label_bottom_margin);
        name.transition()
            .attr('opacity', 1)

    };

    self.add_label = function () {
        label = group.append('text')
            .text(data.value+'%')
            .attr('x', -style.graph.bar_width/2)
            .attr('text-anchor', 'middle')
            .attr('y', 0);
    };

    self.add_bar_name = function () {
        name = group.append('text')
            .text(data.bar_name)
            .attr('x', -style.graph.bar_width/2)
            .attr('text-anchor', 'start')
            .attr('y', 0)
            .attr('opacity',0)
            .attr('transform', 'rotate(-45)');

        name.attr('x', -style.graph.bar_width/2 -name.node().getComputedTextLength()*Math.cos(0.25*Math.PI));
    };

    // Constructor
    self.init = function(d, g) {
        self.plot_bar();
    }();

    // Destructor
    self.deinit = function() {
    };

    return self;
}