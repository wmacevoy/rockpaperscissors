//
// this order matters: otherwise compare below
// will be incorrect.
//
var options=['paper','rock','scissors'];

//
// dynamically change annoncements
//
function announce(message) {
    document.getElementById("announcements").innerHTML=message;
}

//
// generate random integer from m,m+1,m+2,...,n
//
function randomRange(m,n) {
    return Math.floor(Math.random()*(n-m+1))+m;
}

//
// select random element from array
//
function randomElement(array) {
    var index=randomRange(0,array.length-1);
    return array[index];
}

//
// function called when user makes a choice
//
function userChoose(userChoice)
{
    var computerChoice=randomElement(options);
    var result=compare(userChoice,computerChoice);

    if (result < 0) {
        message="lose";
    } else if (result > 0) {
        message="win";
    } else {
        message="tie";
    }
    announce(userChoice + " vs " + computerChoice + ": you " + message);
}

//
// rank two choices
//
function compare(a,b)
{
    var i=options.indexOf(a);
    var j=options.indexOf(b);

    if ((i+1)%3 == j) return  1; // a wins
    if ((j+1)%3 == i) return -1; // b wins
    return 0; // tie
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
