"use strict";window.addEventListener("DOMContentLoaded",function(){var c=document.querySelectorAll(".container__menu__link"),t=document.querySelector(".menu__wrapper"),o=document.querySelectorAll(".tabcontent__descr"),a=document.querySelectorAll(".tabcontent_photo"),i=document.querySelectorAll(".container__content__descr__text"),e=document.querySelector(".container__menu"),n=document.querySelectorAll(".header__links__link"),s=document.querySelector(".header__links"),l=document.querySelector(".container__content__photo_wrapper"),r=document.querySelectorAll(".container__content__descr__heading");function d(t){n.forEach(function(t){t.classList.remove("active")}),0<t&&(e.style.display="none",o.forEach(function(t){t.style.display="none"}),a.forEach(function(t){t.style.display="none"}),l.style.cssText="width: 1040px;")}function u(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;n[t].classList.add("active"),c.forEach(function(t){t.classList.remove("active")}),0==t&&(c[t].classList.add("active"),e.style.display="flex",o[t].style.display="block",a[t].style.display="block",l.style.cssText="width: 758px;")}s.addEventListener("click",function(t){var s=t.target;s&&s.classList.contains("header__links__link")&&n.forEach(function(t,e){s==t&&(d(e),u(e))})}),d(),u(),o.forEach(function(t){t.style.cssText="display: none;"}),a.forEach(function(t){t.style.display="none"}),c.forEach(function(t){t.classList.remove("active")}),function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;r[t].classList.add("transit"),i[t].classList.add("transit"),o[t].style.display="block",c[t].classList.add("active"),a[t].style.display="block",c[t].classList.add("active")}(),t.addEventListener("click",function(t){var n=t.target;n&&n.classList.contains("container__menu__link")&&c.forEach(function(t,e){var s;n==t&&(r.forEach(function(t){t.classList.remove("showup"),t.classList.add("fadeout")}),i.forEach(function(t){t.classList.remove("showup"),t.classList.add("fadeout")}),setTimeout(function(){o.forEach(function(t){t.style.cssText="display: none;"}),a.forEach(function(t){t.style.display="none"})},500),c.forEach(function(t){t.classList.remove("active")}),c[s=e].classList.add("active"),setTimeout(function(){o[s].style.cssText="display: block;",a[s].style.display="block",r.forEach(function(t){t.classList.remove("fadeout"),t.classList.add("showup")}),i.forEach(function(t){t.classList.remove("fadeout"),t.classList.add("showup")})},510))})})});