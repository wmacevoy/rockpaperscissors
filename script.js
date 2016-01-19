var options=['paper','rock','scissors'];

function announce(message) {
    document.getElementById("announcements").innerHTML=message;
}

function randomRange(m,n) {
    return Math.floor(Math.random()*(n-m+1))+m;
}

function randomElement(array) {
    var index=randomRange(0,array.length-1);
    return array[index];
}

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

function compare(a,b)
{
    var i=options.indexOf(a);
    var j=options.indexOf(b);

    if ((i+1)%3 == j) return  1;
    if ((j+1)%3 == i) return -1;
    return 0;
}

function setupButton(option) {
    var element = document.getElementById(option);
    element.onclick = function() { userChoose(option); }
}

function setup() {
    for (var i=0; i<options.length; ++i) {
        setupButton(options[i]);
    }
}

document.addEventListener('DOMContentLoaded', setup, false);
