import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Search from "./Search";
import Words from "./Words";
import WordItem from "./WordItem";
import LandingPage from "./pages/LandingPage";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      word: "",
      optionValue: "",
      currentScreen: "LandingPage"
      //optionValue: "Taqbaylit-Tanglizit"
    };
  }

  filterWords = () => {
    this.words.filter(x => x.orth.indexOf(this.state.word) !== -1);
  };

  /*handleSubmit = (searchTerm, optionValue) => {
    axios
      .get("/api/lexemes", {
        params: {
          searchTerm: searchTerm,
          optionValue: optionValue
        }
      })
      .then(
        res => {
          console.log("Word Item: " + res.data);
          this.setState({
            words: res.data,
            currentScreen: "WordItem"
          });

          console.log("The word returned: " + this.state.word);

          //this.setState({ lexemes: res.data, key: Date.now() });
        },
        error => {
          alert("handleSubmit error " + error);
        }
      );
  };*/

  handleSubmit = async (searchTerm, optionValue) => {
    await axios
      .get("/api/lexemes", {
        params: {
          searchTerm: searchTerm,
          optionValue: optionValue
        }
      })
      .then(
        res => {
          console.log("Word Item: " + res.data);
          this.setState({
            words: res.data,
            currentScreen: "WordItem"
          });

          console.log("The word returned: " + this.state.word);

          //this.setState({ lexemes: res.data, key: Date.now() });
        },
        error => {
          alert("handleSubmit error " + error);
        }
      );
  };

  /*getData = () => {
    axios
      .get("/api")
      .then(res => {
        console.log(res.data);
        this.setState({
          words: res.data,
          currentScreen: "WordItem"
        });
      })
      .catch(error => console.log("getData erreor " + error));
  };*/

  //   getData = async () => {
  //     let res = await axios.get("/api");
  //     let { data } = res.data;
  //     this.setState({ words: data });
  // };

  /*componentWillMount() {
    this.getData();
  }*/

  render() {
    const { word, words } = this.state;
    console.log(this.state.words);
    if (this.state.currentScreen == "LandingPage") {
      return (
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <Search onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={12}>
                <LandingPage />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    } else if (this.state.currentScreen == "WordItem") {
      return (
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <Search onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={12}>
                <Words words={words} />
              </Grid>
              <Grid item xs={12}>
                <WordItem word={word} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }
}
