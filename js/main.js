/**
 * Created by alessandro on 5/25/15.
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


var main = function(){

    $(".ui-block-a").css("height", window.innerHeight);
    $(".frame").css("height", window.innerHeight);
    $(".frame").css("width", window.innerWidth - window.innerWidth*0.2);



    var previous_sample_hidden = false;
    var previous_sample_hidden_id = 0;

    samples.forEach(function(s, i){
        var sample_div = $(document.createElement('div'));
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

        if(s.message == "")
        {
            sample_div.addClass( 'collapsed_samples_' + previous_sample_hidden_id.toString());
            sample_div.hide();
            if(!previous_sample_hidden){
                previous_sample_hidden = true;
                var collapsed_samples_div = $(document.createElement('div')).addClass('collapsed_samples_bar_'+previous_sample_hidden_id.toString());
                collapsed_samples_div.addClass('collapsed_samples');

                collapsed_samples_div.click((function(id){
                    return function() {
                        show_collapsed_samples(id);
                    };
                })(previous_sample_hidden_id.toString())
                );
                $(".frame").append(collapsed_samples_div)
            }

        }
        else{
            previous_sample_hidden = false;
            previous_sample_hidden_id = i;
        }


        $(".frame").append(sample_div)
    });

    $(".frame").scrollLeft($(".frame").width() +400);

    $(".nurse-text").off().on("keydown", function(event){
        event.preventDefault();
        return;
    });
};

var show_collapsed_samples = function(collapsed_class){
    $(".collapsed_samples_bar_"+collapsed_class).hide();
    $( ".collapsed_samples_"+collapsed_class ).fadeIn();

};