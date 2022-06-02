import axios from "axios";

export const getCountries = () =>
  fetch("https://api.covid19api.com/countries").then((res) => res.json());

export const getReportByCountry = (country) =>
  axios.get(`https://api.covid19api.com/dayone/country/${country}`);

export const getMapById = (countyID) =>
  axios.get(
    `http://code.highcharts.com/mapdata/countries/${countyID}/${countyID}-all.geo.json`
  );
