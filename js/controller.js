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

  if (clicked.classList.contains('call--us')) events.emit();
});

//////////////// GOOGLE MAPS

// Restaurant coordinates
const restaurantCoords = {
  lat: 25.263353,
  lng: 55.3305424,
};

//// Adding the map to the UI
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: restaurantCoords,
    zoom: 13, // 18, 13 for to show all area pricing
    disableDefaultUI: true,
    zoomControl: true,
  });

  // ADDING THE MARKER________________
  const marker = new google.maps.Marker({
    position: restaurantCoords,
    icon:
      'https://cdn.discordapp.com/attachments/711222589892329516/824924384560283648/Google_marker.png',
    map: map,
  });

  //// CREATING POLYGONS_______________
  // Define the LatLng Coords for the polygon's path.
  const greenAreaCoords = [
    { lat: 25.278554, lng: 55.327074 },
    { lat: 25.276609, lng: 55.315351 },
    { lat: 25.273392, lng: 55.306747 },
    { lat: 25.268654, lng: 55.307839 },
    { lat: 25.262801, lng: 55.313037 },
    { lat: 25.251786, lng: 55.329533 },
    { lat: 25.258074, lng: 55.330517 },
    { lat: 25.269269, lng: 55.342022 },
  ];

  // Constructing the polygon
  const greenArea = new google.maps.Polygon({
    paths: greenAreaCoords,
    strokeColor: 'rgba(0, 190, 101, 0.685)',
    strokeWeight: 1.5,
    fillColor: '#00ff00',
    fillOpacity: 0.2,
  });

  // RED_AREA
  const redAreaCoords = [
    { lat: 25.278554, lng: 55.327074 },
    { lat: 25.276609, lng: 55.315351 },
    { lat: 25.273392, lng: 55.306747 },
    { lat: 25.268654, lng: 55.307839 },
    { lat: 25.262801, lng: 55.313037 },
    { lat: 25.26777, lng: 55.303467 },
    { lat: 25.267517, lng: 55.297762 },
    { lat: 25.266062, lng: 55.29494 },
    { lat: 25.266528, lng: 55.292816 },
    { lat: 25.268197, lng: 55.292644 },
    { lat: 25.27076, lng: 55.295613 },
    { lat: 25.272953, lng: 55.296171 },
    { lat: 25.284725, lng: 55.318888 },
    { lat: 25.297849, lng: 55.335743 },
    { lat: 25.281104, lng: 55.355348 },
    { lat: 25.269269, lng: 55.342022 },
  ];

  const redArea = new google.maps.Polygon({
    paths: redAreaCoords,
    strokeColor: 'rgba(190, 0, 57, 0.315)',
    strokeWeight: 1.5,
    fillColor: '#ff0000',
    fillOpacity: 0.2,
  });

  // BLUE_AREA
  const blueAreaCoords = [
    { lat: 25.297849, lng: 55.335743 },
    { lat: 25.281104, lng: 55.355348 },
    { lat: 25.269269, lng: 55.342022 },
    { lat: 25.258074, lng: 55.330517 },
    { lat: 25.251786, lng: 55.329533 },
    { lat: 25.255547, lng: 55.323795 },
    { lat: 25.25102, lng: 55.320024 },
    { lat: 25.260816, lng: 55.308847 },
    { lat: 25.264541, lng: 55.301638 }, // 3rd st connect point
    { lat: 25.258175, lng: 55.297609 },
    { lat: 25.24659, lng: 55.285099 },
    { lat: 25.235204, lng: 55.304489 },
    { lat: 25.226989, lng: 55.321282 },
    { lat: 25.226045, lng: 55.325252 },
    { lat: 25.228887, lng: 55.332986 },
    { lat: 25.239142, lng: 55.342768 },
    { lat: 25.23, lng: 55.353261 },
    { lat: 25.219244, lng: 55.375228 },
    { lat: 25.2372, lng: 55.377417 },
    { lat: 25.247901, lng: 55.38679 },
    { lat: 25.25636, lng: 55.386746 },
    { lat: 25.271022, lng: 55.395738 },
    { lat: 25.287959, lng: 55.366377 }, // last connect point
    { lat: 25.290736, lng: 55.354342 },
    { lat: 25.301018, lng: 55.339118 },
  ];

  const blueArea = new google.maps.Polygon({
    paths: blueAreaCoords,
    strokeColor: 'rgba(28, 0, 190, 0.315)',
    strokeWeight: 1.5,
    fillColor: '#00a2ff',
    fillOpacity: 0.2,
  });

  const orangeAreaCoords = [
    { lat: 25.264541, lng: 55.301638 }, // 3rd st connect point
    { lat: 25.258175, lng: 55.297609 },
    { lat: 25.24659, lng: 55.285099 },
    { lat: 25.235204, lng: 55.304489 },
    { lat: 25.226989, lng: 55.321282 },
    { lat: 25.226045, lng: 55.325252 },
    { lat: 25.228887, lng: 55.332986 },
    { lat: 25.239142, lng: 55.342768 },
    { lat: 25.23, lng: 55.353261 },
    { lat: 25.219244, lng: 55.375228 },
    { lat: 25.2372, lng: 55.377417 },
    { lat: 25.247901, lng: 55.38679 },
    { lat: 25.25636, lng: 55.386746 },
    { lat: 25.271022, lng: 55.395738 },
    { lat: 25.287959, lng: 55.366377 }, // last connect point]
    { lat: 25.289496, lng: 55.359715 },
    { lat: 25.299983, lng: 55.363512 },
    { lat: 25.305778, lng: 55.374144 },
    { lat: 25.309247, lng: 55.377795 },
    { lat: 25.303264, lng: 55.385076 },
    { lat: 25.286793, lng: 55.427522 },
    { lat: 25.275562, lng: 55.419511 },
    { lat: 25.264707, lng: 55.409981 },
    { lat: 25.246793, lng: 55.404533 },
    { lat: 25.233115, lng: 55.403565 },
    { lat: 25.220138, lng: 55.404971 },
    { lat: 25.198393, lng: 55.396488 },
    { lat: 25.180275, lng: 55.396662 },
    { lat: 25.186101, lng: 55.364504 },
    { lat: 25.184774, lng: 55.32629 },
    { lat: 25.181018, lng: 55.315049 },
    { lat: 25.216414, lng: 55.251826 },
    { lat: 25.254254, lng: 55.283993 },
    { lat: 25.264486, lng: 55.289573 },
    // { lat: 0, lng: 0 },
  ];

  const orangeArea = new google.maps.Polygon({
    paths: orangeAreaCoords,
    strokeColor: 'rgba(190, 0, 0, 0.315)',
    strokeWeight: 1.5,
    fillColor: '#ff8800',
    fillOpacity: 0.2,
  });

  // if (events.events.callUsTabActive) {
  //   orangeArea.setMap(map);
  //   blueArea.setMap(map);
  //   redArea.setMap(map);
  //   greenArea.setMap(map);
  //   console.log('something');
  // }
}

////////////// Initialization

const init = function () {
  clearHTML();
  getCurrentTime();
  openRestaurant();

  menu.forEach(meal => createCard(meal));
};

init();
