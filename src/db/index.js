import db from "quick.db";
import axios from "axios";
import $ from "cheerio";

const corona = new db.table("corona");

const getTotal = async () => {
  let response;

  try {
    response = await axios.get("https://www.worldometers.info/coronavirus/");
    if (response.status !== 200) {
      console.log("ERROR");
    }
  } catch (err) {
    return null;
  }

  const total = {
    cases: null,
    deaths: null,
    recovered: null,
  };

  const html = $.load(response.data);
  const numbers = html(".maincounter-number");

  for (let i = 0; i < numbers.length; i++) {
    const number = $(numbers[i])
      .children("span")
      .text()
      .trim();
    total[Object.keys(total)[i]] = number;
  }

  corona.set("total", total);
};

const getCountries = async () => {
  let response;

  try {
    response = await axios.get("https://www.worldometers.info/coronavirus/");
    if (response.status !== 200) {
      console.log("Error", response.status);
    }
  } catch (err) {
    return null;
  }

  const html = $.load(response.data);
  const table = html("table#main_table_countries");
  const headingsNodes = table.children("thead").find("th");
  const rowsNodes = table.children("tbody").children("tr");
  const names = {
    Country: "country",
    TotalCases: "total",
    NewCases: "newCases",
    TotalDeaths: "totalDeaths",
    NewDeaths: "newDeaths",
    TotalRecovered: "totalRecovered",
    ActiveCases: "activeCases",
    Serious: "serious",
  };
  const matchName = name => names[name] || name;
  let headings = [];
  let countries = [];

  for (let i = 0; i < headingsNodes.length; i++) {
    headings.push(
      matchName(
        $(headingsNodes[i])
          .text()
          .split(",")[0],
      ),
    );
  }

  for (let i = 0; i < rowsNodes.length - 1; i++) {
    const cells = $(rowsNodes[i]).children("td");
    let country = {};

    for (let o = 0; o < cells.length; o++) {
      const value = $(cells[o])
        .text()
        .trim();

      country = {
        ...country,
        [headings[o]]: value.length ? value : 0,
      };
    }

    countries.push(country);
  }

  corona.set("countries", countries);
};

setInterval(() => {}, 600000);
getCountries();
getTotal();

export default corona;
