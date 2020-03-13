import React, { Component } from "react";
import { Paper, TextField, InputLabel, FormControl } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "./Button";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

class Search extends Component {
  state = {
    searchTerm: "",
    value: "",
    optionValue: "English-Kabyle"
  };

  handleOptionChange = event => {
    this.setState({ optionValue: event.target.value });
  };
  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLatinButton = letter => {
    // alert(e);

    //this.setState({ latinBtn: e.target.value });
    this.setState({ searchTerm: this.state.searchTerm + letter });
  };

  handleSubmit = e => {
    const { searchTerm } = this.state;
    const { optionValue } = this.state;
    const { onFormSubmit } = this.props;
    const { handleOption } = this.props;
    e.preventDefault();

    onFormSubmit(searchTerm, optionValue);
  };

  componentDidMount() {
    this.nameInput.focus();
  }
  componentDidUpdate() {
    this.nameInput.focus();
  }

  render() {
    const root = {
      display: "flex",
      flexDirection: "column"
    };
    const input = {
      flex: 3,
      width: 400
    };
    const iconButton = {
      padding: 10
    };
    const formControl = {
      height: 28,
      margin: 4
    };

    const searchStyle = {
      padding: 0
    };

    return (
      <Container maxWidth="lg" style={{ marginTop: "55px" }}>
        <Paper elevation={6} style={{ padding: "25px", marginTop: "25px" }}>
          <Button letter="č" handleLatinButton={this.handleLatinButton} />
          <Button letter="ḍ" handleLatinButton={this.handleLatinButton} />
          <Button letter="ğ" handleLatinButton={this.handleLatinButton} />
          <Button letter="ԑ" handleLatinButton={this.handleLatinButton} />
          <Button letter="γ" handleLatinButton={this.handleLatinButton} />
          <Button letter="ṛ" handleLatinButton={this.handleLatinButton} />
          <Button letter="ṣ" handleLatinButton={this.handleLatinButton} />
          <Button letter="ṭ" handleLatinButton={this.handleLatinButton} />
          <Button letter="ẓ" handleLatinButton={this.handleLatinButton} />

          <form onSubmit={this.handleSubmit}>
            <TextField
              fullWidth
              label="Search..."
              value={this.state.searchTerm}
              onChange={this.handleChange}
              inputRef={input => {
                this.nameInput = input;
              }}
            />
          </form>
          <FormControl component="fieldset">
            <FormLabel component="legend">Language</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={this.state.optionValue}
              onChange={this.handleOptionChange}
            >
              <FormControlLabel
                value="English-Kabyle"
                control={<Radio />}
                label="English-Kabyle"
              />
              <FormControlLabel
                value="Taqbaylit-Tanglizit"
                control={<Radio />}
                label="Taqbaylit-Tanglizit"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Container>
    );
  }
}

export default Search;
