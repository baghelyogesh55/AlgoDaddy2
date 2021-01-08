// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "There are ________ tuples in finite state machine.",
        answer: "5",
        options: [
            "4",
            "5",
            "6",
            "unlimited"
        ]
    },
    {
        numb: 2,
        question: "Language of finite automata is.",
        answer: "Type 3",
        options: [
            "Type 0",
            "Type 1",
            "Type 2",
            "Type 3"
        ]
    },
    {
        numb: 3,
        question: "Moore Machine is an application of:",
        answer: "Finite automata with output",
        options: [
            "Finite automata without input",
            "Finite automata with output",
            "Non- Finite automata with output",
            "None of the mentioned"
        ]
    },
    {
        numb: 4,
        question: "In mealy machine, the O/P depends upon?",
        answer: "State and Input",
        options: [
            "State",
            "Previous State",
            "State and Input",
            "Only Input"
        ]
    },
    {
        numb: 5,
        question: "Mealy and Moore machine can be categorized as:",
        answer: "Transducers",
        options: [
            "Inducers",
            "Transducers",
            "Turing Machines",
            "Linearly Bounder Automata"
        ]
    },
    {
        numb: 6,
        question: "Given the language L = {ab, aa, baa}, which of the following strings are in L*?<br>1) abaabaaabaa<br>2) aaaabaaaa<br>3) baaaaabaaaab<br>4) baaaaabaa ",
        answer: "1, 2 and 4",
        options: [
            "1, 2 and 3",
            "2, 3 and 4",
            "1, 2 and 4",
            "1, 3 and 4"
        ]
    },
    {
        numb: 7,
        question: "The length of the shortest string NOT in the language (over Σ = {a, b}) of the following regular expression is ______________.<br>a*b*(ba)*a*",
        answer: "3",
        options: [
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        numb: 8,
        question: "Which of the following is TRUE?",
        answer: "Every finite subset of a non-regular set is regular.",
        options: [
            "Every subset of a regular set is regular.",
            "Every finite subset of a non-regular set is regular.",
            "The union of two non-regular sets is not regular.",
            "Infinite union of finite sets is regular."
        ]
    },
    {
        numb: 9,
        question: "Which one of the following languages over the alphabet {0,1} is described by the regular expression: (0+1)*0(0+1)*0(0+1)*?",
        answer: "The set of all strings containing at least two 0’s",
        options: [
            "The set of all strings containing the substring 00.",
            "The set of all strings containing at most two 0’s.",
            "The set of all strings that begin and end with either 0 or 1",
            "The set of all strings containing at least two 0’s"
        ]
    },
    {
        numb: 10,
        question: "Let w be any string of length n is {0,1}*. Let L be the set of all substrings of w. What is the minimum number of states in a non-deterministic finite automaton that accepts L?",
        answer: "n+1",
        options: [
            "n-1",
            "n",
            "n+1",
            "2n-1"
        ]
    },
];