// Задание №1

// Используя API со странами выведите список со всеми странами:
// API: https://restcountries.com/v3.1/all
let countries = document.querySelector("#list");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      countries.innerHTML += `<li>${element.name.common}</li>`;
    });
  });

// Задание №2

// Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
// Используйте fetch. Отобразите на странице имена персонажей из
// Рика и Морти в list.
let ram = document.querySelector(".list");
// let rick = "https://rickandmortyapi.com/api/character";
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) => {
      ram.innerHTML += `
        <li>
        <img src="${element.image}">
        <span>${element.name}</span>
      </li>`;
    });
  });

// Задание №3

// Рядом с именами отобразите все изображения
// которые вы получили со второго задания
