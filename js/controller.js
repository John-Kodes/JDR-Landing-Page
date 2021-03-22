//// CONFIG ////


//// BUTTONS ////

// --Header--

const btnNav = document.querySelectorAll('.nav-item__link');
const btnHeader = document.querySelector('.btn');



// HEADER_______________________________________________________________________

//// current time variables
let date;
let weekDay;
let hours;
let min;
let sec;

const curTime = {
    date,
    weekDay,
    hours,
    min,
    sec,
}
const restaurantSchedule = {
    weekEnd: [5, 6],
    openAt: 11,
    closeAt: 23,
}

//// Used to get user's current time and updates it
const getCurrentTime = function () {
    curTime.date = new Date();
    curTime.weekDay = curTime.date.getDay();
    curTime.hours = curTime.date.getHours();
    curTime.min = curTime.date.getMinutes();
    curTime.sec = curTime.date.getSeconds();

    setTimeout(getCurrentTime, 1000);
}


getCurrentTime();

//// Sets the restaurant schedule color to green if the current time is within opening times. By default, it's red.
const openRestaurant = function () {
    if (curTime.weekDay !== restaurantSchedule.weekEnd.indexOf(curTime.weekDay) &&
        curTime.hours > restaurantSchedule.openAt &&
        curTime.hours < restaurantSchedule.closeAt) {
        document.documentElement.style.setProperty('--open-close', '#88ff00');
        setTimeout(openRestaurant, 1000);
        }
}

openRestaurant();

const test = function() {
    document.documentElement.style.setProperty('--open-close', '#ff9900');
}

btnHeader.addEventListener('click', test)