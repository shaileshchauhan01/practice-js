// Scope Chain

// Global
let user = "Arya";

// Function Scope
function first() {
    let one = 100;                                  // access parent var

    function second() {
        let two = 200;                              // access parent var
        // console.log(one, two, three)             // error - three not defined
         // console.log(one, two)                   // 100 200

        function third() {
            let three = 300;                        // access all the varible 
            // console.log(one, two, three)         // 100 200 300
        }
        third();
    }
    second();
}
first();
