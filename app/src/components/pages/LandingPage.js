import React, { Component } from "react";
import { Grid, Paper, Typography, Container } from "@material-ui/core";

export class LandingPage extends Component {
  render() {
    return (
      <Container style={{ marginTop: "180px" }}>
        <Grid item xs={12}>
          <Paper>
            <Typography>
              Anelmad: English-Kabyle and Kabyle-English dictionary is a new
              dictionary designed to meet the needs of Kabyle speakers
              throughout the world. It is intended for language learners,
              teachers, and anyone who needs to communicate in the English
              language. The current version of this dictionary includes 1900
              English words and hundreds of Kabyle words. Each entry includes
              the spelling of the word: when a word has a different US spelling,
              it is indicated. Also included is the pronunciation of the words
              (in the International Phonetic Alphabet). In addition to the many
              examples included for each entry word, a section called
              "Expressions" provides the most common expressions and idioms
              related to the word.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <Typography>
              Anelmad: Tanglizit-Taqbaylit, Taqbaylit-Tanglizit, d asegzawal
              amaynut, nessaram ad iԑiwen iqbayliyen anda ma llan. Asegzawal-a
              iwulem i yinelmaden n tegnizit, i yiselmaden-is daγen, d kra win
              yettnadin ad yesseqdec tutlayt n tegnizit, ama di lakul, ama deg
              uxeddim, ama anda nniḍen. Taẓrigt-a n usegzawal llan deg-s 1900 n
              wawalen n tenglizit akked d mya neγ mittin n wawalen n teqbaylit.
              Yal tawwurt n wawal tebna akka: talγa n wawal (ticki awal temgarad
              tira-ines gar Marikan akked Langliz, ad ilint i snat), anṭaq-ines,
              imedyaten, tinfaliyin i d-icudden ar wawal.
            </Typography>
          </Paper>
        </Grid>
      </Container>
    );
  }
}

export default LandingPage;
