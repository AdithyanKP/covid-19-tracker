import React from "react";

//Components//
import { Cards } from "./components/Cards/Card";
import Countrypicker from "./components/CountryPicker/CountryPicker";
import Charts from "./components/Chart/Chart";
import coronaImage from "./Images/images.png";
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
    const data = await fetchData();

    this.setState({ data });
  }
  handleCountryChange = async (country) => {
    console.log(country);
    const data = await fetchData(country);

    this.setState({ data, country: country });
    //set state
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1>Sahana Kannur</h1>
        <img className={styles.image} src={coronaImage} alt="Covid-19" />
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default App;
