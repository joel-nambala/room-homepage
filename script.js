'use strict';

const data = [
  {
    img: './images/desktop-image-hero-1.jpg',
    head: 'Discover innovative <br />ways to decorate',
    desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    img: './images/desktop-image-hero-2.jpg',
    head: 'We are available all across the globe',
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    img: './images/desktop-image-hero-3.jpg',
    head: 'Manufactured with the best materials',
    desc: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];

let currentItem = 0;

// Select DOM elements
const btnLeft = document.querySelector('.header-btn--left');
const btnRight = document.querySelector('.header-btn--right');
const headerImg = document.querySelector('.header-img');
const headerTitle = document.querySelector('.header-title');
const headerText = document.querySelector('.header-text');
const navMenu = document.querySelector('.nav-menu');
const headerLogoClose = document.querySelector('.header-logo-close');
const headerList = document.querySelector('.header-list');

const showPage = function (page) {
  const item = data[page];
  headerImg.src = item.img;
  headerTitle.innerHTML = item.head;
  headerText.innerHTML = item.desc;
};

btnRight.addEventListener('click', function () {
  currentItem++;
  if (currentItem > data.length - 1) currentItem = 0;
  showPage(currentItem);
});

btnLeft.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) currentItem = data.length - 1;
  showPage(currentItem);
});

window.addEventListener('load', function () {
  showPage(currentItem);
});

navMenu.addEventListener('click', function () {
  headerList.style.display = 'flex';
  headerList.classList.add('show-nav');
});

headerLogoClose.addEventListener('click', function () {
  headerList.style.display = 'none';
  headerList.classList.remove('show-nav');
});
