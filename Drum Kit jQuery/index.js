$(".drum").on("click", function() {
    makeSound($(this).html());
    animateEffectClick(this);
});

$(document).on("keypress", function(e) {
    makeSound(e.key);
    animateEffectKeypress(e.key);
});

function makeSound(e) {
    var audio = "";

    switch (e) {
        case ("w"):
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case ("a"):
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case ("s"):
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case ("d"):
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case ("j"):
            audio = new Audio("./sounds/snare.mp3");
            break;
        case ("k"):
            audio = new Audio("./sounds/crash.mp3");
            break;
        case ("l"):
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        default:
            console.log("Error!");
    }
    audio.play();
}

function animateEffectClick(e) {
    console.log(e);

    $(e).animate({opacity: "0.5"});
    $(e).addClass("activated");
    
    setTimeout(function() {
        $(e).animate({opacity: "1.0"});
        $(e).removeClass("activated");
    }, 1000);
}

function animateEffectKeypress(e) {
    console.log(e);

    $("." + e).animate({opacity: "0.5"});
    $("." + e).addClass("activated");

    setTimeout(function() {
        $("." + e).animate({opacity: "1.0"});
        $("." + e).removeClass("activated");
    }, 1000);
}