"use strict";var menuLinks=document.querySelectorAll(".container__menu__link"),parentMenuLink=document.querySelector(".menu__wrapper"),menuContentDescr=document.querySelectorAll(".tabcontent__descr"),menuContentPhoto=document.querySelectorAll(".tabcontent_photo"),textBlock=document.querySelectorAll(".container__content__descr__text"),containerMenu=document.querySelector(".container__menu"),tabHeaderLinks=document.querySelectorAll(".header__links__link"),parentTabHeaderLink=document.querySelector(".header__links"),photoWrapper=document.querySelector(".container__content__photo_wrapper"),heading=document.querySelectorAll(".container__content__descr__heading");function hideTabContent(e){tabHeaderLinks.forEach(function(e){e.classList.remove("active")}),0<e&&(containerMenu.style.display="none",menuContentDescr.forEach(function(e){e.style.display="none"}),menuContentPhoto.forEach(function(e){e.style.display="none"}),photoWrapper.style.cssText="width: 1040px;")}function showTabContent(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;tabHeaderLinks[e].classList.add("active"),menuLinks.forEach(function(e){e.classList.remove("active")}),0==e&&(menuLinks[e].classList.add("active"),containerMenu.style.display="flex",menuContentDescr[e].style.display="block",menuContentPhoto[e].style.display="block",photoWrapper.style.cssText="width: 758px;")}function hideMenuContent(){menuContentDescr.forEach(function(e){e.style.cssText="display: none;"}),menuContentPhoto.forEach(function(e){e.style.display="none"}),menuLinks.forEach(function(e){e.classList.remove("active")})}function showMenuContent(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;heading[e].classList.add("transit"),textBlock[e].classList.add("transit"),menuContentDescr[e].style.display="block",menuLinks[e].classList.add("active"),menuContentPhoto[e].style.display="block",menuLinks[e].classList.add("active")}function hideChangeContent(){heading.forEach(function(e){e.classList.remove("showup"),e.classList.add("fadeout")}),textBlock.forEach(function(e){e.classList.remove("showup"),e.classList.add("fadeout")}),setTimeout(function(){menuContentDescr.forEach(function(e){e.style.cssText="display: none;"}),menuContentPhoto.forEach(function(e){e.style.display="none"})},500),menuLinks.forEach(function(e){e.classList.remove("active")})}function showchangeContent(e){menuLinks[e].classList.add("active"),setTimeout(function(){menuContentDescr[e].style.cssText="display: block;",menuContentPhoto[e].style.display="block",heading.forEach(function(e){e.classList.remove("fadeout"),e.classList.add("showup")}),textBlock.forEach(function(e){e.classList.remove("fadeout"),e.classList.add("showup")})},510)}parentTabHeaderLink.addEventListener("click",function(e){var t=e.target;t&&t.classList.contains("header__links__link")&&tabHeaderLinks.forEach(function(e,n){t==e&&(hideTabContent(n),showTabContent(n))})}),hideTabContent(),showTabContent(),hideMenuContent(),showMenuContent(),parentMenuLink.addEventListener("click",function(e){var t=e.target;t&&t.classList.contains("container__menu__link")&&menuLinks.forEach(function(e,n){t==e&&(hideChangeContent(),showchangeContent(n))})});