var left;
var opacity;

if (screen.width < 1024) {
    left = "5%";
    opacity = 0.3;
} else {
    left = "15%";
    opacity = 0.4;
}

$(document).ready(function() {
    $('.container').css({opacity: 0, left: "+=15"}).animate({left: left, opacity: 1});
});
