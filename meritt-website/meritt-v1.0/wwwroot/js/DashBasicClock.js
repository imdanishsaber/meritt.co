
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var preSaleStartDate = new Date("12/31/2018 09:00:00 GMT +0000");
var preSaleEndDate = new Date("04/16/2018 09:00:00 GMT +0000");
var mainSaleDate = new Date("05/14/2018 09:00:00 GMT +0000");
var mainSaleEndDate = new Date("06/11/2018 09:00:00 GMT +0000");
var now = new Date();

var mainSaleWeek1End = new Date(mainSaleDate);
var mainSaleWeek2End = new Date(mainSaleDate);
var mainSaleWeek3End = new Date(mainSaleDate);
var mainSaleWeek4End = new Date(mainSaleDate);

mainSaleWeek1End.setDate(mainSaleDate.getDate() + 7);
mainSaleWeek2End.setDate(mainSaleDate.getDate() + 14);
mainSaleWeek3End.setDate(mainSaleDate.getDate() + 21);
mainSaleWeek4End.setDate(mainSaleDate.getDate() + 28);

var dashSaleTitle = $("#dash-sale-title");

var date;
var saleOn = true;
if (now < preSaleStartDate) {
    date = preSaleStartDate;
}
else if (now < preSaleEndDate) {
    dashSaleTitle.text("Presale ends in:");
    date = preSaleEndDate;
}
else if (now < mainSaleDate) {
    $("#presale-tile").removeClass("active").addClass("disabled");
    $("#week1-tile").removeClass("disabled").addClass("active");
    dashSaleTitle.text("Main Sale starts in:");
    date = mainSaleDate;
}
else if (now < mainSaleEndDate) {
    // Main sale has started
    dashSaleTitle.text("Main Sale ends in:");
    $("#presale-tile").removeClass("active").addClass("disabled");
    if (now < mainSaleWeek1End) {
        $("#week1-tile").removeClass("disabled").addClass("active");
        dashSaleTitle.text("WEEK 1 BONUS ENDS IN:");
        date = mainSaleWeek1End;
    }
    else if (now < mainSaleWeek2End) {
        $("#week2-tile").removeClass("disabled").addClass("active");
        dashSaleTitle.text("WEEK 2 BONUS ENDS IN:");
        date = mainSaleWeek2End;
    }
    else if (now < mainSaleWeek3End) {
        $("#week3-tile").removeClass("disabled").addClass("active");
        dashSaleTitle.text("WEEK 3 BONUS ENDS IN:");
        date = mainSaleWeek3End;
    }
    else if (now < mainSaleWeek4End) {
        $("#week4-tile").removeClass("disabled").addClass("active");
        dashSaleTitle.text("WEEK 4 BONUS ENDS IN:");
        date = mainSaleWeek4End;
    }
}
else {
    dashSaleTitle.text("Join NOW!");
    saleOn = false;
}
if (saleOn) {
    initializeClock('clockdiv', date);
}
