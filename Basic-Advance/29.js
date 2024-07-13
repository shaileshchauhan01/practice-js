// 1.Clone the blogs.

let blogs = [
    {
        id: 1,
        title: "post 1",
        body: "my first blog",
    },
    {
        id: 2,
        title: "post 2",
        body: "my second blog",
    },
    {
        id: 3,
        title: "post 3",
        body: "my third blog",
    },
];

let clonedBlogs = [
    // ...blogs          // Shallow cloning
    { ...blogs[0] },       // Deep cloning
    { ...blogs[1] },
    { ...blogs[2] }
]


// 2.Clone the questions.

let questions = [
    {
        prompt: "Why is the sky blue?",
        responses: ["Because the color is on sale at wallmart.",
        "because blue is pretier color."
]},
    {
        prompt: "Why are leaves usually green?",
        responses: ["So that green caterpillars can hide better.",
        "Because leaves like green color."
]},
];

let questionClone = [
    {...questions[0], responses: [
            ...questions[0].responses
]},
    {...questions[1], responses: [
            ...questions[1].responses
]}
]