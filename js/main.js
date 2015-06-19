/**
 * Created by alessandro on 5/25/15.
 */


/**
 *
 * TODO aggiungere righe, aggiungere editabilità dei vecchi records
 */

var samples =[
        {
            "start":"2:01am",
            "end":"2:10am",
            "values":["85/55", null, null, "95.2"],
            "message": "General: She is a well-nourished, well-developed, elderly white female in no acute distress. She appears somewhat sad and tearful."
        },
        {
            "start":"2:11am",
            "end":"2:20am",
            "values":["87/65", "66", "91", "100.2"],
            "message": ""
        },
        {
            "start":"2:31am",
            "end":"2:37am",
            "values":["75/57", "60", "90", "85.2"],
            "message": ""
        },
        {
            "start":"3:01am",
            "end":"3:10am",
            "values":["88/59", "55", "87", "99.2"],
            "message": ""
        },
        {
            "start":"4:01am",
            "end":"4:10am",
            "values":["95/65", "22", null, "90.2"],
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "start":"5:01am",
            "end":"5:10am",
            "values":["85/55", null, "90", "95.2"],
            "message": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        },
        {
            "start":"6:01am",
            "end":"6:10am",
            "values":["75/55", "34", "99", "55.72"],
            "message": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
            "start":"7:01am",
            "end":"7:10am",
            "values":["85/55", null, null, null],
            "message": ""
        },
        {
            "start":"8:01am",
            "end":"8:10am",
            "values":[null, null, null, "95.2"],
            "message": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. "
        },
        {
            "start":"9:01am",
            "end":"9:10am",
            "values":["85/55", "44", null, "88"],
            "message": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
        },
        {
            "start":"10:01am",
            "end":"10:10am",
            "values":["85/55", null, "98", "90"],
            "message": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        },
        {
            "start":"11:01am",
            "end":"11:10am",
            "values":["86/50", "39", null, "95.2"],
            "message": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
        },
        {
            "start":"12:01am",
            "end":"12:10am",
            "values":["75/45", null, "78", "105.2"],
            "message": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
        }

];

var labels = [
    "BP",
    "Pulse",
    "Sats",
    "Temp"
];


var previous_sample_hidden = false;
var previous_sample_hidden_id = 0;
var last_sample_id = 0;
var number_of_samples = 0;

var main = function(){

    $(".ui-block-a").css("height", window.innerHeight);
    $(".frame").css("height", window.innerHeight);
    $(".frame").css("width", window.innerWidth - window.innerWidth*0.2);


    generate_left_bar();

    /**
     * Append all the samples in the db
     */
    samples.forEach(function(s, i){
        append_new_sample(s.start, s.end, s.values, s.message, i);
        /*var sample_div = $(document.createElement('div'));
        sample_div.addClass("sample");

        var shift_time_div = $(document.createElement('div'));
        shift_time_div.addClass("shift-time").html(s.start + " " + s.end);

        var hr = $(document.createElement('hr'));
        hr.addClass("horizontal-bar");

        sample_div.append(shift_time_div);
        sample_div.append(hr);

        s.values.forEach(function(v){
           var sample_label_div = $(document.createElement('div'))
               .addClass('sample-label')
               .html(v);
            sample_div.append(sample_label_div);
        });


        var hr = $(document.createElement('hr'));
        hr.addClass("horizontal-bar");

        sample_div.append(hr);

        var textarea = $(document.createElement('textarea'))
            .addClass('nurse-text')
            .html(s.message);

        sample_div.append(textarea);

        var collapsed_samples_div_right = $(document.createElement('div')).addClass('collapsed_samples_bar_'+previous_sample_hidden_id.toString());
        collapsed_samples_div_right.addClass('collapsed_samples_right');

        if(s.message == "")
        {

            sample_div.addClass( 'collapsed_samples_' + previous_sample_hidden_id.toString());
            sample_div.hide();
            if(!previous_sample_hidden){
                previous_sample_hidden = true;
                var collapsed_samples_div_left = $(document.createElement('div')).addClass('collapsed_samples_bar_'+previous_sample_hidden_id.toString());
                collapsed_samples_div_left.addClass('collapsed_samples_left');


                collapsed_samples_div_left.click((function(id){
                    return function() {
                        show_collapsed_samples(id);
                    };
                })(previous_sample_hidden_id.toString())
                );

                $(".frame").append(collapsed_samples_div_left)
            }
            $(".frame").append(sample_div)
        }
        else{
            if(previous_sample_hidden)
            {
                previous_sample_hidden = false;

                collapsed_samples_div_right.click((function(id){
                        return function() {
                            show_collapsed_samples(id);
                        };
                    })(previous_sample_hidden_id.toString())
                );

                $(".frame").append(collapsed_samples_div_right)
            }

            previous_sample_hidden_id = i;
            $(".frame").append(sample_div)
        }

        last_sample_id = i;*/
        number_of_samples = i;
    });

    /**
     * Append new sample form
     */
    append_new_sample_form();

};

var refresh = function(){
    previous_sample_hidden = false;
    previous_sample_hidden_id = 0;
    last_sample_id = 0;
    number_of_samples = 0;

    $(".frame").html("");
    $('#parameter-div').html("");
    generate_left_bar();
    samples.forEach(function(s, i){
        append_new_sample(s.start, s.end, s.values, s.message, i);
        number_of_samples = i;
    });
    append_new_sample_form();
};

var generate_left_bar = function(){

    var parameter_div = $('#parameter-div');

    var input = $(document.createElement('input'))
        .attr("class", "input-field-shift no-interaction")
        .attr("value", "")
        .attr("id","")
        .attr("name", "");
    parameter_div.append(input);


    labels.forEach(function (l) {
        var sample_label_div = $(document.createElement('div'))
            .addClass('sample-label');

        var input = $(document.createElement('input'))
            .attr("class", "input-field")
            .attr("value", l)
            .attr("id","label-"+l)
            .attr("name", "label-"+l);

        sample_label_div.append(input);
        parameter_div.append(sample_label_div);
    });

    var sample_label_div = $(document.createElement('div'))
        .addClass('sample-label');

    input = $(document.createElement('input'))
        .attr("class", "input-field")
        .attr("placeholder", "New Field")
        .attr("id","new-field")
        .attr("name", "new-field")
        .on("click", function(){ return show_add_button()});

    sample_label_div.append(input);
    parameter_div.append(sample_label_div);

    var button = $(document.createElement('input'))
        .attr("type", "button")
        .attr("value", "Add")
        .attr("class", "add-button")
        .attr("id", "add-button")
        .hide()
        .on("click", function(){return add_label()});

    parameter_div.append("<br>");
    parameter_div.append(button);


};

var show_collapsed_samples = function(collapsed_class){
    var display_mode = $( ".collapsed_samples_"+collapsed_class ).css("display");
    if(display_mode == "none")
        $( ".collapsed_samples_"+collapsed_class ).fadeIn();
    else
        $( ".collapsed_samples_"+collapsed_class ).fadeOut();
};



var append_new_sample = function(start, end, values, message, i){

    var sample_div = $(document.createElement('div'))
        .addClass("sample");

    /*var shift_time_div = $(document.createElement('div'));
    shift_time_div.addClass("shift-time").html(start + " " + end);*/

    var time_input_start = $(document.createElement('input'))
        .attr("class", "input-field-shift")
        .attr("id", "shift_time_start_edit-"+i)
        .attr("value" , start)
        .on("click", function(){
            return function(){
                show_edit_button(i);
            }
        }(i));

    var time_input_end = $(document.createElement('input'))
        .attr("class", "input-field-shift")
        .attr("id", "shift_time_end_edit-"+i)
        .attr("name", "shift_time_end")
        .attr("value" , end)
        .on("click", function(){
            return function(){
                show_edit_button(i);
            }
        }(i));

    var hr = $(document.createElement('hr'));
    hr.addClass("horizontal-bar");

    sample_div.append(time_input_start);
    sample_div.append(time_input_end);
    sample_div.append(hr);

    for(var j = 0; j < labels.length; j++){
        var v = "";
        if(j < values.length)
            v = values[j];

        var sample_label_div = $(document.createElement('div'))
            .addClass('sample-label');

        var input = $(document.createElement('input'))
            .attr("class", "input-field")
            .attr("value", v)
            .attr("id",labels[j]+'-'+i)
            .attr("name", v)
            .on("click", function(){
                return function(){
                    show_edit_button(i);
                }
            }(i));

        sample_label_div.append(input);
        sample_div.append(sample_label_div);
    }

    /*
    values.forEach(function(v){
        var sample_label_div = $(document.createElement('div'))
            .addClass('sample-label');

        var input = $(document.createElement('input'))
            .attr("class", "input-field")
            .attr("value", v)
            .attr("id",v)
            .attr("name", v)
            .on("click", function(){
                return function(){
                    show_edit_button(i);
                }
            }(i));

        sample_label_div.append(input);
        sample_div.append(sample_label_div);
    });
    */


    var hr = $(document.createElement('hr'));
    hr.addClass("horizontal-bar");

    sample_div.append(hr);

    var textarea = $(document.createElement('textarea'))
        .addClass('nurse-text-editable')
        .css("height", window.innerHeight*0.35)
        .html(message)
        .on("click", function(){
            return function(){
                show_edit_button(i);
            }
        }(i));

    sample_div.append(textarea);

    var button = $(document.createElement('input'))
        .attr("type", "submit")
        .attr("value", "Edit")
        .attr("class", "edit-button")
        .attr("id", "edit-button-" + i)
        .hide()
        .on("click", function(){
            return function(){
                edit_report(i);
            }
        }(i));

    sample_div.append("<br>");
    sample_div.append(button);

    var collapsed_samples_div_right = $(document.createElement('div')).addClass('collapsed_samples_bar_'+previous_sample_hidden_id.toString());
    collapsed_samples_div_right.addClass('collapsed_samples_right');

    if(message == "")
    {

        sample_div.addClass( 'collapsed_samples_' + previous_sample_hidden_id.toString());
        sample_div.hide();
        if(!previous_sample_hidden){
            previous_sample_hidden = true;
            var collapsed_samples_div_left = $(document.createElement('div')).addClass('collapsed_samples_bar_'+previous_sample_hidden_id.toString());
            collapsed_samples_div_left.addClass('collapsed_samples_left');


            collapsed_samples_div_left.click((function(id){
                    return function() {
                        show_collapsed_samples(id);
                    };
                })(previous_sample_hidden_id.toString())
            );

            $(".frame").append(collapsed_samples_div_left)
        }
        $(".frame").append(sample_div)
    }
    else{
        if(previous_sample_hidden)
        {
            previous_sample_hidden = false;

            collapsed_samples_div_right.click((function(id){
                    return function() {
                        show_collapsed_samples(id);
                    };
                })(previous_sample_hidden_id.toString())
            );

            $(".frame").append(collapsed_samples_div_right)
        }

        previous_sample_hidden_id = last_sample_id;
        $(".frame").append(sample_div)
    }
    last_sample_id += 1;

    scroll_right();
    disable_nurse_textarea();
};

var scroll_right = function () {
    /**
     * TODO find a better way to scroll all the way right
     */
    $(".frame").scrollLeft($(".frame").width() +70000);
};

var disable_nurse_textarea = function () {
    $(".nurse-text").off().on("keydown", function(event){
        event.preventDefault();
        return;
    });
};

var append_new_sample_form = function(){

    /*
     var sample_div = $(document.createElement('div'));
     sample_div.addClass("sample");


     var shift_time_div = $(document.createElement('div'));
     shift_time_div.addClass("shift-time");

     var time_input = $(document.createElement('input'))
     .attr("class", "input-field-shift")
     .attr("value", "Shift time");
     shift_time_div.append(time_input);

     sample_div.append(time_input);

     var hr = $(document.createElement('hr'));
     hr.addClass("horizontal-bar");


     sample_div.append(hr);

     ["BP", "Pulse", "Sats", "Temp"].forEach(function(value){
     var sample_label_div = $(document.createElement('div'))
     .addClass('sample-label');
     var input = $(document.createElement('input'))
     .attr("class", "input-field")
     .attr("value", value);
     sample_label_div.append(input);
     //sample_label_inputs.push(sample_label_div)
     sample_div.append(sample_label_div);
     });

     var hr = $(document.createElement('hr'));
     hr.addClass("horizontal-bar");

     sample_div.append(hr);

     var textarea = $(document.createElement('textarea'))
     .addClass('nurse-text-editable')
     .html("Notes");

     sample_div.append(textarea);

     $(".frame").append(sample_div);
     */


    var sample_div = $(document.createElement('div'))
        .addClass("sample")
        .attr("id","sample_form");

    var form = $(document.createElement('form'));


    var time_input_start = $(document.createElement('input'))
        .attr("class", "input-field-shift")
        .attr("placeholder", "start")
        .attr("id", "shift_time_start")
        .attr("name", "shift_time_start");

    var time_input_end = $(document.createElement('input'))
        .attr("class", "input-field-shift")
        .attr("id", "shift_time_end")
        .attr("name", "shift_time_end")
        .attr("placeholder", "end");

    form.append(time_input_start);
    form.append(time_input_end);

    var hr = $(document.createElement('hr'));
    hr.addClass("horizontal-bar");


    form.append(hr);

    labels.forEach(function(value){
        var sample_label_div = $(document.createElement('div'))
            .addClass('sample-label');
        var input = $(document.createElement('input'))
            .attr("class", "input-field")
            .attr("placeholder", value)
            .attr("id",value)
            .attr("name", value);

        sample_label_div.append(input);
        form.append(sample_label_div);
    });

    var hr = $(document.createElement('hr'));
    hr.addClass("horizontal-bar");

    form.append(hr);

    var textarea = $(document.createElement('textarea'))
        .addClass('nurse-text-editable')
        .attr("placeholder", "Notes")
        .attr("name", "message")
        .css("height", window.innerHeight*0.35)
        .attr("id", "message");

    form.append(textarea);

    var button = $(document.createElement('input'))
        .attr("type", "submit")
        .attr("value", "Save")
        .attr("class", "submit-button");

    form.append($(document.createElement('br')));
    form.append(button);

    /**
     * Form options
     */
    form.attr("onsubmit", "return add_sample()");

    sample_div.append(form);
    $(".frame").append(sample_div);

    scroll_right();
};

var add_sample = function () {
    var shift_time_start;
    var shift_time_end;
    var values = [];
    var message;

    shift_time_start = $("#shift_time_start").val();
    shift_time_end = $("#shift_time_end").val();

    labels.forEach(function (value) {
        values.push($("#" + value).val())
    });

    console.log(values);
    message  = $("#message").val();

    $("#sample_form").remove();
    number_of_samples += 1;
    append_new_sample(shift_time_start, shift_time_end, values, message, number_of_samples);
    append_new_sample_form();
    scroll_right();
    return false;
};

var show_edit_button = function(id){
    console.log(id);
    if($("#edit-button-"+id).css("display") == "none")
    {
        $(".edit-button").hide();
        $("#edit-button-"+id).fadeIn();
    }
};

var edit_report = function(id){
    $("#edit-button-"+id).hide();
};

var show_add_button = function(){
  var b = $("#add-button");
    if(b.css("display")=="none")
        b.fadeIn();
};

var add_label = function(){
    $("#add-button").hide();
    var new_label = $("#new-field").val();
    labels.push(new_label);
    refresh();
};