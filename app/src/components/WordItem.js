import React, { Component } from "react";
import { Grid, Paper, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {},

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },

  content: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  cardStyle: {
    padding: 10
  },
  orthStyle: {
    fontWeight: "bold",
    fontSize: 30
  },
  spanStyle: {
    display: "block",
    padding: 8
  },

  quoteStyle: {
    color: "#0096ab",
    fontSize: 20,
    fontWeight: "bold"
  },
  transExampleStyle: {
    color: "#0096ab",
    fontSize: 20
  },

  gramInfoStyle: {
    background: "#e5ebf3",
    padding: "10px 15px",
    margin: "0 -15px 1em -15px"
  },

  idiomHeadStyle: {
    content: "",
    marginRight: "10px",
    fontWeight: "bold",
    border: "solid blue",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(-45deg)",
    webkitTransform: "rotate(-45deg)"
  },

  expressionsStyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#234b9a",
    fontFamily: "Zilla Slab"
  },

  posTagStyle: {
    fontSize: "0.7rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Zilla Slab"
  }
}));

const WordItem = ({ word }) => {
  const classes = useStyles();
  return (
    <Container className={classes.content}>
      <Grid item xs={12}>
        <Paper className={classes.cardStyle}>
          <Typography className={classes.gramInfoStyle}>
            {word && word.asuddimIsem != null ? (
              <span className={classes.spanStyle}>{word.asuddimIsem}</span>
            ) : (
              <p className={classes.orthStyle}>{word.orth} </p>
            )}{" "}
          </Typography>
          {word &&
            word.gramGrp.map(i => (
              <p>
                <span> {i.pos}: </span>
                {word.pron != null ? <span>{word.pron}</span> : null}{" "}
                {i.pt != null ? (
                  <span>
                    ( <i>past tense</i> <strong>{i.pt}</strong>
                  </span>
                ) : (
                  <span>
                    {i.talgha != null ? (
                      <span>
                        <i>(</i> <strong>{i.talgha}</strong>)
                      </span>
                    ) : null}
                  </span>
                )}
                {i.pp != null ? (
                  <span>
                    {" "}
                    <i>past participle</i> <strong>{i.pp}</strong>)
                  </span>
                ) : null}
                {i.fem != null ? (
                  <span>
                    {" "}
                    ( <i>unti</i> <strong>{i.fem}</strong>
                  </span>
                ) : null}
                {i.pl != null ? (
                  <span>
                    {" "}
                    <i>asget</i> <strong>{i.pl}</strong>)
                  </span>
                ) : null}
              </p>
            ))}
          {word &&
            word.sense.map(meaning => (
              <ul>
                {meaning.translation.map(quotes => (
                  <Typography>
                    <li className={classes.quoteStyle}>{quotes.quote}</li>
                    <div>
                      {quotes.examples != null ? (
                        <p>
                          {quotes.examples.map(i => (
                            <p>
                              - {i.example + ": "}
                              <i>{i.transExample}</i>
                            </p>
                          ))}
                        </p>
                      ) : null}
                    </div>
                  </Typography>
                ))}
                {meaning.expression != null ? (
                  <Typography>
                    <i className="fa fa-angle-double-right"></i>{" "}
                    <span> Expressions: Tinfaliyin</span>
                    {meaning.expression.map(quotes => (
                      <div>
                        <li>
                          {" "}
                          {quotes.quote}: {quotes.transExample}
                        </li>
                      </div>
                    ))}
                  </Typography>
                ) : null}
              </ul>
            ))}
        </Paper>
      </Grid>
    </Container>
  );
};

export default WordItem;
