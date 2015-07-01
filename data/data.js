/**
 * Created by alessandro on 6/9/15.
 */
/* Previous representation
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
            "name": "Thrombosis",
            "probability": 89,
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
        },
        {
            "name": "Heart attack",
            "probability": 89,
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
        },
        {
            "name": "Coma",
            "probability": 23,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                },
                {
                    "class": 2,
                    "name": "event2"
                },
                {
                    "class": 3,
                    "name": "event3"
                },
                {
                    "class": 4,
                    "name": "event4"
                },
                {
                    "class": 5,
                    "name": "event5"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [null, 45, null, 67, null]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [32, null, null, 10, 87]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [null, 21, 54, 54, 71]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [87, null, 100, null, 90]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
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
                    "class": 3,
                    "string": "Evidence of event3."
                },
                {
                    "class": 4,
                    "string": "Evidence of event4."
                },
                {
                    "class": null,
                    "string": " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "class": 5,
                    "string": "Evidence of event5."
                }
            ]
        },
        {
            "name": "Coma",
            "probability": 90,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                },
                {
                    "class": 2,
                    "name": "event2"
                },
                {
                    "class": 3,
                    "name": "event3"
                },
                {
                    "class": 4,
                    "name": "event4"
                },
                {
                    "class": 5,
                    "name": "event5"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [null, 45, null, 67, null]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [32, null, null, 10, 87]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [null, 21, 54, 54, 71]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [87, null, 100, null, 90]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
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
                    "class": 3,
                    "string": "Evidence of event3."
                },
                {
                    "class": 4,
                    "string": "Evidence of event4."
                },
                {
                    "class": null,
                    "string": " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "class": 5,
                    "string": "Evidence of event5."
                }
            ]
        },
        {
            "name": "Cerebral hemorrhage",
            "probability": 34,
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
                    "values": [1, 2, 3, 4, 5]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [5, 4, 3, 2, 1]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [5, 5, 5, 5, 5]
                }
            ],
            "text": [
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": null,
                    "string": " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "class": 2,
                    "string": "Evidence of event2."
                }
            ]
        },
        {
            "name": "Cerebral hemorrhage",
            "probability": 97,
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
                    "values": [1, 2, 3, 4, 5]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [5, 4, 3, 2, 1]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [5, 5, 5, 5, 5]
                }
            ],
            "text": [
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": null,
                    "string": " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "class": 2,
                    "string": "Evidence of event2."
                }
            ]
        },
        {
            "name": "Cerebral ischemia",
            "probability": 21,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                },
                {
                    "class": 2,
                    "name": "event2"
                },
                {
                    "class": 3,
                    "name": "event3"
                },
                {
                    "class": 4,
                    "name": "event4"
                },
                {
                    "class": 5,
                    "name": "event5"
                },
                {
                    "class": 6,
                    "name": "event6"
                },
                {
                    "class": 7,
                    "name": "event7"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [1, 1, 1, 1, 1]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [2, null, null, 2, 2]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [3, 3, 3, 3, 3]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [4, null, null, null, null]
                },
                {
                    "class":5,
                    "label": "E",
                    "values": [5, 5, 5, 5, null]
                },
                {
                    "class":6,
                    "label": "F",
                    "values": [6, 6, 6, null, 6]
                },
                {
                    "class":7,
                    "label": "G",
                    "values": [7, null, 7, 7, 7]
                },
                {
                    "class":8,
                    "label": "H",
                    "values": [8, 8, 8, 8, 8]
                },
                {
                    "class":9,
                    "label": "I",
                    "values": [9, 9, 9, 9, 9]
                },
                {
                    "class":10,
                    "label": "J",
                    "values": [null, null, 10, null, 10]
                },
                {
                    "class":11,
                    "label": "K",
                    "values": [11, 11, 11, null, 11]
                },
                {
                    "class":12,
                    "label": "L",
                    "values": [12, 12, 12, 12, null]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 2,
                    "string": "Evidence of event2."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 3,
                    "string": "Evidence of event3."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text."
                },
                {
                    "class": 4,
                    "string": "Evidence of event4."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text Dummy text."
                },
                {
                    "class": 5,
                    "string": "Evidence of event5. "
                },
                {
                    "class": 6,
                    "string": "Evidence of event6."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 7,
                    "string": "Evidence of event7."
                }
            ]
        },
        {
            "name": "Cerebral ischemia",
            "probability": 91,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                },
                {
                    "class": 2,
                    "name": "event2"
                },
                {
                    "class": 3,
                    "name": "event3"
                },
                {
                    "class": 4,
                    "name": "event4"
                },
                {
                    "class": 5,
                    "name": "event5"
                },
                {
                    "class": 6,
                    "name": "event6"
                },
                {
                    "class": 7,
                    "name": "event7"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [1, 1, 1, 1, 1]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [2, null, null, 2, 2]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [3, 3, 3, 3, 3]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [4, null, null, null, null]
                },
                {
                    "class":5,
                    "label": "E",
                    "values": [5, 5, 5, 5, null]
                },
                {
                    "class":6,
                    "label": "F",
                    "values": [6, 6, 6, null, 6]
                },
                {
                    "class":7,
                    "label": "G",
                    "values": [7, null, 7, 7, 7]
                },
                {
                    "class":8,
                    "label": "H",
                    "values": [8, 8, 8, 8, 8]
                },
                {
                    "class":9,
                    "label": "I",
                    "values": [9, 9, 9, 9, 9]
                },
                {
                    "class":10,
                    "label": "J",
                    "values": [null, null, 10, null, 10]
                },
                {
                    "class":11,
                    "label": "K",
                    "values": [11, 11, 11, null, 11]
                },
                {
                    "class":12,
                    "label": "L",
                    "values": [12, 12, 12, 12, null]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 2,
                    "string": "Evidence of event2."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 3,
                    "string": "Evidence of event3."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text."
                },
                {
                    "class": 4,
                    "string": "Evidence of event4."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text Dummy text."
                },
                {
                    "class": 5,
                    "string": "Evidence of event5. "
                },
                {
                    "class": 6,
                    "string": "Evidence of event6."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 7,
                    "string": "Evidence of event7."
                }
            ]
        },
        {
            "name": "Cerebrovascular accident",
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
                    "values": [12, 12, 12, 12, null]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [3, null, 3, 3, 3]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [4, 4, null, 4, 4]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [null, 5, 5, 6, 6]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
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
        },
        {
            "name": "Cerebrovascular accident",
            "probability": 99,
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
                    "values": [12, 12, 12, 12, null]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [3, null, 3, 3, 3]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [4, 4, null, 4, 4]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [null, 5, 5, 6, 6]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
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
        },
        {
            "name": "Cerebral hypoperfusion",
            "probability": 28,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                },
                {
                    "class": 2,
                    "name": "event2"
                },
                {
                    "class": 3,
                    "name": "event3"
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
                    "values": [87, 105, 100, 98, null]
                },
                {
                    "class":5,
                    "label": "E",
                    "values": [79, null, 84, 86, 90]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 3,
                    "string": "Evidence of event3."
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
        },
        {
            "name": "Cerebral hypoperfusion",
            "probability": 98,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                },
                {
                    "class": 2,
                    "name": "event2"
                },
                {
                    "class": 3,
                    "name": "event3"
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
                    "values": [87, 105, 100, 98, null]
                },
                {
                    "class":5,
                    "label": "E",
                    "values": [79, null, 84, 86, 90]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 3,
                    "string": "Evidence of event3."
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
        },
        {
            "name": "Cerebrovascular accident",
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
                    "values": [12, 12, 12, 12, null]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [3, null, 3, 3, 3]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [4, 4, null, 4, 4]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [null, 5, 5, 6, 6]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
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
        },
        {
            "name": "Cerebrovascular accident",
            "probability": 98,
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
                    "values": [12, 12, 12, 12, null]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [3, null, 3, 3, 3]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [4, 4, null, 4, 4]
                },
                {
                    "class":4,
                    "label": "D",
                    "values": [null, 5, 5, 6, 6]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
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
        },
        {
            "name": "Arterial embolism",
            "probability": 37,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [10, 77, 11, 66, 3]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                }
            ]
        },
        {
            "name": "Arterial embolism",
            "probability": 89,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [10, 77, 11, 66, 3]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                }
            ]
        },
        {
            "name": "Bronchopulmonary dysplasia",
            "probability": 35,
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
                    "values": [10, 77, 11, 66, 3]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [45, 54, 45, null, null]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [444, 747, 141, 646, 34]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 2,
                    "string": "Evidence of event2."
                }
            ]
        },
        {
            "name": "Bronchopulmonary dysplasia",
            "probability": 79,
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
                    "values": [10, 77, 11, 66, 3]
                },
                {
                    "class":2,
                    "label": "B",
                    "values": [45, 54, 45, null, null]
                },
                {
                    "class":3,
                    "label": "C",
                    "values": [444, 747, 141, 646, 34]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 2,
                    "string": "Evidence of event2."
                }
            ]
        },
        {
            "name": "Obliterative bronchiolitis",
            "probability": 36,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [10, 77, 11, 66, 3]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                }
            ]
        },
        {
            "name": "Obliterative bronchiolitis",
            "probability": 78,
            "causes":[
                {
                    "class": 1,
                    "name": "event1"
                }
            ],
            "values": [
                {
                    "class":1,
                    "label": "A",
                    "values": [10, 77, 11, 66, 3]
                }
            ],
            "text": [
                {
                    "class": null,
                    "string": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    "class": 1,
                    "string": "Evidence of event1."
                }
            ]
        }
]
;*/

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
                    "reportIndex":0,
                    "classes": [1, null, null, 4]
                },
                {
                    "reportIndex":4,
                    "classes": [1, 2, null, 4]
                },
                {
                    "reportIndex":5,
                    "classes": [1, null, 3, 4]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 9,
                            "endCharacter": 22
                        },
                        {
                            "class": 2,
                            "startCharacter": 25,
                            "endCharacter": 40
                        }
                    ]
                },
                {
                    "reportIndex":4,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 64,
                            "endCharacter": 77
                        },
                        {
                            "class": 4,
                            "startCharacter": 100,
                            "endCharacter": 121
                        }
                    ]
                },
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 51,
                            "endCharacter": 73
                        },
                        {
                            "class": 4,
                            "startCharacter": 89,
                            "endCharacter": 95
                        }
                    ]
                }
            ]
        }
    ]
    ;