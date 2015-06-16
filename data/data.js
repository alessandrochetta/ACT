/**
 * Created by alessandro on 6/9/15.
 */

var clinicalEvents = [

    {
        "name": "Thrombosis",
        "probability": 32,
        "causes":[
            {
                "class": 2,
                "name": "high variability of heartbeat"
            },
            {
                "class": 3,
                "name": "low blood pressure"
            },
            {
                "class": 1,
                "name": "insomnia"
            }
        ],
        "values": [
            {
                "class":1,
                "label": "Temp",
                "values": [null, 77, null, 66, null]
            },
            {
                "class":2,
                "label": "Sats",
                "values": [54, null, null, 10, 1]
            },
            {
                "class":3,
                "label": "Bp",
                "values": [null, 67, 76, 66, 71]
            }
        ],
        "text": [
            {
                "class": null,
                "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            },
            {
                "class": 1,
                "string": "The patient was not sleeping."
            },
            {
                "class": null,
                "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            {
                "class": 3,
                "string": "Pressure seemed unusually low."
            },
            {
                "class": null,
                "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            },
            {
                "class": 2,
                "string": "Weird fluctuation of hearth rate."
            },
            {
                "class": 2,
                "string": "Weird fluctuation of hearth rate."
            },
            {
                "class": null,
                "string": " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    },
        {
            "name": "Heart attack",
            "probability": 43,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                },
                {
                    "class": 2,
                    "name": "event2"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [null, 77, null, 66, null]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [54, null, null, 10, 1]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [null, 67, 76, 66, 71]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [87, 105, 100, 98, 90]
                },
                {
                    "class":5,
                    "label": "E",
                    "values": [79, 80, 84, 86, 90]
                },
                {
                    "class":6,
                    "label": "F",
                    "values": [20, 22, 23, null, 32]
                },
                {
                    "class":7,
                    "label": "G",
                    "values": [10, null, 11, 12, 13]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": 2,
                    "string": "Evidence of event2."
                },
                {
                    "class": null,
                    "string": " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
        }
]
;