import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import { fetchcountries } from "../../api";
import styles from "./CountryPicker.module.css";
const Countrypicker = ({ handleCountryChange }) => {
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    const fechApi = async () => {
      setcountries(await fetchcountries());
    };
    fechApi();
  }, [setcountries]);
  console.log(countries);
  return (
    <div>
      <FormControl className={styles.FormControl}>
        <NativeSelect
          defaultValue={""}
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="global">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Countrypicker;
