//// CONFIG ////

//// VARIABLES ////

// --Storing section IDs--

const sectionAbout = document.querySelector('#section-about');
const sectionMenu = document.querySelector('#section-menu');
const sectionDelivery = document.querySelector('#section-delivery');

// --Containers--

const menuContainer = document.querySelector('.menu__list')

// --Food Objects--

const menuClassic = {
    category: 'Beef Burgers',
    name: 'This is new',
    price: '14',
    img: "css/img/menuimg.jpg",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, facere!'
}

const menuClassic2 = {
    category: 'Beef Burgers',
    name: 'Also new',
    price: '14',
    img: "css/img/menuimg.jpg",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, facere!'
}

const menu = [menuClassic, menuClassic2]

//// BUTTONS ////

// --Header--

const btnToAbout = document.querySelectorAll('.btn-to-about');
const btnToMenu = document.querySelectorAll('.btn-to-menu');
const btnToDelivery = document.querySelectorAll('.btn-to-delivery');

// --pairing buttons with section IDs

const btnWithID = [
    [btnToAbout, sectionAbout],
    [btnToMenu, sectionMenu],
    [btnToDelivery, sectionDelivery]
]

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
    weekEnd: [0, 1, 6],
    openAt: 10,
    closeAt: 23,
}

//// Used to get user's current time and updates it
const getCurrentTime = function () {
    curTime.date = new Date();
    curTime.weekDay = curTime.date.getDay();
    curTime.hours = curTime.date.getHours();
    curTime.min = curTime.date.getMinutes();
    curTime.sec = curTime.date.getSeconds();
}


//// Sets the restaurant schedule color to green if the current time is within opening times. By default, it's red.
const openRestaurant = function () {
    if (curTime.weekDay === restaurantSchedule.weekEnd.indexOf(curTime.weekDay) &&
        curTime.hours > restaurantSchedule.openAt &&
        curTime.hours < restaurantSchedule.closeAt) {
        document.documentElement.style.setProperty('--open-close', '#88ff00');
        setTimeout(openRestaurant, 10 * 60 * 1000);
        }

    if (curTime.weekDay !== restaurantSchedule.weekEnd.indexOf(curTime.weekDay) &&
        curTime.hours > restaurantSchedule.openAt &&
        curTime.hours < restaurantSchedule.closeAt) {
        document.documentElement.style.setProperty('--open-close', '#88ff00');
        setTimeout(openRestaurant, 10 * 60 * 1000);
    }
}

const init = function () {
    getCurrentTime();
    openRestaurant();
}

init();

//// Adding smooth scrolling to all section buttons.
btnWithID.forEach(arr => arr[0].forEach(btn => btn.addEventListener('click', function(e){
    e.preventDefault();

    const sectionCoords = arr[1].getBoundingClientRect();
    window.scrollTo({
        left: sectionCoords.left + window.pageXOffset,
        top: sectionCoords.top + window.pageYOffset,
        behavior: 'smooth',
    })
})))

// MENU_________________________________________________________________________

// Creating food card
const createCard = function (meal) {

    const cardMarkUp = `
    <div class="menu__card">
        <div class="menu__card__img-box">
            <div class="menu__card__price">
                <span class="menu__card__price--num">${meal.price}</span>
                <span class="menu__card__price--cur">aed</span>
            </div>
        <img src="${meal.img}" alt="${meal.name}" class="menu__img">
        </div>
        <div class="menu__card__title">
            ${meal.name}
        </div>
        <p class="menu__card__description">
            ${meal.description}
        </p>
    </div>
    `
    menuContainer.insertAdjacentHTML('beforeend', cardMarkUp);
}

const clearHTML = function () {
        // Clearing the HTML content first
        menuContainer.innerHTML = '';
}

clearHTML();

menu.forEach(meal => createCard(meal))

// DELIVERY_____________________________________________________________________
