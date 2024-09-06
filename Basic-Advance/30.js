// Clone "allBlogs" variable into a new variable named "allBlogsClone". 

var allBlogs = {
    id: 1,
    title: "JSON Serialization",
    body: "All about serialization inAlamofire",
    author: {
        id: 1,
        fullName: "Jeff Potter",
        username: "jpotts18"
    },
    comments: [
        {
            id: 1,
            body: "Thanksfor the help Jeff"
        },
        {
            id: 2,
            body: "Your Welcome, I am happy to help!"
        }
    ]
}


var allBlogsClone = {
    ...allBlogs, author: {
        ...allBlogs.author
    }, comments: [
        { ...allBlogs.comments[0] },
        { ...allBlogs.comments[1] }
    ]
}




// Clone the "person" variable into "clonedPerson." {--TRICKY--}

let person = [
    {
        input: { name: "Rayan" },
        output: { name: "Rayan" },
    },
    {
        input: { name: { first: "Rayan", last: "Galtz" } },
        output: { name: { firstName: "Rayan", lastName: "Galtz" } },
    },
    {
        input: { name: "Rayan", age: 24 },
        output: { name: "Rayan", age: 24 },
    },
    {
        input: {
            name: {
                first: "Rayan", last: "Glatz", birthday: { year: 1993, month: "Nov" },
            },
        },
        output: {
            firstName: "Ryan",
            lastName: "Glatz",
            birthdayYear: 1993,
            birthdayMonth: "Nov",
        },
    }
];

// NEW WAY

let clonedPerson = JSON.parse(JSON.stringify(person));


// JSON
// JSON {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ, rawJSON: ƒ, isRawJSON: ƒ}

// let string = JSON.stringify({name: "Shailesh"})
// undefined

// string
// '{"name":"Shailesh"}'

// convert object in string version into real object

// JSON.parse(string)
// {name: 'Shailesh'}




// Write a function named "cloneObject" that accepts an object and returns the clone of the object. 
// function cloneObject(){
// }

function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let user = {
    name: "John",
    house: "Stark",
    sisters: ["Arya", "Sansa"],
};
let cloned = cloneObject(user);

let uPerson = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "North 1st",
        city: "San Jose",
        state: "CA",
    },
};

let clonePerson = cloneObject(user);

console.log(
    `The user object is ${user === cloned ? 'not cloned' : 'cloned successfully'
    }`
);
console.log(
    `The user object is ${user === clonePerson ? 'not cloned' : 'cloned successfully'
    }`
);