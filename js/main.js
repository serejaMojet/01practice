"use strict";
//  tabs__btn

const tabItem = document.querySelectorAll(".tabs__btn_item");

const tabContent = document.querySelectorAll(".tabs__content_item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn_item--active");
  });

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content_item--active");
  });

  tabTarget.classList.add("tabs__btn_item--active");

  document
    .querySelector(`#${button}`) // здесь была ошибка. Ставил querySelectorAll  !
    .classList.add("tabs__content_item--active");
}
