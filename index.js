// console.log('JavaScript');

// Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }

// If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.
// You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 
// Use try/catch and other logic to handle these types of errors gracefully.
// If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.
// Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.


// The provided course information.
// const CourseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript"
// };

//   // The provided assignment group.
// const AssignmentGroup = {
//     id: 12345,
//     name: "Fundamentals of JavaScript",
//     course_id: 451,
//     group_weight: 25,
//     assignments: [
//     {
//         id: 1,
//         name: "Declare a Variable",
//         due_at: "2023-01-25",
//         points_possible: 50
//     },
//     {
//         id: 2,
//         name: "Write a Function",
//         due_at: "2023-02-27",
//         points_possible: 150
//     },
//     {
//         id: 3,
//         name: "Code the World",
//         due_at: "3156-11-15",
//         points_possible: 500
//     }
//     ]
// };

//   // The provided learner submission data.
// const LearnerSubmissions = [
//     {
// learner_id: 125,
//     assignment_id: 1,
//     submission: {
//         submitted_at: "2023-01-25",
//         score: 47
//     }
//     },
//     {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: {
//         submitted_at: "2023-02-12",
//         score: 150
//     }
//     },
//     {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: {
//         submitted_at: "2023-01-25",
//         score: 400
//     }
//     },
//     {
//     learner_id: 132,
//     assignment_id: 1,
//     submission: {
//         submitted_at: "2023-01-24",
//         score: 39
//     }
//     },
//     {
//     learner_id: 132,
//     assignment_id: 2,
//     submission: {
//         submitted_at: "2023-03-07",
//         score: 140
//     }
//     }
// ];

// function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//     {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//     },
//     {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//     }
//     ];

//     return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);


const courseInfo= {
    "id": 1,
    "name": "Psychology", 
};
const assignmentGroups = [
    {
        "id": 1,
        "name": "psych-Eval",
        "course_id": 1,
        "total_weight": 30 ,
        "assignments": [
            {
                "id": 101,
                "name": "homework-1",
                "due_at": "2023-12-06",
                "points_possible": 100
            },
            {
        "id": 2,
        "name": "wizard-Craft",
        "course_id": 1,
        "total_weight": 70,
        "assignments": [
            {
                "id": 102,
                "name": "fireOrWater",
                "due_at": "2050-01-01",
                "points_possible": 100
            }
        ]
            } 

        ]

    }
]

// i think i might have went overboard here i might have to dumb this down if it messes up


// object with key properties
const learnerEntries = [{
    "learner_id": 1,
    "assignment_id": 101,
    "submission": {
    "submission_at": "2023-12-05", 
    "score": 85, },
},
    {"learner_id": 1,
    "assignment_id": 102,
    "submission": {
    "submission_at": "2049-12-30",
    "score": 100, },

},
{
    "learner_id": 2,
    "assignment_id": 101,
    "submission": {
    "submission_at": "2023-12-30",
    "score": 5, },
},
{
    "learner_id": 2,
    "assignment_id": 102,
    "submission": {
    "submission_at": "2150-10-03",
    "score": 100, },
},
]
// transform will restructure the order

function transformData(courseInfo, assignmentGroups, learnerEntries) {
    const outputData = [];

    for (const assignmentGroup of assignmentGroups) {
        for (const submission of learnerEntries) {
        //     if (submission.assignment_id && assignmentGroup.assignments
        // }
    }
}

// The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element.///** */

let learnerEntry= outputData.find(entry => entry.id === submission.learner_id);
if (learnerEntry) {
    learnerEntry = {
        id: submission.learner_id,
        avg: "",
    }
};
outputData.push(learnerEntry);
}

// this is supposed to create a new entry per learner submission


// calculating learner average and scores
const assignment = aG.assignments.find(a => a.id === submission.assignment_id);

const weightedScore= (submission.submission.score / assignments.points_possible) * aG.total_weight;

learnerEntry.avg += weightedScore;

learnerEntry[assignment_id] = (submission.submission.score / assignment.points_possible) * 100;
return outputData;

const info = transformData(courseInfo, assignmentGroups, learnerEntries); 
console.log(info);

//this does NOT work i got lost somewhere it's not even asking me to put a bracket i think i broke it ;(
