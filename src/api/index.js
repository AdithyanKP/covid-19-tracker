import axios from "axios";

//basic url
const url = "https://covid19.mathdro.id/api";

//fetching alla data
export const fetchData = async (country) => {
  let changeableUrl = url;

  //if country selected if condition will follow
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recoverd, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    const modifiedData = {
      confirmed,
      recoverd,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {}
};

//fetching daily data for chart view
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

//using fetach available countries
export const fetchcountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
