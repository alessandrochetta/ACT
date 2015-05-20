/**
 * Created by alessandro on 5/19/15.
 */
var Notification_center = function(){
    var self = {};
    var subscribed = [];

    self.subscribe = function(notification, callback){
        var subscription = {"notification":notification, "callback":callback};
        subscribed.push(subscription);
        console.log("new subscription: " + subscription)
    };

    self.dispatch = function(message, extra){
        subscribed.forEach(function(s) {
            if(s.notification == message){
                if(extra == undefined)
                    s.callback();
                else
                    s.callback(extra)
            }
            }
        );
    };

    // Constructor
    self.init = function() {

        //window.addEventListener("resize", self.resizeWindow);
    }();

    // Destructor
    self.deinit = function() {
        // Place here the code for dealloc eventual objects
    };

    return self;
};

var notification_center = Notification_center();

