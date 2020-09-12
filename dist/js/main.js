"use strict";

window.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.container__menu__link'),
        parentMenuLink = document.querySelector('.menu__wrapper'),
        menuContentDescr = document.querySelectorAll(".tabcontent__descr"),
        menuContentPhoto = document.querySelectorAll(".tabcontent_photo"),
        textBlock = document.querySelectorAll('.container__content__descr__text'),
        containerMenu = document.querySelector('.container__menu'),
        tabHeaderLinks = document.querySelectorAll('.header__links__link'),
        parentTabHeaderLink = document.querySelector('.header__links'),
        photoWrapper = document.querySelector('.container__content__photo_wrapper');
  let heading = document.querySelectorAll('.container__content__descr__heading');

  function hideTabContent(i) {
    tabHeaderLinks.forEach(item => {
      item.classList.remove('active');
    });

    if (i > 0) {
      containerMenu.style.display = 'none';
      menuContentDescr.forEach(item => {
        item.style.display = 'none';
      });
      menuContentPhoto.forEach(item => {
        item.style.display = 'none';
      });
      photoWrapper.style.cssText = 'width: 1040px;';
    }
  }

  function showTabContent(i = 0) {
    tabHeaderLinks[i].classList.add('active');
    menuLinks.forEach(item => {
      item.classList.remove('active');
    });

    if (i == 0) {
      menuLinks[i].classList.add('active');
      containerMenu.style.display = 'flex';
      menuContentDescr[i].style.display = 'block';
      menuContentPhoto[i].style.display = 'block';
      photoWrapper.style.cssText = 'width: 758px;';
    }
  }

  parentTabHeaderLink.addEventListener('click', e => {
    const target = e.target;

    if (target && target.classList.contains('header__links__link')) {
      tabHeaderLinks.forEach((item, i) => {
        if (target == item) {
          hideTabContent(i);
          showTabContent(i);
        }
      });
    }
  });

  function hideMenuContent() {
    menuContentDescr.forEach(item => {
      item.style.cssText = 'display: none;';
    });
    menuContentPhoto.forEach(item => {
      item.style.display = 'none';
    });
    menuLinks.forEach(item => {
      item.classList.remove('active');
    });
  }

  function showMenuContent(i = 0) {
    heading[i].classList.add('transit');
    textBlock[i].classList.add('transit');
    menuContentDescr[i].style.display = 'block';
    menuLinks[i].classList.add('active');
    menuContentPhoto[i].style.display = 'block';
    menuLinks[i].classList.add('active'); // heading.forEach((item) => {
    //     item.classList.add('moving');
    // });
    // textBlock.forEach((item) => {
    //     item.classList.add('moving');
    // });
  }

  function hideChangeContent() {
    heading.forEach(item => {
      item.classList.remove('showup');
      item.classList.add('fadeout');
    });
    textBlock.forEach(item => {
      item.classList.remove('showup');
      item.classList.add('fadeout');
    });
    setTimeout(() => {
      menuContentDescr.forEach(item => {
        item.style.cssText = 'display: none;';
      });
      menuContentPhoto.forEach(item => {
        item.style.display = 'none';
      });
    }, 500);
    menuLinks.forEach(item => {
      item.classList.remove('active');
    });
  }

  function showchangeContent(i) {
    menuLinks[i].classList.add('active');
    setTimeout(() => {
      menuContentDescr[i].style.cssText = 'display: block;';
      menuContentPhoto[i].style.display = 'block';
      heading.forEach(item => {
        item.classList.remove('fadeout');
        item.classList.add('showup');
      });
      textBlock.forEach(item => {
        item.classList.remove('fadeout');
        item.classList.add('showup');
      });
    }, 510);
  }

  hideTabContent();
  showTabContent();
  hideMenuContent();
  showMenuContent();
  parentMenuLink.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('container__menu__link')) {
      menuLinks.forEach((item, i) => {
        if (target == item) {
          hideChangeContent();
          showchangeContent(i); // moving();
        }
      });
    }
  });
});