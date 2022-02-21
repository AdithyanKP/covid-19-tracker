import React from "react";

//Components//
import { Cards } from "./components/Cards/Card";
import Countrypicker from "./components/CountryPicker/CountryPicker";
import Charts from "./components/Chart/Chart";
import coronaImage from "./Images/image.png";
//Css//
import styles from "./App.module.css";
//api//
import { fetchData } from "./api";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    console.log(country);
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
    //set state
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid-19" />
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default App;
