var left;
var opacity;
var underlines = ['google', 'twitch', 'akamai', 'others', 'home']
var pastUnderlines = ['twitch', 'akamai', 'others']

if (screen.width < 1024) {
    left = "5%";
    opacity = 0.3;
} else {
    left = "15%";
    opacity = 0.4;
}

$(document).ready(function() {
    $('.container').css({opacity: 0, left: "+=10"}).animate({left: left, opacity: 1});

    underlines.forEach(function(label) {
        // clicking underline
        $('.link-' + label).click(function() {
            if ($('.sub-' + label).css("display") == "none") {
                expand(label);
            } else {
                reset(label);
            }
        });

        // click bullet arrow to reset
        $('.arrow-' + label).click(function() {
            if ($('.sub-' + label).css("display") != "none") {
                reset(label);
            }
        });
    });
});

function expand(item) {
    // reset other open subs
    underlines.forEach(function(label) {
        if (pastUnderlines.includes(item) && !pastUnderlines.includes(label)) {
            reset(label);
        } else if (!pastUnderlines.includes(item) && label != item) {
            reset(label);
        }
    });

    $('.arrow-' + item).removeClass('fa-angle-double-right').addClass('fa-angle-up');

    $('.title').css("opacity", opacity);
    $('.subtitle').css("opacity", opacity);
    $('li').not('.nofade-' + item).css("opacity", opacity);

    $('.sub-' + item).fadeIn();
}

function reset(item) {
    $('.sub-' + item).fadeOut('fast', function() {
        // callback function
        // only reset arrow if all subs below are hidden
        if (pastUnderlines.includes(item)) {
            var resetArrow = true;
            pastUnderlines.forEach(function(label) {
                console.log($('.sub-' + label).css("display"));
                if ($('.sub-' + label).css("display") != "none") resetArrow = false;
            });
            if (resetArrow) $('.arrow-' + item).removeClass('fa-angle-up').addClass('fa-angle-double-right');
        } else {
            $('.arrow-' + item).removeClass('fa-angle-up').addClass('fa-angle-double-right');
        }
    });

    $('.title').css("opacity", 1);
    $('.subtitle').css("opacity", 1);
    $('li').not('.nofade-' + item).css("opacity", 1);
}
