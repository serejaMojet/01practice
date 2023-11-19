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

/* burger menu * --------------------- */

const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

// Обработчик клика по документу
document.addEventListener("click", (burgEvent) => {
  const target = burgEvent.target;

  // Проверка, является ли цель клика частью меню или кнопки меню
  const isMenuClicked = menu.contains(target) || menuBtn.contains(target);

  // Если клик был совершен вне меню, закрыть его
  if (!isMenuClicked && menu.classList.contains("menu--active")) {
    menu.classList.remove("menu--active");
  }
});

/* anchor  --------------------- */

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
