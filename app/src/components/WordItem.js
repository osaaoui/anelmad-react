import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
const WordItem = ({ word }) => {
  return (
    <Grid item xs={12}>
      <Paper>
        <span>
          {word && word.asuddimIsem != null ? (
            <span>{word.asuddimIsem}</span>
          ) : (
            <p>{word.orth} </p>
          )}{" "}
        </span>
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
                <div>
                  <li>{quotes.quote}</li>
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
                </div>
              ))}
              {meaning.expression != null ? (
                <div>
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
                </div>
              ) : null}
            </ul>
          ))}
      </Paper>
    </Grid>
  );
};

export default WordItem;
