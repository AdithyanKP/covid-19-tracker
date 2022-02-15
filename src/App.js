import React from "react";

//Components//
import { Cards } from "./components/Cards/Card";
import Countrypicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";

//Css//
import styles from "./App.module.css";
//api//
import { fetchData } from "./api";
class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Countrypicker />
        <Chart />
      </div>
    );
  }
}
export default App;
