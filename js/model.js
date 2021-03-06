//// CONFIG ////

//// VARIABLES ////

// ------FOOD OBJECTS------

//// Beef burgers
const friesNDrinksBeef = {
  category: 'beef burgers',
  name: 'COMBO Burger',
  price: '+9',
  img: 'css/img/menuimg.jpg',
  description: 'Additional to get French Fries and Blue Lemonade Drink!',
};

const classic = {
  category: 'beef burgers',
  name: 'Classic',
  price: '14',
  img: 'css/img/menuimg.jpg',
  description:
    'Beef burger topped with JD Special Sauce, Cheese Sauce & Veggies (Onion, Tomato & Lettuce)',
};

const arabish = {
  category: 'beef burgers',
  name: 'Arabish',
  price: '14',
  img: 'css/img/menuimg.jpg',
  description:
    'Beef burger topped with JD Garlic Sauce& Vegies (Onion, Tomato & Lettuce)',
};

const breakfast = {
  category: 'beef burgers',
  name: 'Breakfast',
  price: '16',
  img: 'css/img/menuimg.jpg',
  description:
    'Beef burger topped with Egg, Cheese Sauce , JD Special Sauce & Veggies (Onion, Tomato, Lettuce)',
};

const kilobite = {
  category: 'beef burgers',
  name: 'Kilobite',
  price: '16',
  img: 'css/img/menuimg.jpg',
  description:
    'Beef burger topped with Bacon, Cheese Sauce, JD Special Sauce & Veggies (Onion, Tomato, Lettuce)',
};

const megabite = {
  category: 'beef burgers',
  name: 'Megabite',
  price: '27',
  img: 'css/img/menuimg.jpg',
  description:
    'Double beef burger topped with Bacon, Double Cheese, Cheese Sauce, JD Special Sauce & Veggies (Onion, Tomato, Lettuce)',
};

const gigabite = {
  category: 'beef burgers',
  name: 'Gigabite',
  price: '37',
  img: 'css/img/menuimg.jpg',
  description:
    'Triple beef burger topped with Bacon, Double Cheese, Cheese Sauce, JD Special Sauce & Veggies (Onion, Tomato, Lettuce)',
};

const terabite = {
  category: 'beef burgers',
  name: 'Terabite',
  price: '47',
  img: 'css/img/menuimg.jpg',
  description:
    'Quad beef burger topped with Bacon, Double Cheese, Cheese Sauce, JD Special Sauce & Veggies (Onion, Tomato, Lettuce)',
};

const allBeefBurgers = [
  friesNDrinksBeef,
  classic,
  arabish,
  breakfast,
  kilobite,
  megabite,
  gigabite,
  terabite,
];

//// Chicken burgers
const friesNDrinksChicken = {
  category: 'chicken burgers',
  name: 'COMBO Burger',
  price: '+9',
  img: 'css/img/menuimg.jpg',
  description: 'Additional to get French Fries and Blue Lemonade Drink!',
};

const classicChicken = {
  category: 'chicken burgers',
  name: 'Classic',
  price: '14',
  img: 'css/img/menuimg.jpg',
  description:
    'Chicken burger topped with JD Special Sauce, Cheese Sauce & Veggies (Onion, Tomato & Lettuce)',
};

const arabishChicken = {
  category: 'chicken burgers',
  name: 'Arabish',
  price: '14',
  img: 'css/img/menuimg.jpg',
  description:
    'Chicken burger topped with JD Garlic Sauce& Vegies (Onion, Tomato & Lettuce)',
};

const breakfastChicken = {
  category: 'chicken burgers',
  name: 'Breakfast',
  price: '16',
  img: 'css/img/menuimg.jpg',
  description:
    'Chicken burger topped with Egg, Cheese Sauce , JD Special Sauce & Veggies (Onion, Tomato, Lettuce)',
};

const kilobiteChicken = {
  category: 'chicken burgers',
  name: 'Kilobite',
  price: '16',
  img: 'css/img/menuimg.jpg',
  description:
    'Chicken burger topped with Bacon, Cheese Sauce, JD Special Sauce & Veggies (Onion, Tomato, Lettuce)',
};

const megabiteChicken = {
  category: 'chicken burgers',
  name: 'Megabite',
  price: '27',
  img: 'css/img/menuimg.jpg',
  description:
    'Double Chicken burger topped with Bacon, Double Cheese, Cheese Sauce, JD Special Sauce & Veggies (Onion, Tomato, Lettuce)',
};

const allChickenBurgers = [
  friesNDrinksChicken,
  classicChicken,
  arabishChicken,
  breakfastChicken,
  kilobiteChicken,
  megabiteChicken,
];

//// Value Meals

const vm1 = {
  category: 'value meals',
  name: 'VM 1',
  price: '27',
  img: 'css/img/menuimg.jpg',
  description:
    'Meal with 1 pc Beef burger steak topped with Gravy sauce, 02 pc broasted chicken with Garlic Sauce, double rice (dine-in only) & Blue Lemonade Drink',
};

const vm2 = {
  category: 'value meals',
  name: 'VM 2',
  price: '31',
  img: 'css/img/menuimg.jpg',
  description:
    'Meal with 1 pc classic burger, French Fries & 02 pc broasted chicken with Garlic Sauce & Blue Lemonade Drink',
};

const vm3 = {
  category: 'value meals',
  name: 'VM 3',
  price: '27',
  img: 'css/img/menuimg.jpg',
  description:
    'Meal with 02 pcs Beef burger steak topped with Gravy sauce, double rice (dine-in only) & Blue Lemonade Drink',
};

const vm4 = {
  category: 'value meals',
  name: 'VM 4',
  price: '25',
  img: 'css/img/menuimg.jpg',
  description:
    'Meal with 03 pcs Broasted Chicken with Gravy or Garlic Sauce, French Fries, Bun & Blue Lemonade Drink',
};

const vm5 = {
  category: 'value meals',
  name: 'VM 5',
  price: '25',
  img: 'css/img/menuimg.jpg',
  description:
    'Meal with 03 pcs Broasted Chicken with Gravy or Garlic Sauce, double rice (dine in only),  & Blue Lemonade Drink',
};

const vm6 = {
  category: 'value meals',
  name: 'VM 6',
  price: '27',
  img: 'css/img/menuimg.jpg',
  description:
    'Meal with spaghetti, 02 pcs broasted Chicken and Blue Lemonade Drink',
};

const vm7 = {
  category: 'value meals',
  name: 'VM 7',
  price: '27',
  img: 'css/img/menuimg.jpg',
  description:
    'Meal with 02 pcs Chicken burger steak topped with Gravy sauce, double rice (dine-in only) & Blue Lemonade Drink',
};

const allVM = [vm1, vm2, vm3, vm4, vm5, vm6];

//// Broasted Chicken

const bm = {
  category: 'broasted chicken',
  name: 'Budget Meal',
  price: '12',
  img: 'css/img/menuimg.jpg',
  description: '02 pc broasted chicken with rice and gravy or garlic sauce',
};

const bmDR = {
  category: 'broasted chicken',
  name: 'Double Rice Budget',
  price: '19',
  img: 'css/img/menuimg.jpg',
  description:
    '02 pc broasted chicken with 02 rice and gravy or garlic sauce and Blue Lemonade Drink',
};

const bucket10 = {
  category: 'broasted chicken',
  name: 'Bucket 10Pcs',
  price: '45',
  img: 'css/img/menuimg.jpg',
  description:
    '10 pc broasted chicken, spicy or regular with gravy or garlic sauce',
};

const bucket20 = {
  category: 'broasted chicken',
  name: 'Bucket 20Pcs',
  price: '85',
  img: 'css/img/menuimg.jpg',
  description:
    '20 pc broasted chicken, spicy or regular with gravy or garlic sauce',
};

const allBroastedChicken = [bm, bucket10, bucket20];

//// Drinks
const blueLemonade = {
  category: 'drinks',
  name: 'Blue Lemonade',
  price: '8',
  img: 'css/img/menuimg.jpg',
  description: 'Blue lemonade',
};

const softDrink = {
  category: 'drinks',
  name: 'Soft Drinks',
  price: '4',
  img: 'css/img/menuimg.jpg',
  description: 'Pepsi, Diet Pepsi, Mirinda, 7up, Mountain Dew',
};

const waterS = {
  category: 'drinks',
  name: 'Water Small',
  price: '2',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const waterL = {
  category: 'drinks',
  name: 'Water large',
  price: '5',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const allDrinks = [blueLemonade, softDrink, waterS, waterL];

//// Sides
const rice = {
  category: 'sides',
  name: 'Rice',
  price: '3.5',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const friesS = {
  category: 'sides',
  name: 'Fries Small',
  price: '6',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const friesL = {
  category: 'sides',
  name: 'Fries Large',
  price: '10',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const nachoFries = {
  category: 'sides',
  name: 'Nacho Fries',
  price: '??',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const garlicSauce = {
  category: 'sides',
  name: 'garlic Sauce',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const gravySauce = {
  category: 'sides',
  name: 'Gravy Sauce',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const bacon = {
  category: 'sides',
  name: 'Bacon',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const egg = {
  category: 'sides',
  name: 'Egg',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const cheeseSquare = {
  category: 'sides',
  name: 'Cheese Square',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const cheeseDip = {
  category: 'sides',
  name: 'Cheese Dip',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const JDSpecialSauce = {
  category: 'sides',
  name: 'JD Special Sauce',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const chipotle = {
  category: 'sides',
  name: 'Chipotle',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const ketchup = {
  category: 'sides',
  name: 'Ketchup',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const mayonaise = {
  category: 'sides',
  name: 'Mayonaise',
  price: '3',
  img: 'css/img/menuimg.jpg',
  description: '',
};

const allSides = [
  rice,
  friesS,
  friesL,
  nachoFries,
  garlicSauce,
  gravySauce,
  bacon,
  egg,
  cheeseSquare,
  cheeseDip,
  JDSpecialSauce,
  chipotle,
  ketchup,
  mayonaise,
];

const menu = [
  ...allBeefBurgers,
  ...allChickenBurgers,
  ...allVM,
  ...allBroastedChicken,
  ...allDrinks,
  ...allSides,
];
