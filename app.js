function turtleAmount() {
    let turtles = prompt("Welcome all turtle lovers! How many turtles do you own?");
    if (turtles > 0) {
        document.write("Wow you must love turtles!");
    }
    else {
        document.write("You can buy a turtle at our competition then!");
    }
}

function turtleQuestion() {

    let x = prompt("How much do you like turtles? (Enter a number from 1-10");
    while (x < 1 && x > 10){
        x = prompt("I'm sorry, your entry is invalid. Try again with a number from 1-10");
    }
    document.write("Here's your rating in turtles!"); 
    for (let i = 0; i < x; i++ ){
        document.write('<img src="t.png" alt="Turtle icons" />');   
    }
}

function namePrompt() {

    let name = prompt("What is your name?");
    if (!name){
        while (!name){
            name = prompt("enter a valid name.");
        }
    }
    document.write("hello ", name, "!");
}