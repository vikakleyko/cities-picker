"use strict";

const data = {
  RU: [
    {
      country: "Россия",
      count: "144500000",
      cities: [
        {
          name: "Рязань",
          count: "538962",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Москва",
          count: "12615882",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "Санкт-Петербург",
          count: "5383968",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Краснодар",
          count: "918145",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Екатеринбург",
          count: "1484456",
          link:
            "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Ростов-на-Дону",
          count: "1130305",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Воронеж",
          count: "1054537",
          link:
            "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Германия",
      count: 82175684,
      cities: [
        {
          name: "Берлин",
          count: "3613495",
          link:
            "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "Мюнхен",
          count: "1456039",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "Франкфурт-на-Майне",
          count: "736414",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Кёльн",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "Англия",
      count: 53012456,
      cities: [
        {
          name: "Лондон",
          count: " 8869898",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Манчестер",
          count: "545500",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Эдинбург",
          count: "488100",
          link:
            "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Бристоль",
          count: "567111",
          link:
            "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
  EN: [
    {
      country: "Russia",
      count: "144500000",
      cities: [
        {
          name: "Ryazan",
          count: "538962",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Moscow",
          count: "12615882",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "St Petersburg",
          count: "5383968",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Krasnodar",
          count: "918145",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Yekaterinburg",
          count: "1484456",
          link:
            "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Rostov-on-Don",
          count: "1130305",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Voronezh",
          count: "1054537",
          link:
            "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Germany",
      count: 82175684,
      cities: [
        {
          name: "Berlin",
          count: "3613495",
          link:
            "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "Munich",
          count: "1456039",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "frankfurt",
          count: "736414",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Cologne",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "United Kingdom",
      count: 53012456,
      cities: [
        {
          name: "London",
          count: " 8869898",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Manchester",
          count: "545500",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Edinburgh",
          count: "488100",
          link:
            "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Bristol",
          count: "567111",
          link:
            "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
  DE: [
    {
      country: "Russland",
      count: "144500000",
      cities: [
        {
          name: "Ryazan",
          count: "538962",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
        },
        {
          name: "Moskau",
          count: "12615882",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
        },
        {
          name: "Saint Petersburg",
          count: "5383968",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Krasnodar",
          count: "918145",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
        },
        {
          name: "Jekaterinburg",
          count: "1484456",
          link:
            "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Rostow",
          count: "1130305",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
        },
        {
          name: "Woronesch",
          count: "1054537",
          link:
            "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
        },
      ],
    },
    {
      country: "Deutschland",
      count: 82175684,
      cities: [
        {
          name: "Berlin",
          count: "3613495",
          link:
            "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD",
        },
        {
          name: "München",
          count: "1456039",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD",
        },
        {
          name: "Frankfurt",
          count: "736414",
          link:
            "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5",
        },
        {
          name: "Köln",
          count: "1080394",
          link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD",
        },
      ],
    },
    {
      country: "England",
      count: 53012456,
      cities: [
        {
          name: "London",
          count: " 8869898",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD",
        },
        {
          name: "Manchester",
          count: "545500",
          link:
            "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80",
        },
        {
          name: "Edinburgh",
          count: "488100",
          link:
            "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
        },
        {
          name: "Bristol",
          count: "567111",
          link:
            "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C",
        },
      ],
    },
  ],
};

class Country {
  constructor(input, defaultList, selectedList, autocompleteList) {
    this.input = document.getElementById(input);
    this.defaultList = document.querySelector(defaultList);
    this.selectedList = document.querySelector(selectedList);
    this.autocompleteList = document.querySelector(autocompleteList);
    this.linkButton = document.querySelector(".button");
    this.dataCities = data.EN;
  }

  generateList(items, list, amountOfCitiesToShow) {
    const col = document.createElement("div");
    col.className = "dropdown-lists__col";
    list.append(col);

    items.forEach((data) => {
      const countryBlock = document.createElement("div");

      countryBlock.className = "dropdown-lists__countryBlock";
      col.append(countryBlock);

      const totalLine = document.createElement("div");
      totalLine.className = "dropdown-lists__total-line";
      totalLine.style.display = data.cities.length > 0 ? "flex" : "none";
      totalLine.innerHTML = `
                  <div class="dropdown-lists__country">${data.country}</div>
                  <div class="dropdown-lists__count">${data.count}</div>`;
      countryBlock.append(totalLine);

      data.cities.forEach((city, index) => {
        if (index < amountOfCitiesToShow) {
          const line = document.createElement("div");
          line.className = "dropdown-lists__line";
          line.innerHTML = `
                  <div class="dropdown-lists__city">${city.name}</div>
                  <div class="dropdown-lists__count">${city.count}</div>`;
          countryBlock.append(line);
        }
      });
    });
  }

  select(country) {
    const selectedCountry = this.dataCities.filter(
      (item) => item.country === country
    );
    this.selectedList.textContent = "";
    this.selectedList.style.display = "block";
    this.defaultList.style.display = "none";
    this.generateList(selectedCountry, this.selectedList, Infinity);
  }

  unselect() {
    this.selectedList.style.display = "none";
    this.defaultList.style.display = "block";
  }

  handler() {
    document.addEventListener("click", (e) => {
      const target = e.target;
      let selectedItem;

      const label = document.querySelector(".label"),
        closeBtn = document.querySelector(".close-button"),
        selectCities = document.getElementById("select-cities");

      // on country click
      if (target.matches(".dropdown-lists__total-line")) {
        selectedItem = target.querySelector(".dropdown-lists__country")
          .innerText;
      }
      if (target.matches(".dropdown-lists__country")) {
        selectedItem = target.innerText;
      }
      if (
        target.matches(".dropdown-lists__count") &&
        target.closest(".dropdown-lists__total-line")
      ) {
        let item = target.closest(".dropdown-lists__total-line");
        selectedItem = item.querySelector(".dropdown-lists__country").innerText;
      }

      if (target.closest(".dropdown-lists__list--default")) {
        this.select(selectedItem);
      }

      // on city click
      if (target.matches(".dropdown-lists__line")) {
        selectedItem = target.querySelector(".dropdown-lists__country")
          .innerText;
        this.addLink(selectedItem);
      }
      if (target.matches(".dropdown-lists__city")) {
        selectedItem = target.innerText;
        this.addLink(selectedItem);
      }
      if (
        target.matches(".dropdown-lists__count") &&
        target.closest(".dropdown-lists__line")
      ) {
        let item = target.closest(".dropdown-lists__line");
        selectedItem = item.querySelector(".dropdown-lists__city").innerText;
        this.addLink(selectedItem);
      }

      if (selectedItem) {
        this.input.value = selectedItem;
        label.innerText = "";
        closeBtn.style.display = "block";
      }

      if (target.matches(".close-button")) {
        closeBtn.style.display = "none";
        this.input.value = "";
        this.selectedList.style.display = "none";
        this.defaultList.style.display = "block";
        this.autocompleteList.style.display = "none";
        this.linkButton.classList.add("disabled");
        this.linkButton.href = "#";
      }

      if (target.closest(".dropdown-lists__list--select")) {
        this.unselect(target.innerText);
      }
    });
  }

  addLink(cityName) {
    this.dataCities.forEach((country) => {
      country.cities.forEach((city) => {
        if (city.name === cityName) {
          this.linkButton.classList.remove("disabled");
          this.linkButton.href = city.link;
        }
      });
    });
  }

  filterCities(substr) {
    if (substr) {
      this.selectedList.style.display = "none";
      this.defaultList.style.display = "none";
      this.autocompleteList.style.display = "block";
    } else {
      this.selectedList.style.display = "none";
      this.defaultList.style.display = "block";
      this.autocompleteList.style.display = "none";
      this.linkButton.classList.add("disabled");
      this.linkButton.href = "#";
    }

    let list = [];

    this.dataCities.forEach((item) => {
      let cities = [];
      item.cities.forEach((c) => {
        if (c.name.toLowerCase().startsWith(substr.toLowerCase())) {
          cities.push(c);
        }
      });
      list.push({ country: item.country, count: item.count, cities: cities });
    });
    this.autocompleteList.textContent = "";
    this.generateList(list, this.autocompleteList, Infinity);
  }

  init() {
    this.input.addEventListener("click", () => {
      this.defaultList.textContent = "";
      this.generateList(this.dataCities, this.defaultList, 3);
    });
    this.input.addEventListener("input", () => {
      this.filterCities(this.input.value);
    });
    this.linkButton.addEventListener("click", () => {
          this.input.value = "";
    });
  }
}

const country = new Country(
  "select-cities",
  ".dropdown-lists__list--default",
  ".dropdown-lists__list--select",
  ".dropdown-lists__list--autocomplete"
);

country.init();
country.handler();
