import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Search from "./components/Search";
import Words from "./components/Words";
import WordItem from "./components/WordItem";
import Navbar from "./components/layout/Navbar";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      word: "",
      optionValue: "English-Kabyle"
      //optionValue: "Taqbaylit-Tanglizit"
    };
  }

  handleSubmit = searchTerm => {
    axios
      .get("/api/lexemes", {
        params: {
          searchTerm: searchTerm,
          optionValue: this.state.optionValue
        }
      })
      .then(
        res => {
          console.log("Word Item: " + res.data);

          this.setState({
            words: res.data
          });
          console.log("The word returned: " + this.state.word);

          //this.setState({ lexemes: res.data, key: Date.now() });
        },
        error => {
          alert(error);
        }
      );
  };

  getData = () => {
    axios
      .get("/api")
      .then(res => {
        console.log(res.data);
        this.setState({
          words: res.data
        });
      })
      .catch(error => console.log(error));
  };

  //   getData = async () => {
  //     let res = await axios.get("/api");
  //     let { data } = res.data;
  //     this.setState({ words: data });
  // };

  componentWillMount() {
    this.getData();
  }

  render() {
    const { word, words } = this.state;
    console.log(this.state.words);
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Navbar />
              <Search onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <Words words={words} />
            </Grid>
            <Grid item xs={8}>
              <WordItem word={word} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
