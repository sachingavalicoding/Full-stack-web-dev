const questions = [
  {
    id: 1,
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer:
      "'==' compares values for equality after type conversion if necessary, while '===' compares both value and type without performing any type conversion.",
  },
  {
    id: 2,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers its lexical scope, even when the function is executed outside of its original scope. It allows the function to access variables from its parent scope.",
  },
  {
    id: 3,
    question: "How can you check if a variable is an array in JavaScript?",
    answer:
      "You can check if a variable is an array using the Array.isArray() method, e.g., Array.isArray(variable).",
  },
  {
    id: 4,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer:
      "The 'this' keyword refers to the context in which a function is called. It can represent the global object, the object that calls the method, or be explicitly set using functions like call, apply, or bind.",
  },
  {
    id: 5,
    question: "What is event delegation in JavaScript?",
    answer:
      "Event delegation is a technique that allows you to handle events at a higher level in the DOM, instead of adding event listeners to individual child elements. This is achieved by taking advantage of event bubbling.",
  },
];

