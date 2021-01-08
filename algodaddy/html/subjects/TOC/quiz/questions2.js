// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "In NFA, this very state is like dead-end non final state:",
        answer: "REJECT",
        options: [
            "ACCEPT",
            "REJECT",
            "DISTINCT",
            "START"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is a regular language?",
        answer: "String with even number of Zero’s",
        options: [
            "String whose length is a sequence of prime numbers",
            "String with substring ww<sup>r</sup> in between",
            "String with even number of Zero’s",
            "Palindrome string"
        ]
    },
    {
        numb: 3,
        question: "The maximum number of transition which can be performed over a state in a DFA?<br>∑= {a, b, c}",
        answer: "3",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        numb: 4,
        question: "The maximum sum of in degree and out degree over a state in a DFA can be determined as:<br>∑= {a, b, c, d}",
        answer: "depends on the Language",
        options: [
            "4+4",
            "4+16",
            "4+0",
            "depends on the Language"
        ]
    },
    {
        numb: 5,
        question: "Arden’s theorem is true for:",
        answer: "Non-null transitions",
        options: [
            "More than one initial states",
            "Non-null transitions",
            "Null transitions",
            "None of the mentioned"
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