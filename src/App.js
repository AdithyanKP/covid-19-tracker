import React from "react";

//Components//
import { Card } from "./components/Cards/Card";
import Countrypicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";

//Css//
import styles from "./App.module.css";
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Card />
        <Countrypicker />
        <Chart />
      </div>
    );
  }
}
export default App;
