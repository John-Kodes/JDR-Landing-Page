// --Storing section IDs--

const sectionAbout = document.querySelector('#section-about');
const sectionMenu = document.querySelector('#section-menu');
const sectionDelivery = document.querySelector('#section-delivery');

// --Containers--

const menuListSlides = document.querySelectorAll('.menu__list');
const menuTabsContainer = document.querySelector('.menu__tabs');

const deliveryTabsContainer = document.querySelector(
  '.delivery__guide__options'
);
const deliveryTabsContent = document.querySelectorAll('.delivery__paragraph');

//// BUTTONS ////

// --Header--
const btnToAbout = document.querySelectorAll('.btn-to-about');
const btnToMenu = document.querySelectorAll('.btn-to-menu');
const btnToDelivery = document.querySelectorAll('.btn-to-delivery');

// --Menu--
const btnMenuTabs = document.querySelectorAll('.btn--menu-tab');
const btnLeft = document.querySelectorAll('.btn__nav--left');
const btnRight = document.querySelectorAll('.btn__nav--right');

// --Delivery--
const btnDeliveryTabs = document.querySelectorAll('.btn--delivery');

// --pairing buttons with section IDs

const btnWithID = [
  [btnToAbout, sectionAbout],
  [btnToMenu, sectionMenu],
  [btnToDelivery, sectionDelivery],
];

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
};
const restaurantSchedule = {
  weekDay: [0, 1, 6],
  openAt: 10,
  closeAt: 23,
  closeMin: 59,
};

//// Used to get user's current time and updates it
const getCurrentTime = function () {
  curTime.date = new Date();
  curTime.weekDay = curTime.date.getDay();
  curTime.hours = curTime.date.getHours();
  curTime.min = curTime.date.getMinutes();
};

//// Sets the restaurant schedule color to green if the current time is within opening times. By default, it's red.
const openRestaurant = function () {
  if (
    curTime.weekDay === restaurantSchedule.weekDay.indexOf(curTime.weekDay) &&
    curTime.hours >= restaurantSchedule.openAt &&
    curTime.hours < restaurantSchedule.closeAt
  ) {
    document.documentElement.style.setProperty('--open-close', '#88ff00');
    setTimeout(openRestaurant, 10 * 60 * 1000);
  }

  if (
    curTime.weekDay !== restaurantSchedule.weekDay.indexOf(curTime.weekDay) &&
    curTime.hours >= restaurantSchedule.openAt &&
    curTime.hours <= restaurantSchedule.closeAt + 1 &&
    curTime.min <= restaurantSchedule.closeMin
  ) {
    document.documentElement.style.setProperty('--open-close', '#88ff00');
    setTimeout(openRestaurant, 10 * 60 * 1000);
  }

  if (curTime.hours < restaurantSchedule.openAt) {
    document.documentElement.style.setProperty('--open-close', '#ff002e');
    setTimeout(openRestaurant, 10 * 60 * 1000);
  }
};

//// Adding smooth scrolling to all section buttons.
btnWithID.forEach(arr =>
  arr[0].forEach(btn =>
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      const sectionCoords = arr[1].getBoundingClientRect();
      window.scrollTo({
        left: sectionCoords.left + window.pageXOffset,
        top: sectionCoords.top + window.pageYOffset,
        behavior: 'smooth',
      });
    })
  )
);

// MENU_________________________________________________________________________

// Creating food card
const createCard = function (meal) {
  let slide;

  if (meal.category === 'beef burgers') slide = 0;
  if (meal.category === 'chicken burgers') slide = 1;
  if (meal.category === 'value meals') slide = 2;
  if (meal.category === 'broasted chicken') slide = 3;
  if (meal.category === 'drinks') slide = 4;
  if (meal.category === 'sides') slide = 5;

  const cardMarkUp = `
    <div class="menu__card ${
      meal.name === 'COMBO Burger' ? 'menu__card--special' : ''
    }">
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
    `;
  menuListSlides[slide].insertAdjacentHTML('beforeend', cardMarkUp);
};

const clearHTML = function () {
  // Clearing the HTML content first
  menuListSlides.forEach(slide => (slide.innerHTML = ''));
};

let curSlide = 1;
const maxSlides = menuListSlides.length;

//// Tabbed component
menuTabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn--menu-tab');

  if (!clicked) return;

  // Removing all active classes
  btnMenuTabs.forEach(t => t.classList.remove('btn--menu-tab--active'));
  menuListSlides.forEach(c => c.classList.remove('menu__list--active'));

  curSlide = clicked.dataset.tab;

  // Adding active classes appropriately
  clicked.classList.add('btn--menu-tab--active');
  document
    .querySelector(`.menu__list--${curSlide}`)
    .classList.add('menu__list--active');
});

const goToSlide = function (slide) {
  btnMenuTabs.forEach(t => t.classList.remove('btn--menu-tab--active'));
  menuListSlides.forEach(c => c.classList.remove('menu__list--active'));

  document
    .querySelector(`.btn--menu-tab--${slide}`)
    .classList.add('btn--menu-tab--active');
  document
    .querySelector(`.menu__list--${slide}`)
    .classList.add('menu__list--active');
};

//// Next tab function
btnRight.forEach(btn =>
  btn.addEventListener('click', function (e) {
    const clicked = e.target.closest('.btn__nav--right');

    if (!clicked) return;

    if (curSlide >= maxSlides) curSlide = 1;
    else curSlide++;
    goToSlide(curSlide);
  })
);

//// Previous tab function
btnLeft.forEach(btn =>
  btn.addEventListener('click', function (e) {
    const clicked = e.target.closest('.btn__nav--left');

    if (!clicked) return;

    if (curSlide <= 1) curSlide = maxSlides;
    else curSlide--;
    goToSlide(curSlide);
  })
);

const menuButtons = [...btnLeft, ...btnRight];

menuButtons.forEach(btn =>
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    const adjustValue = 60;

    const sectionCoords = sectionMenu.getBoundingClientRect();
    window.scrollTo({
      left: sectionCoords.left + window.pageXOffset + adjustValue,
      top: sectionCoords.top + window.pageYOffset + adjustValue,
    });
  })
);

// const createMenuSlide

// DELIVERY_____________________________________________________________________

//// Tabbed component
deliveryTabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn--delivery');

  if (!clicked) return;

  // Removing all active classes
  btnDeliveryTabs.forEach(t => t.classList.remove('btn--delivery--active'));
  deliveryTabsContent.forEach(c =>
    c.classList.remove('delivery__paragraph--active')
  );

  // Adding active classes appropriately
  clicked.classList.add('btn--delivery--active');
  document
    .querySelector(`.delivery__paragraph--${clicked.dataset.tab}`)
    .classList.add('delivery__paragraph--active');
});

//////////////// GOOGLE MAPS

// Restaurant coordinates
const restaurantCoords = {
  lat: 25.263353,
  lng: 55.3305424,
};

//// Adding the map to the UI
let infoWindow;

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: restaurantCoords,
    zoom: 18,
    disableDefaultUI: true,
    zoomControl: true,
  });

  // Adding the marker
  const marker = new google.maps.Marker({
    position: restaurantCoords,
    icon:
      'https://cdn.discordapp.com/attachments/711222589892329516/824924384560283648/Google_marker.png',
    map: map,
  });
}

////////////// Initialization

const init = function () {
  clearHTML();
  getCurrentTime();
  openRestaurant();

  menu.forEach(meal => createCard(meal));
};

init();
