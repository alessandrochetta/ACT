// Previous format
/*
var samples =[
        {
            "start":"2:01am",
            "end":"2:10am",
            "values":["85/55", null, null, "95.2"],
            "message": "She is a well-nourished, well-developed, elderly white female in no acute distress. She appears somewhat sad and tearful. She complained stomached"
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
            "values":["75/55", "34", "99", "98.0"],
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
            "values":[null, null, null, "986"],
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

*/


var samples =[
    {
        "start":"12:00am",
        "end":"12:10am",
        "values":["79/54", "120", "96", "98.6", "26", "6/10"],
        "message": "Patient is experiencing abdominal pain."
    },
    {
        "start":"1:00am",
        "end":"1:10am",
        "values":["122/87", "77", "97", "98.4", "13", "3/10"],
        "message": ""
    },
    {
        "start":"2:00am",
        "end":"2:10am",
        "values":["115/79", "70", "98", "99.0", "15", "2/10"],
        "message": "patient woke up"
    },
    {
        "start":"3:00am",
        "end":"3:10am",
        "values":["100/70", "80", "97", "99.5", "16", "3/10"],
        "message": "The patient ate."
    },
    {
        "start":"4:00am",
        "end":"4:10am",
        "values":["90/69", "96", "97", "99.9", "18", "3/10"],
        "message": "The patient used the bathroom."
    },
    {
        "start":"5:00am",
        "end":"5:10am",
        "values":["87/62", "101", "95", "101.0", "22", "5/10"],
        "message": "patient complained of increased pain. Pain relieving cream was applied. Body temperature is still increasing."
    },
    {
        "start":"6:00am",
        "end":"6:10am",
        "values":["79/54", "115", "94", "101.0", "21", "4/10"],
        "message": ""
    },
    {
        "start":"7:00am",
        "end":"7:10am",
        "values":["79/54", "120", "95", "101.3", "30", "5/10"],
        "message": "The patient is pale and her blood pressure is low. The patient has problem in the respiration."
    }
];
/*



 var labels = [
 "BP",
 "Pulse",
 "Sats",
 "Temp"
 ];

var clinicalEvents = [
 "Thrombosis",
 "Heart attack",
 "Coma",
 "Cerebral hemorrhage",
 "Cerebral ischemia",
 "Cerebrovascular accident",
 "Cerebral hypoperfusion",
 "Cerebrovascular accident",
 "Arterial embolism",
 "Bronchopulmonary dysplasia",
 "Obliterative bronchiolitis"
];

var intakeReport = {
    "report": "General: ​Patient is a 72 year old male who is 5 days post op. from a right side total hip replacement with possible sepsis. Pt. (Patient) is fully developed and appears to be stated age. \nNeurological: P​t is acting appropriate for age. Patient is alert and oriented X4. Pupils are equal round and reactive to light with accommodation. \nCardiovascular: C​apillary refill in upper extremities were less than 3 seconds bilaterally at the beginning of the shift. Capillary refill is now greater than three seconds on upper extremities bilaterally. BP 79/54, pulse 120, O2 sats at 95a%. Patient experiencing sinus tachycardia. \nPulmonary: P​atient experiencing dyspnea upon exertion. Upper lobes clear bilaterally, lower lobes diminished bilaterally. Patient experiencing tachypnea with resp. of 26. \nGI/GU (Gastrointestinal/Genitourinary): P​atient voided once during shift. Stool was formed and brown. Foley catheter in place with output of 45ml/hr. Urine clear/yellow. \nPain: P​atient experiencing sharp pain in right hip at incision site. \nSkin/wounds: I​ncision site on right hip with purulent drainage. 2+ pitting edema of feet bilaterally.",
    "time": "1:35am"
};

*/



// ClinicalEvent-Fever use case
var intakeReport = {
    "report": "General: 78 year old female was admitted appendicitis removal.  Pt. (Patient) is fully developed and appears to be stated age. \n\nNeurological: P​t is acting appropriate for age. Patient is alert and oriented X4. Pupils are equal round and reactive to light with accommodation. \n\nCardiovascular: C​apillary refill in upper extremities were less than 3 seconds bilaterally at the beginning of the shift. Capillary refill is now greater than three seconds on upper extremities bilaterally. BP 79/54, pulse 120. Patient experiencing sinus tachycardia. \n\nPulmonary: P​atient experiencing dyspnea upon exertion. Upper lobes clear bilaterally, lower lobes diminished bilaterally. Patient experiencing tachypnea with resp. of 26. \n\nGI/GU (Gastrointestinal/Genitourinary): P​atient voided once during shift. Stool was formed and brown. Foley catheter in place with output of 45ml/hr. \n\nPain: P​atient experiencing sharp pain in right hip at incision site. \n\nSkin/wounds: I​ncision site on right hip with purulent drainage. 2+ pitting edema of feet bilaterally.",
    "time": "12:00am"
};

var clinicalEvents = [
    "LOC Urinary Tract Infection",
];

var labels = [
    "BP",
    "Pulse",
    "Sats",
    "Temp",
    "Resp",
    "Pain"
];
