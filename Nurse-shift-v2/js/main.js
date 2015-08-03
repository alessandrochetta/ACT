/**
 * Created by alessandro on 5/25/15.
 */

var previous_sample_hidden = false;
var previous_sample_hidden_id = 0;
var last_sample_id = 0;
var number_of_samples = 0;
var paramsHL = undefined ;
var paramReportId = undefined;
var paramClinicalEventIndex = undefined;
var clinicalEventRecognizedRelatedToTheSample = [];
var color = d3.scale.category20();
var showClinicalEvent = true;

var main = function(){

    var paramHL = getUrlVars()["highlight"];

    paramsHL = parseParams(paramHL);

    paramReportId = getUrlVars()["reportId"];
    paramReportId = parseParams(paramReportId);

    paramClinicalEventIndex = getUrlVars()["clinicalEventIndex"];
    paramClinicalEventIndex = parseParams(paramClinicalEventIndex);

    top_spacing = $(".frame").position().top ;
    $(".ui-block-a").css("height", window.innerHeight - top_spacing);

    $(".frame").css("height", window.innerHeight - top_spacing);
    $(".frame").css("width", window.innerWidth - window.innerWidth*0.2);


    generate_left_bar();

    /**
     * Generate intake form
     */
    append_intake_form();

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

    if(paramReportId.length>0)
        $('.header').on('click', function(){
            var previousURL = document.referrer.split('&')[0];
            window.location.href = previousURL + '&reportId=' + paramReportId[0];
        });
    else
        $('.header').on('click', function(){
            window.history.back()
        });

    if(paramsHL.length>0 && showClinicalEvent)
    {
        hihghlightSamples(paramsHL);
        printClinicalEventInformation(paramClinicalEventIndex[0], paramsHL[0]);
    }
};

var refresh = function(){
    previous_sample_hidden = false;
    previous_sample_hidden_id = 0;
    last_sample_id = 0;
    number_of_samples = 0;
    clinicalEventRecognizedRelatedToTheSample = [];

    $(".frame").html("");
    $('#parameter-div').html("");
    generate_left_bar();

    /**
     * Generate intake form
     */
    append_intake_form();

    samples.forEach(function(s, i){
        append_new_sample(s.start, s.end, s.values, s.message, i);
        number_of_samples = i;
    });
    append_new_sample_form();
    if(paramsHL.length>0 && showClinicalEvent)
    {
        hihghlightSamples(paramsHL);
        printClinicalEventInformation(paramClinicalEventIndex[0], paramsHL[0]);
    }
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
            .attr("class", "input-field-label")
            .attr("value", l)
            .attr("id","label-"+l)
            .attr("name", "label-"+l)
            .attr("type", "text");

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
        .css("width","100%")
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
    parameter_div.append("<br>");

    if(paramsHL.length>0 && showClinicalEvent){
        var buttonHide = $(document.createElement('input'))
            .attr("type", "button")
            .attr("value", "Hide clinical event")
            .attr("class", "hide-information-button")
            .attr("id", "hide-information-button")
            .on("click", function(){return removeClinicalEventInformation(paramsHL[0])});

        parameter_div.append("<br>");
        parameter_div.append(buttonHide);
    }

};

var show_collapsed_samples = function(collapsed_class){
    var display_mode = $( ".collapsed_samples_"+collapsed_class ).css("display");
    if(display_mode == "none")
        $( ".collapsed_samples_"+collapsed_class ).fadeIn();
    else
        $( ".collapsed_samples_"+collapsed_class ).fadeOut();
};

var show_collapsed_samples_class_param = function(collapsed_class){
    var display_mode = $( "." + collapsed_class ).css("display");
    if(display_mode == "none")
        $( "."+collapsed_class ).show();
    else
        $( "."+collapsed_class ).hide();
};

var append_new_sample = function(start, end, values, message, i){
    var reportData = undefined;

    if(i == paramsHL[0])
    {
        reportData = findReportDataRelatedToSample(paramClinicalEventIndex[0], i);
    }

    var sample_div = $(document.createElement('div'))
        .addClass("sample")
        .attr("id", "sample-"+i);

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
            .attr("class", "input-field input-field-"+i)
            .attr("value", v)
            .attr("id",labels[j]+'-'+i)
            .attr("name", v)
            .on("click", function(){
                return function(){
                    show_edit_button(i);
                }
            }(i));

        if(reportData != undefined && showClinicalEvent){
            if(reportData.values != undefined){
                if(reportData.values.classes[j] != null && v != null && v!= "")
                {
                    var textColor = color(reportData.values.classes[j]);
                    console.log(v + " class:" + reportData.values.classes[j])
                    if(!classInClinicalEventRecognizedRelatedToTheSample(reportData.values.classes[j]))
                        clinicalEventRecognizedRelatedToTheSample.push(reportData.values.classes[j]);
                    input.css("color", textColor)
                }
            }

        }

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

    /*var textarea_div = $(document.createElement('textarea_div'))
        .addClass('nurse-text-editable')
        .attr("id", "message-"+i)
        .css("height", w.innerHeight*0.35windo)
        .html(message)
        .on("click", function(){
            return function(){
                show_edit_button(i);
            }
        }(i));*/

    var textarea_div = $(document.createElement('div'))
        .attr("contenteditable", "true")
        .addClass('nurse-text-editable')
        .attr("id", "message-"+i)
        .css("height", window.innerHeight*0.35)
        .on("click", function(){
            return function(){
                show_edit_button(i);
            }
        }(i));



    if(reportData != undefined && showClinicalEvent){
        var ind = 0;

        if( reportData.text != undefined) {
            reportData.text.classes.forEach(function (c) {
                for (; ind < c.startCharacter; ind++)
                    textarea_div.append(message[ind])
                var span = $(document.createElement('span'))
                    .css("color", color(c.class));
                if (!classInClinicalEventRecognizedRelatedToTheSample(c.class))
                    clinicalEventRecognizedRelatedToTheSample.push(c.class);
                for (var j = ind; j <= c.endCharacter; j++)
                    span.append(message[j])
                textarea_div.append(span);
                ind = j
            });
            for (; ind < message.length; ind++)
                textarea_div.append(message[ind])
        }else{
            textarea_div.html(message)
        }
    }
    else{
        textarea_div.html(message)
    }


    sample_div.append(textarea_div);

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
    collapsed_samples_div_right
        .addClass('collapsed_samples_right')
        .css("height", window.innerHeight*0.85);

    if(message == "")
    {
        sample_div.addClass( 'collapsed_samples_' + previous_sample_hidden_id.toString());
        sample_div.attr("data-collapsed-group", 'collapsed_samples_' + previous_sample_hidden_id.toString());
        sample_div.hide();
        if(!previous_sample_hidden){
            previous_sample_hidden = true;
            var collapsed_samples_div_left = $(document.createElement('div')).addClass('collapsed_samples_bar_'+previous_sample_hidden_id.toString());
            collapsed_samples_div_left
                .addClass('collapsed_samples_left')
                .css("height", window.innerHeight*0.85);


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

    if(paramsHL.length==0)
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

    var textarea = $(document.createElement('div'))
        .attr("contenteditable", "true")
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

    if(paramsHL.length == 0)
        scroll_right();
};

var append_intake_form = function(){

    var sample_div = $(document.createElement('div'))
        .addClass("intake-sample");
        //.css("width", window.innerWidth*0.7);

    var time_input_start = $(document.createElement('input'))
        .attr("class", "input-field-shift")
        .attr("id", "intake-report_time_start_edit")
        .attr("value" , intakeReport.time)
        .on("click", function(){
            return show_edit_button("intake-report");
        });

    var intake_report = $(document.createElement('div'))
        .attr("class", "input-field-shift-div")
        .html("Intake report");

    sample_div.append(intake_report);
    sample_div.append(time_input_start);

    var hr = $(document.createElement('hr'));
    hr.addClass("horizontal-bar");

    sample_div.append(hr);


    var textarea_div = $(document.createElement('div'))
        .attr("contenteditable", "true")
        .addClass('intake-report-nurse-text-editable')
        .attr("id", "intake-report-message")
        .css("height", window.innerHeight*0.80)
        .on("click", function(){
            return show_edit_button("intake-report");

        });

    textarea_div.html(intakeReport.report);
    sample_div.append(textarea_div);

    var button = $(document.createElement('input'))
        .attr("type", "submit")
        .attr("value", "Edit")
        .attr("class", "edit-button")
        .attr("id", "intake-report-edit-button")
        .hide()
        .on("click", function(){
            return edit_intake_report();

        });

    sample_div.append("<br>");
    sample_div.append(button);
    $(".frame").append(sample_div);

};

/*
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
};*/

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

    message  = $("#message").html();

    var new_sample = {};
    new_sample.start = shift_time_start;
    new_sample.end = shift_time_end;
    new_sample.values = values;
    new_sample.message = message;

    samples.push(new_sample);

    refresh();
    return false;
};

var show_edit_button = function(id){
    console.log(id)
    if(id == "intake-report" && $("#intake-report-edit-button").css("display") == "none"){
        $(".edit-button").hide();
        $("#intake-report-edit-button").fadeIn();
    }

    if($("#edit-button-"+id).css("display") == "none")
    {
        $("#intake-report-edit-button").hide();

        $(".edit-button").hide();
        $("#edit-button-"+id).fadeIn();
    }
};

var edit_report = function(id){
    $("#edit-button-"+id).hide();
    var shift_time_start;
    var shift_time_end;
    var values = [];
    var message;

    shift_time_start = $("#shift_time_start_edit-"+id).val();
    shift_time_end = $("#shift_time_end_edit-"+id).val();

    labels.forEach(function (value) {
        values.push($("#" + value + '-' + id).val())
    });

    message  = $("#message-"+id).html();

    console.log(id);

    var sample_to_edit = samples[id];
    sample_to_edit.end = shift_time_end;
    sample_to_edit.start = shift_time_start;
    sample_to_edit.values = values;
    sample_to_edit.message = removeSpanTagsWhenEdit(message);

    //console.log(removeSpanTagsWhenEdit(message));

    refresh();
};

var edit_intake_report = function(){
    $("#intake-report-edit-button").hide();
    var time_start;
    var message;

    time_start = $("#intake-report_time_start_edit").val();

    intakeReport.report  = $("#intake-report-message").html();

    intakeReport.time = time_start;

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

var hihghlightSamples = function(samples){
    samples.forEach(function (s_id) {
        var s = $( "#sample-"+s_id );
        var currentWidth = s.width();

        s//.css("border", "2px solid #1f77b4")
            .css("width", currentWidth*2);

        // If the sample is collapsed open the group
        isCollapsed = s.attr("data-collapsed-group");
        if(isCollapsed!=undefined)
            show_collapsed_samples_class_param(isCollapsed)
    });

    var s = $( "#sample-"+samples[0] );
    var currentPositionX = s.position().left;
    var pageCenterX = (window.innerWidth - window.innerWidth*0.2 )/2;
    var leftPos = $('.frame').scrollLeft();
    $(".frame").animate({
        scrollLeft: leftPos + currentPositionX - pageCenterX
    }, 300);
};

var findReportDataRelatedToSample = function(repId, sampleId){
    var reportData = MLReports[repId];
    var values = undefined;
    var text = undefined;
    reportData.values.forEach(function (v) {
        if(v.reportIndex == sampleId)
            values = v;
    });
    reportData.texts.forEach(function (t) {
        if(t.reportIndex == sampleId)
            text = t;
    });

    var returnObj = {
        "values": values,
        "text": text,
        "clinicalEvent": clinicalEvents[reportData.clinicalEventIndex],
        "probability": reportData.probability

    };
    return returnObj;
};

var removeSpanTagsWhenEdit = function(message){
    var returnMessage = "";
    var insideSpan = false;

    for(i=0; i<message.length; i++){
        if(message[i] == '<' &&
            message[i+1] == 's' &&
            message[i+2] == 'p' &&
            message[i+3] == 'a' &&
            message[i+4] == 'n' ){
            insideSpan = true;
        }

        if(insideSpan)
            if(message[i] == '>')
            {
                insideSpan = false;
                continue;
            }
        else{
                continue;
            }

        if(message[i] == '<' &&
            message[i+1] == '/' &&
            message[i+2] == 's' &&
            message[i+3] == 'p' &&
            message[i+4] == 'a' &&
            message[i+5] == 'n' &&
            message[i+6] == '>'){
            i += 6;
            continue;
        }

        returnMessage += message[i];
    }
    return returnMessage;
};

var printClinicalEventInformation = function(reportId, sampleId){
    var reportData = MLReports[reportId];
    $("#header-right").html(clinicalEvents[reportData.clinicalEventIndex] + " (" + reportData.probability + "%)");

    var clinicalEventsRecognized = reportData.causes;
    var s = $( "#sample-"+sampleId );
    s.append("<br><br>");

    console.log(clinicalEventRecognizedRelatedToTheSample);
    clinicalEventsRecognized.forEach(function (c) {
        //console.log(c.class);
        if(classInClinicalEventRecognizedRelatedToTheSample(c.class)){
            var span = $(document.createElement('span'))
                .css("color", color(c.class))
                .html(c.name)
                .attr("class", "clinicalEvent-"+sampleId);
            console.log(c.name);
            s.append(span).append("<br>");

        }
    });
};

var removeClinicalEventInformation = function(sampleId){

    showClinicalEvent = false;
    $('.clinicalEvent-'+sampleId).remove();
    $('#header-right').html("");
    //$('#clinicalEvent-'+sampleId).fadeOut();
    $('.input-field-'+sampleId).css('color', 'black');
    $('#message-'+sampleId).html(removeSpanTagsWhenEdit($('#message-'+sampleId).html()));
    var s = $( "#sample-"+sampleId );
    var currentWidth = s.width();
    s.css("width", currentWidth/2);
    var button = $("#hide-information-button");
    button.val("Show clinical event");
    button.on("click", function () {
        return showClinicalEventInformation();
    })

};

var showClinicalEventInformation = function(){
    showClinicalEvent = true;
    refresh();
};

var classInClinicalEventRecognizedRelatedToTheSample = function(c){
    found = false
    clinicalEventRecognizedRelatedToTheSample.forEach(function (cl) {
        if(cl==c){
            console.log(cl + ' ' + c);
            found =  true;
        }
    });
    return found;
};






