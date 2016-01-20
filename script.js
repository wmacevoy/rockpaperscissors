var options=['paper','rock','scissors'];

var whatBeats=function(choice) {
    if (choice === 'paper')    return 'scissors';
    if (choice === 'rock')     return 'paper';
    if (choice === 'scissors') return 'rock';
    return null;
}

// select random integer in range
var randomRange = function(lower,upper) {
    return Math.floor(Math.random()*(upper-lower+1))+lower;
};

// select random element
var randomElement = function(array) { 
    var index=randomRange(0,array.length-1);
    return array[index];
}

//
// dynamically change annoncements
//
var announce = function(message) {
    document.getElementById("announcements").innerHTML=message;
}

//
// function called when user makes a choice
//
var userChoose = function(userChoice)
{
    var computerChoice=randomElement(options);
    var message=null;

    if (whatBeats(computerChoice) === userChoice) {
        message="win";
    } else if (whatBeats(userChoice) === computerChoice) {
        message="lose";
    } else {
        message="tie";
    }

    announce(userChoice + " vs " + computerChoice + ": you " + message);
}

//
// wire in "onclick" events for the user buttons
//
function setupButton(option) {
    var element = document.getElementById(option);
    element.onclick = function() { userChoose(option); }
}

function setup() {
    for (var i=0; i<options.length; ++i) {
        setupButton(options[i]);
    }
}

// call setup once page is loaded
document.addEventListener('DOMContentLoaded', setup, false);
