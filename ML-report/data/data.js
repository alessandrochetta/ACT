/**
 * Created by alessandro on 6/9/15.
 */
/* Previous representation
var MLReports = [

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
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom1."
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": 2,
                    "string": "Evidence of symptom2."
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
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom1."
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": 2,
                    "string": "Evidence of symptom2."
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
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
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
                    "string": "Evidence of symptom1."
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": 2,
                    "string": "Evidence of symptom2."
                },
                {
                    "class": 3,
                    "string": "Evidence of symptom3."
                },
                {
                    "class": 4,
                    "string": "Evidence of symptom4."
                },
                {
                    "class": null,
                    "string": " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "class": 5,
                    "string": "Evidence of symptom5."
                }
            ]
        },
        {
            "name": "Coma",
            "probability": 90,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
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
                    "string": "Evidence of symptom1."
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": 2,
                    "string": "Evidence of symptom2."
                },
                {
                    "class": 3,
                    "string": "Evidence of symptom3."
                },
                {
                    "class": 4,
                    "string": "Evidence of symptom4."
                },
                {
                    "class": null,
                    "string": " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "class": 5,
                    "string": "Evidence of symptom5."
                }
            ]
        },
        {
            "name": "Cerebral hemorrhage",
            "probability": 34,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom1."
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
                    "string": "Evidence of symptom2."
                }
            ]
        },
        {
            "name": "Cerebral hemorrhage",
            "probability": 97,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom1."
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
                    "string": "Evidence of symptom2."
                }
            ]
        },
        {
            "name": "Cerebral ischemia",
            "probability": 21,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
                },
                {
                    "class": 6,
                    "name": "symptom6"
                },
                {
                    "class": 7,
                    "name": "symptom7"
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
                    "string": "Evidence of symptom1."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 2,
                    "string": "Evidence of symptom2."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 3,
                    "string": "Evidence of symptom3."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text."
                },
                {
                    "class": 4,
                    "string": "Evidence of symptom4."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text Dummy text."
                },
                {
                    "class": 5,
                    "string": "Evidence of symptom5. "
                },
                {
                    "class": 6,
                    "string": "Evidence of symptom6."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 7,
                    "string": "Evidence of symptom7."
                }
            ]
        },
        {
            "name": "Cerebral ischemia",
            "probability": 91,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
                },
                {
                    "class": 6,
                    "name": "symptom6"
                },
                {
                    "class": 7,
                    "name": "symptom7"
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
                    "string": "Evidence of symptom1."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 2,
                    "string": "Evidence of symptom2."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 3,
                    "string": "Evidence of symptom3."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text."
                },
                {
                    "class": 4,
                    "string": "Evidence of symptom4."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text Dummy text."
                },
                {
                    "class": 5,
                    "string": "Evidence of symptom5. "
                },
                {
                    "class": 6,
                    "string": "Evidence of symptom6."
                },
                {
                    "class": null,
                    "string": " Dummy text Dummy text Dummy text. "
                },
                {
                    "class": 7,
                    "string": "Evidence of symptom7."
                }
            ]
        },
        {
            "name": "Cerebrovascular accident",
            "probability": 43,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom1."
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
                    "string": "Evidence of symptom2."
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
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom1."
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
                    "string": "Evidence of symptom2."
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
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
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
                    "string": "Evidence of symptom3."
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                },
                {
                    "class": 1,
                    "string": "Evidence of symptom1."
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": 2,
                    "string": "Evidence of symptom2."
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
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
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
                    "string": "Evidence of symptom3."
                },
                {
                    "class": null,
                    "string": " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                },
                {
                    "class": 1,
                    "string": "Evidence of symptom1."
                },
                {
                    "class": null,
                    "string": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
                {
                    "class": 2,
                    "string": "Evidence of symptom2."
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
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom1."
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
                    "string": "Evidence of symptom2."
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
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom1."
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
                    "string": "Evidence of symptom2."
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
                    "name": "symptom1"
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
                    "string": "Evidence of symptom1."
                }
            ]
        },
        {
            "name": "Arterial embolism",
            "probability": 89,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
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
                    "string": "Evidence of symptom1."
                }
            ]
        },
        {
            "name": "Bronchopulmonary dysplasia",
            "probability": 35,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom2."
                }
            ]
        },
        {
            "name": "Bronchopulmonary dysplasia",
            "probability": 79,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
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
                    "string": "Evidence of symptom2."
                }
            ]
        },
        {
            "name": "Obliterative bronchiolitis",
            "probability": 36,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
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
                    "string": "Evidence of symptom1."
                }
            ]
        },
        {
            "name": "Obliterative bronchiolitis",
            "probability": 78,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
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
                    "string": "Evidence of symptom1."
                }
            ]
        }
]
;*/

var MLReports = [
        {
            "clinicalEventIndex": 0,
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
                    "classes": [1, null, null, 3]
                },
                {
                    "reportIndex":4,
                    "classes": [1, 2, null, 3]
                },
                {
                    "reportIndex":5,
                    "classes": [1, null, 3, 3]
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
                            "class": 1,
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
                            "class": 2,
                            "startCharacter": 89,
                            "endCharacter": 95
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 0,
            "probability": 82,
            "causes":[
                {
                    "class": 2,
                    "name": "symptom1"
                },
                {
                    "class": 3,
                    "name": "symptom2"
                },
                {
                    "class": 1,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [1, 2, null, 4]
                },
                {
                    "reportIndex":2,
                    "classes": [1, 2, 3, 4]
                },
                {
                    "reportIndex":3,
                    "classes": [1, 2, 3, 4]
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
        },
        {
            "clinicalEventIndex": 1,
            "probability": 22,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                }
            ],
            "values": [
                {
                    "reportIndex":5,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":6,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":8,
                    "classes": [4, 2, 1, 3]
                }
            ],
            "texts": [
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 8,
                            "endCharacter": 22
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 65
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 63,
                            "endCharacter": 84
                        },
                        {
                            "class": 4,
                            "startCharacter": 98,
                            "endCharacter": 126
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 0,
                            "endCharacter": 5
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 62
                        },
                        {
                            "class": 2,
                            "startCharacter": 87,
                            "endCharacter": 92
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 1,
            "probability": 88,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                }
            ],
            "values": [
                {
                    "reportIndex":5,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":6,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":8,
                    "classes": [4, 2, 1, 3]
                }
            ],
            "texts": [
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 8,
                            "endCharacter": 22
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 65
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 63,
                            "endCharacter": 84
                        },
                        {
                            "class": 4,
                            "startCharacter": 98,
                            "endCharacter": 126
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 0,
                            "endCharacter": 5
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 62
                        },
                        {
                            "class": 2,
                            "startCharacter": 87,
                            "endCharacter": 92
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 2,
            "probability": 38,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 4,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 3,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
                }
            ],
            "values": [
                {
                    "reportIndex":6,
                    "classes": [4, 2, 1, 4]
                },
                {
                    "reportIndex":9,
                    "classes": [4, 2, 1, 4]
                },
                {
                    "reportIndex":10,
                    "classes": [4, 2, 1, 5]
                },
                {
                    "reportIndex":11,
                    "classes": [4, 2, 1, 5]
                }
            ],
            "texts": [
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 7,
                            "endCharacter": 23
                        },
                        {
                            "class": 3,
                            "startCharacter": 25,
                            "endCharacter": 73
                        }
                    ]
                },
                {
                    "reportIndex":9,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 60,
                            "endCharacter": 88
                        },
                        {
                            "class": 1,
                            "startCharacter": 98,
                            "endCharacter": 131
                        }
                    ]
                },
                {
                    "reportIndex":10,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 0,
                            "endCharacter": 6
                        },
                        {
                            "class": 4,
                            "startCharacter": 25,
                            "endCharacter": 62
                        },
                        {
                            "class": 5,
                            "startCharacter": 86,
                            "endCharacter": 95
                        }
                    ]
                }
                ,
                {
                    "reportIndex":11,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 24,
                            "endCharacter": 55
                        },
                        {
                            "class": 5,
                            "startCharacter": 87,
                            "endCharacter": 100
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 2,
            "probability": 98,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 4,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 3,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
                }
            ],
            "values": [
                {
                    "reportIndex":6,
                    "classes": [4, 2, 1, 4]
                },
                {
                    "reportIndex":9,
                    "classes": [4, 2, 1, 4]
                },
                {
                    "reportIndex":10,
                    "classes": [4, 2, 1, 5]
                },
                {
                    "reportIndex":11,
                    "classes": [4, 2, 1, 5]
                }
            ],
            "texts": [
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 7,
                            "endCharacter": 23
                        },
                        {
                            "class": 3,
                            "startCharacter": 25,
                            "endCharacter": 73
                        }
                    ]
                },
                {
                    "reportIndex":9,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 60,
                            "endCharacter": 88
                        },
                        {
                            "class": 1,
                            "startCharacter": 98,
                            "endCharacter": 131
                        }
                    ]
                },
                {
                    "reportIndex":10,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 0,
                            "endCharacter": 6
                        },
                        {
                            "class": 4,
                            "startCharacter": 25,
                            "endCharacter": 62
                        },
                        {
                            "class": 5,
                            "startCharacter": 86,
                            "endCharacter": 95
                        }
                    ]
                }
                ,
                {
                    "reportIndex":11,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 24,
                            "endCharacter": 55
                        },
                        {
                            "class": 5,
                            "startCharacter": 87,
                            "endCharacter": 100
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 3,
            "probability": 25,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                }
            ],
            "values": [
                {
                    "reportIndex":6,
                    "classes": [1, 2, 1, null]
                },
                {
                    "reportIndex":8,
                    "classes": [1, 2, 1, null]
                }
            ],
            "texts": [
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 7,
                            "endCharacter": 23
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 54,
                            "endCharacter": 91
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 3,
            "probability": 99,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                }
            ],
            "values": [
                {
                    "reportIndex":6,
                    "classes": [1, 2, 1, null]
                },
                {
                    "reportIndex":8,
                    "classes": [1, 2, 1, null]
                }
            ],
            "texts": [
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 7,
                            "endCharacter": 23
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 54,
                            "endCharacter": 91
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 4,
            "probability": 10,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                }
            ],
            "values": [
                {
                    "reportIndex":6,
                    "classes": [1, 2, 1, 2]
                },
                {
                    "reportIndex":8,
                    "classes": [1, 2, 1, 2]
                }
                ,
                {
                    "reportIndex":12,
                    "classes": [1, 2, 1, 2]
                }
            ],
            "texts": [
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 20,
                            "endCharacter": 40
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 38,
                            "endCharacter": 62
                        }
                    ]
                },
                {
                    "reportIndex":12,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 10,
                            "endCharacter": 50
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 4,
            "probability": 90,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                }
            ],
            "values": [
                {
                    "reportIndex":6,
                    "classes": [1, 2, 1, 2]
                },
                {
                    "reportIndex":8,
                    "classes": [1, 2, 1, 2]
                }
                ,
                {
                    "reportIndex":12,
                    "classes": [1, 2, 1, 2]
                }
            ],
            "texts": [
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 20,
                            "endCharacter": 40
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 38,
                            "endCharacter": 62
                        }
                    ]
                },
                {
                    "reportIndex":12,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 10,
                            "endCharacter": 50
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 5,
            "probability": 10,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
                },
                {
                    "class": 6,
                    "name": "symptom6"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [1, 3, 4, 5]
                },
                {
                    "reportIndex":4,
                    "classes": [1, 3, 4, 5]
                }
                ,
                {
                    "reportIndex":5,
                    "classes": [1, 3, 4, 5]
                }
                ,
                {
                    "reportIndex":6,
                    "classes": [1, 3, 6, 5]
                }
                ,
                {
                    "reportIndex":11,
                    "classes": [1, 3, 6, 5]
                }
                ,
                {
                    "reportIndex":12,
                    "classes": [2, 3, 6, 5]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 39
                        }
                    ]
                },
                {
                    "reportIndex":4,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 39,
                            "endCharacter": 54
                        }
                    ]
                },
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                },
                {
                    "reportIndex":11,
                    "classes": [
                        {
                            "class": 5,
                            "startCharacter": 10,
                            "endCharacter": 48
                        }
                    ]
                },
                {
                    "reportIndex":12,
                    "classes": [
                        {
                            "class": 6,
                            "startCharacter": 10,
                            "endCharacter": 50
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 5,
            "probability": 87,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
                },
                {
                    "class": 6,
                    "name": "symptom6"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [1, 3, 4, 5]
                },
                {
                    "reportIndex":4,
                    "classes": [1, 3, 4, 5]
                }
                ,
                {
                    "reportIndex":5,
                    "classes": [1, 3, 4, 5]
                }
                ,
                {
                    "reportIndex":6,
                    "classes": [1, 3, 6, 5]
                }
                ,
                {
                    "reportIndex":11,
                    "classes": [1, 3, 6, 5]
                }
                ,
                {
                    "reportIndex":12,
                    "classes": [2, 3, 6, 5]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 39
                        }
                    ]
                },
                {
                    "reportIndex":4,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 39,
                            "endCharacter": 54
                        }
                    ]
                },
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                },
                {
                    "reportIndex":11,
                    "classes": [
                        {
                            "class": 5,
                            "startCharacter": 10,
                            "endCharacter": 48
                        }
                    ]
                },
                {
                    "reportIndex":12,
                    "classes": [
                        {
                            "class": 6,
                            "startCharacter": 10,
                            "endCharacter": 50
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 6,
            "probability": 15,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
                },
                {
                    "class": 6,
                    "name": "symptom6"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [1, 3, 4, 5]
                },
                {
                    "reportIndex":4,
                    "classes": [1, 3, 4, 5]
                }
                ,
                {
                    "reportIndex":5,
                    "classes": [1, 3, 4, 5]
                }
                ,
                {
                    "reportIndex":6,
                    "classes": [1, 3, 6, 5]
                }
                ,
                {
                    "reportIndex":11,
                    "classes": [1, 3, 6, 5]
                }
                ,
                {
                    "reportIndex":12,
                    "classes": [2, 3, 6, 5]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 39
                        }
                    ]
                },
                {
                    "reportIndex":4,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 39,
                            "endCharacter": 54
                        }
                    ]
                },
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                },
                {
                    "reportIndex":11,
                    "classes": [
                        {
                            "class": 5,
                            "startCharacter": 10,
                            "endCharacter": 48
                        }
                    ]
                },
                {
                    "reportIndex":12,
                    "classes": [
                        {
                            "class": 6,
                            "startCharacter": 10,
                            "endCharacter": 50
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 6,
            "probability": 92,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                },
                {
                    "class": 5,
                    "name": "symptom5"
                },
                {
                    "class": 6,
                    "name": "symptom6"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [1, 3, 4, 5]
                },
                {
                    "reportIndex":4,
                    "classes": [1, 3, 4, 5]
                }
                ,
                {
                    "reportIndex":5,
                    "classes": [1, 3, 4, 5]
                }
                ,
                {
                    "reportIndex":6,
                    "classes": [1, 3, 6, 5]
                }
                ,
                {
                    "reportIndex":11,
                    "classes": [1, 3, 6, 5]
                }
                ,
                {
                    "reportIndex":12,
                    "classes": [2, 3, 6, 5]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 39
                        }
                    ]
                },
                {
                    "reportIndex":4,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 39,
                            "endCharacter": 54
                        }
                    ]
                },
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                },
                {
                    "reportIndex":11,
                    "classes": [
                        {
                            "class": 5,
                            "startCharacter": 10,
                            "endCharacter": 48
                        }
                    ]
                },
                {
                    "reportIndex":12,
                    "classes": [
                        {
                            "class": 6,
                            "startCharacter": 10,
                            "endCharacter": 50
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 7,
            "probability": 8,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [1, 3, 2, 4]
                },
                {
                    "reportIndex":4,
                    "classes": [1, 3, 2, 4]
                }
                ,
                {
                    "reportIndex":5,
                    "classes": [1, 3, 2, 4]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 39
                        }
                    ]
                },
                {
                    "reportIndex":4,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 39,
                            "endCharacter": 54
                        }
                    ]
                },
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 7,
            "probability": 88,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [1, 3, 2, 4]
                },
                {
                    "reportIndex":4,
                    "classes": [1, 3, 2, 4]
                }
                ,
                {
                    "reportIndex":5,
                    "classes": [1, 3, 2, 4]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 39
                        }
                    ]
                },
                {
                    "reportIndex":4,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 39,
                            "endCharacter": 54
                        }
                    ]
                },
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 7,
                            "endCharacter": 50
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 8,
            "probability": 32,
            "causes":[
                {
                    "class": 2,
                    "name": "high variability of heartbeat"
                },
                {
                    "class": 3,
                    "name": "low blood pressure"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [2, null, null, 3]
                },
                {
                    "reportIndex":4,
                    "classes": [2, null, null, 3]
                },
                {
                    "reportIndex":5,
                    "classes": [2, null, null, 3]
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
        },
        {
            "clinicalEventIndex": 8,
            "probability": 77,
            "causes":[
                {
                    "class": 2,
                    "name": "high variability of heartbeat"
                },
                {
                    "class": 3,
                    "name": "low blood pressure"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [2, null, null, 3]
                },
                {
                    "reportIndex":4,
                    "classes": [2, null, null, 3]
                },
                {
                    "reportIndex":5,
                    "classes": [2, null, null, 3]
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
        },
        {
            "clinicalEventIndex": 9,
            "probability": 12,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                }
            ],
            "values": [
                {
                    "reportIndex":5,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":6,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":8,
                    "classes": [4, 2, 1, 3]
                }
            ],
            "texts": [
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 8,
                            "endCharacter": 22
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 65
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 63,
                            "endCharacter": 84
                        },
                        {
                            "class": 4,
                            "startCharacter": 98,
                            "endCharacter": 126
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 0,
                            "endCharacter": 5
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 62
                        },
                        {
                            "class": 2,
                            "startCharacter": 87,
                            "endCharacter": 92
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 9,
            "probability": 94,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                }
            ],
            "values": [
                {
                    "reportIndex":5,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":6,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":8,
                    "classes": [4, 2, 1, 3]
                }
            ],
            "texts": [
                {
                    "reportIndex":5,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 8,
                            "endCharacter": 22
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 65
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 63,
                            "endCharacter": 84
                        },
                        {
                            "class": 4,
                            "startCharacter": 98,
                            "endCharacter": 126
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 0,
                            "endCharacter": 5
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 62
                        },
                        {
                            "class": 2,
                            "startCharacter": 87,
                            "endCharacter": 92
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 10,
            "probability": 12,
            "causes":[
                {
                    "class": 1,
                    "name": "symptom1"
                },
                {
                    "class": 2,
                    "name": "symptom2"
                },
                {
                    "class": 3,
                    "name": "symptom3"
                },
                {
                    "class": 4,
                    "name": "symptom4"
                }
            ],
            "values": [
                {
                    "reportIndex":5,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":6,
                    "classes": [4, 2, 1, 3]
                },
                {
                    "reportIndex":8,
                    "classes": [4, 2, 1, 3]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 4,
                            "startCharacter": 8,
                            "endCharacter": 22
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 66
                        }
                    ]
                },
                {
                    "reportIndex":6,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 63,
                            "endCharacter": 84
                        },
                        {
                            "class": 4,
                            "startCharacter": 98,
                            "endCharacter": 126
                        }
                    ]
                },
                {
                    "reportIndex":8,
                    "classes": [
                        {
                            "class": 3,
                            "startCharacter": 0,
                            "endCharacter": 5
                        },
                        {
                            "class": 1,
                            "startCharacter": 25,
                            "endCharacter": 62
                        },
                        {
                            "class": 2,
                            "startCharacter": 87,
                            "endCharacter": 92
                        }
                    ]
                }
            ]
        },
        {
            "clinicalEventIndex": 10,
            "probability": 99,
            "causes":[
                {
                    "class": 1,
                    "name": "elevated temperature"
                },
                {
                    "class": 2,
                    "name": "stomached"
                }
            ],
            "values": [
                {
                    "reportIndex":5,
                    "classes": [null, null, null, null]
                },
                {
                    "reportIndex":6,
                    "classes": [null, null, null, null]
                },
                {
                    "reportIndex":8,
                    "classes": [null, null, null, 1]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {
                            "class": 2,
                            "startCharacter": 126,
                            "endCharacter": 146
                        }
                    ]
                }
                ]
            }
        ];
/*

var MLReports = [

        {
            "clinicalEventIndex": 0,
            "probability": 89,
            "causes":[
                {
                    "class": 1,
                    "name": "unpleasant urination"
                },
                {
                    "class": 2,
                    "name": "abdominal pain"
                },
                {
                    "class": 3,
                    "name": "cloudy urine"
                },
                {
                    "class": 4,
                    "name": "elevated temperature"
                },
                {
                    "class": 5,
                    "name": "low blood pressure"
                },
                {
                    "class": 6,
                    "name": "elevated respiration"
                },
                {
                    "class": 7,
                    "name": "elevated heart rate"
                }
            ],
            "values": [
                {
                    "reportIndex":0,
                    "classes": [null, null, null, null, null, 2]
                },
                {
                    "reportIndex":1,
                    "classes": [null, null, null, null, null, null]
                },
                {
                    "reportIndex":2,
                    "classes": [null, null, null, 4, null, null]
                },
                {
                    "reportIndex":3,
                    "classes": [5, null, null, 4, null, null]
                },
                {
                    "reportIndex":4,
                    "classes": [5, null, null, 4, null, null]
                },
                {
                    "reportIndex":5,
                    "classes": [5, 7, null, 4, 6, 2]
                },
                {
                    "reportIndex":6,
                    "classes": [5, 7, null, 4, 6, null]
                },
                {
                    "reportIndex":7,
                    "classes": [5, 7, null, 4, 6, 2]
                }
            ],
            "texts": [
                {
                    "reportIndex":0,
                    "classes": [
                        {

                            "class": 2,
                            "startCharacter":24,
                            "endCharacter": 37

                        }
                    ]
                },
                {
                    "reportIndex":5,
                    "classes": [
                        {

                            "class": 2,
                            "startCharacter":22,
                            "endCharacter": 36

                        },
                        {

                            "class": 4,
                            "startCharacter":72,
                            "endCharacter": 107

                        }
                    ]
                },
                {
                    "reportIndex":7,
                    "classes": [
                        {

                            "class": 5,
                            "startCharacter":15,
                            "endCharacter": 19

                        },
                        {

                            "class": 5,
                            "startCharacter":34,
                            "endCharacter": 49

                        },
                        {

                            "class": 6,
                            "startCharacter":67,
                            "endCharacter": 93

                        }
                    ]
                }
            ]
        },
    {
        "clinicalEventIndex": 1,
        "probability": 22,
        "causes":[
            {
                "class": 1,
                "name": "unpleasant urination"
            },
            {
                "class": 2,
                "name": "abdominal pain"
            },
            {
                "class": 3,
                "name": "cloudy urine"
            },
            {
                "class": 4,
                "name": "elevated temperature"
            },
            {
                "class": 5,
                "name": "low blood pressure"
            },
            {
                "class": 6,
                "name": "elevated respiration"
            },
            {
                "class": 7,
                "name": "elevated heart rate"
            }
        ],
        "values": [
            {
                "reportIndex":0,
                "classes": [null, null, null, null, null, 2]
            },
            {
                "reportIndex":1,
                "classes": [null, null, null, null, null, null]
            },
            {
                "reportIndex":2,
                "classes": [null, null, null, 4, null, null]
            },
            {
                "reportIndex":3,
                "classes": [5, null, null, 4, null, null]
            },
            {
                "reportIndex":4,
                "classes": [5, null, null, 4, null, null]
            },
            {
                "reportIndex":5,
                "classes": [5, 7, null, 4, 6, 2]
            },
            {
                "reportIndex":6,
                "classes": [5, 7, null, 4, 6, null]
            },
            {
                "reportIndex":7,
                "classes": [5, 7, null, 4, 6, 2]
            }
        ],
        "texts": [
            {
                "reportIndex":0,
                "classes": [
                    {

                        "class": 2,
                        "startCharacter":24,
                        "endCharacter": 37

                    }
                ]
            },
            {
                "reportIndex":5,
                "classes": [
                    {

                        "class": 2,
                        "startCharacter":22,
                        "endCharacter": 36

                    },
                    {

                        "class": 4,
                        "startCharacter":78,
                        "endCharacter": 108

                    }

                ]
            },
            {
                "reportIndex":7,
                "classes": [
                    {

                        "class": 5,
                        "startCharacter":15,
                        "endCharacter": 19

                    },
                    {

                        "class": 5,
                        "startCharacter":34,
                        "endCharacter": 49

                    },
                    {

                        "class": 6,
                        "startCharacter":67,
                        "endCharacter": 93

                    }
                ]
            }
        ]
    }];

*/