const inquirer = require('inquirer');
const colors = require('colors');
const opn = require('opn');
const react = require('react');
var orm = require('./config/orm.js');
var userName = "";
let gameCounter = 0;
var time = "";
var display = function() {
    orm.getScores("scores", "score_number", "time_play");
};


function getName(){
    inquirer.prompt([
        {
          type: "input",
          name: "player",
          message: "Who are you???"
        }]).then(function(user) {
            userName=user.player;
            console.log(" Prey: " + user.player);
            firstRound();
        }
    );
 }
 

function gameOver(){
    function myFunction(){
    time = new Date().toLocaleTimeString();
    orm.addScores("scores", userName, gameCounter, time);
    myFunction2();
    }
    function myFunction2(){
    display();
    setTimeout(openWindow,1000);
    }
    function openWindow() { 
        if(gameCounter<13){
        console.log("You were eaten at " + time); 
        opn( 'http://localhost:3000', function (err) {
            if ( err ) throw err;
          });
        }
        else{
            console.log("############### YOU WIN ###############");
            console.log("You killed Shia at " + time);    

        }
        }
    myFunction()
}


function firstRound() {
    gameCounter++;
    console.log(" \n You're walking into the woods.");
    function myFunction() {
        console.log(" There's no one around and your phone is dead.");
    }
    function myFunction2() {
        console.log(" Out of the corner of your eye, you spot Shia Labeouf.");
        setTimeout(secondRound,2000);

    }
    setTimeout(myFunction,500);
    setTimeout(myFunction2,1000);

}

function secondRound() {
    gameCounter++;
    console.log(" \n He's following you,");
    function myFunction() {
        console.log(" He gets down on all fours and breaks into a sprint.");
    }
    function myFunction2() {
        console.log(" He's gaining on you. ");
        setTimeout(thirdRound,2000);

    }
    setTimeout(myFunction,500);
    setTimeout(myFunction2,1000);
}

function thirdRound() {
    gameCounter++;
    console.log(" \n He's almost upon you now, and you can see there's blood on his face.");

    function myFunction() {
        console.log(" My God, there's blood everywhere! ");
    }
    function myFunction2() {
        console.log(" You're looking for your car, but you're all turned around. \n");
        function myFunction3(){
        inquirer.prompt([{
            type: "list",
            message: "WHAT DO YOU DO?! \n",
            choices: ["Fight", "Run \n"],
            name: "userGuess",
        }]).then(function(answers) {
            if(answers.userGuess==="Fight"){
                function myFunction4(){
                console.log("You were too busy fangirling and he ate you!".red);
                gameOver();
                }
                setTimeout(myFunction4,1000);
            }
            else{
                setTimeout(fourthRound,2000);
            }
        });
       }
       setTimeout(myFunction3,1000);
    }
    setTimeout(myFunction,500);
    setTimeout(myFunction2,1000);
}
function fourthRound(){
    gameCounter++;
    console.log(" He's brandishing a knife.");
    function myFunction() {
        console.log(" Hollywood superstar.");  
    }
    function myFunction2() {
        console.log(" Lurking in the shadows.");
    }
     function myFunction3() {
        console.log(" Living in the woods.");
    }
    function myFunction4() {
        console.log(" Killing for sport.");  
    }
     function myFunction5() {
        console.log(" Eating all the bodies.");
    }
    function myFunction6() {
        console.log(" Actual cannibal Shia LaBeouf.");
        setTimeout(fifthRound,2000); 
    }
     setTimeout(myFunction,500);
     setTimeout(myFunction2,1000);
     setTimeout(myFunction3,1500);
     setTimeout(myFunction4,2000);
     setTimeout(myFunction5,2500);
     setTimeout(myFunction6,3000);

}
function fifthRound(){
    gameCounter++;
    console.log(" \n You spot a cottage! \n")
    function myFunction(){
    inquirer.prompt([{
        type: "list",
        message: "WHAT DO YOU DO?! \n",
        choices: ["Head Towards The Cottage?", "Head Back To The Car? \n"],
        name: "userGuess",
    }]).then(function(answers) {
        if(answers.userGuess==="Head Back To The Car?"){
            function myFunction2(){
            console.log("You turned around and saw Shia and he ate you!".red);
            gameOver();
            }
            setTimeout(myFunction2,1000);
        }
        else{
            setTimeout(sixthRound,2000);
        }
    });
    }
    setTimeout(myFunction,1000);
}
function sixthRound(){
    gameCounter++;
    console.log(" \n Your leg got caught on a bear trap! \n")
    function myFunction(){
    inquirer.prompt([{
        type: "list",
        message: "WHAT DO YOU DO?! \n",
        choices: ["Gnaw off your leg?", "Pry the bear trap open?", "Yell for help from the shadows of the cottage? \n"],
        name: "userGuess",
    }]).then(function(answers) {
        if(answers.userGuess==="Pry the bear trap open?"){
            function myFunction2(){
            console.log("You forgot to hit arm day and you were too weak and he ate you!".red);
            gameOver();
            }
            setTimeout(myFunction2,1000);
        }
        else if(answers.userGuess==="Yell for help from the shadows of the cottage? \n"){
            function myFunction3(){
                console.log("All you did was make noise and he ate you!".red);
                gameOver();
                }
                setTimeout(myFunction3,1000);
        }
        else{
            setTimeout(seventhRound,2000);
        }
    });
}  
    setTimeout(myFunction,1000);

}

function seventhRound(){
    gameCounter++;
    console.log(" \n Now you're on the doorstep");
    function myFunction() {
        console.log(" Sitting inside, Shia LaBeouf");
    }
     function myFunction2() {
        console.log(" Hollywood superstar.");  
    }
    function myFunction3() {
        console.log(" Sharpening an axe, Shia LaBeouf");
    }
     function myFunction4() {
        console.log(" But he doesn't hear you enter, Shia LaBeouf");  
    }
    function myFunction5() {
        console.log(" You're sneaking up behind him... \n");
        function myFunction6(){
        inquirer.prompt([{
            type: "list",
            message: "WHAT DO YOU DO?! \n",
            choices: ["Hit him?", "Strangle him?", "Kick him? \n"],
            name: "userGuess",
        }]).then(function(answers) {
            if(answers.userGuess==="Hit him?"){
                function myFunction7(){
                console.log("Your arms are noodles and they barely tapped him and he ate you!".red);
                gameOver();
                }
                setTimeout(myFunction7,1000);
            }
            else if(answers.userGuess==="Kick him? \n"){
                function myFunction8(){
                    console.log("You forget you gnawwed off your foot and he ate you!".red);
                    gameOver();
                }
                 setTimeout(myFunction8,1000);
            }
            else{
                setTimeout(eigthRound,2000);
            }
        });
       }
       setTimeout(myFunction6,1000);
    }
     setTimeout(myFunction,500);
     setTimeout(myFunction2,1000);
     setTimeout(myFunction3,1500);
     setTimeout(myFunction4,2000);
     setTimeout(myFunction5,2500);
}
 function eigthRound(){
     gameCounter++;
     console.log(" \n While you were wrestling with Shia you stab him in the kidney with a knife you found! \n");
     setTimeout(ninthRound,2000);
 }

 function ninthRound(){
     gameCounter++;
     console.log(" You limp into the dark woods ");
     function myFunction() {
        console.log(" Blood oozing from your stump leg...");
     }
     function myFunction2() {
        console.log(" You've beaten Shia LaBeouf...");
    }
     setTimeout(myFunction,500);
     setTimeout(myFunction2,1000);
     setTimeout(tenthRound,2000);
 }

 function tenthRound(){
     gameCounter++;
     console.log(" \n Jokes ON YOU! SHIA WASN'T DEAD! HE PUTS A GUN TO YOUR HEAD! \n");
    function myFunction(){
     inquirer.prompt([{
        type: "list",
        message: "WHAT DO YOU DO?! \n",
        choices: ["Use the sword across the room?", "Use Jiu-Jitsu?", "Grab the gun? \n"],
        name: "userGuess",
    }]).then(function(answers) {
        if(answers.userGuess==="Use the sword across the room?"){
            function myFunction4() {
                console.log("It's across the room you idiot!".red);
                gameOver();
            }
            function myFunction2() {
                console.log("The wood creaked and he heard and ate you!".red);
                gameOver();
            }
            setTimeout(myFunction2,1000);
            setTimeout(myFunction4,2000);
        }
        else if(answers.userGuess==="Grab the gun? \n"){
            function myFunction3() {
                console.log("You forget to go to that self defense seminar and he shot and ate you!".red);
                gameOver();
            }
            setTimeout(myFunction3,1000);
        }
        else{
            setTimeout(eleventhRound,2000);
        }
    });
   }
   setTimeout(myFunction,1000);
 }

 function eleventhRound(){
     gameCounter++;
    console.log(" \n You fight a legendary battle with Shia!");
    
    function myFunction() {
        console.log(" But it's a normal Tuesday night for him.");
    }
    setTimeout(myFunction,1000);
    setTimeout(twelthRound,2000);
 }

 function twelthRound(){
     gameCounter++;
    console.log(" \n You swing an axe at him but he keeps dodging!");
    
    function myFunction() {
        console.log(" He attacks from the left! \n");
        function myFunction2(){
        inquirer.prompt([{
            type: "list",
            message: "WHAT DO YOU DO?! \n",
            choices: ["Dodge?", "Kick?", "Counter?"],
            name: "userGuess",
        }]).then(function(answers) {
            if(answers.userGuess==="Dodge?"){
                function myFunction3() {
                    console.log("You tripped on your gnawwed off nub and he ate you!".red);
                    gameOver();
                }
                setTimeout(myFunction3,1000);
            }
            else if(answers.userGuess==="Kick?"){
                function myFunction4() {
                    console.log("You forget you gnawwed off your foot and he ate you!".red);
                    gameOver();
                }
                setTimeout(myFunction4,1000);
            }
            else{
                setTimeout(thirteenthRound,2000);
            }
        });
        }
        setTimeout(myFunction2,1000);
    }
    setTimeout(myFunction,1000);
 }

 function thirteenthRound(){
     gameCounter++;
     console.log(" \n You catch him in the neck!");
     function myFunction() {
        console.log(" You're chopping off his head now...");
     }
     function myFunction2() {
        console.log(" You have just decapitated Shia LaBeouf!");
    }
    function myFunction3() {
        console.log(" His head topples to the floor, expressionless");
     }
     function myFunction4() {
        console.log(" You fall to your knees and catch your breath");
    }
    function myFunction5() {
        console.log(" You're finally safe from Shia LaBeouf...");
        gameOver();
    }
     setTimeout(myFunction,1000);
     setTimeout(myFunction2,2000);
     setTimeout(myFunction3,3000);
     setTimeout(myFunction4,4000);
     setTimeout(myFunction5,5000);

 }
 display();

setTimeout(getName,500);