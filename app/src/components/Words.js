import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import WordItem from "./WordItem";

const Words = ({ words }) => {
  const wordlist = words.map(word => <WordItem word={word} />);
  return wordlist;
};

export default Words;
