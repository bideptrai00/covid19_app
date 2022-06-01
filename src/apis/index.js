import axios from "axios";

export const getCountries = () =>
  axios.get("https://api.covid19api.com/countries");

export const getReportByCountry = (country) =>
  axios.get(`https://api.covid19api.com/dayone/country/${country}`);

export const getMapById = (countyID) =>
  axios.get(
    `http://code.highcharts.com/mapdata/countries/${countyID}/${countyID}-all.geo.json`
  );
