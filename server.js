const express = require("express");
const fs = require("fs");
const xml2js = require("xml2js");
const parser = new xml2js.Parser();
const bodyParser = require("body-parser");
const path = require("path");
//const generatePassword = require("password-generator");
const app = express();

//serve static files from the react app
//app.use(express.static(path.join(__dirname, "client/build")));

//Put all api endpoints under '/api'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const untiTaqbaylit = [
  "tafunast",
  "tanemmirt",
  "tameṭṭut",
  "tiγri",
  "taṛumit",
  "tafat",
  "tabburt",
  "tawwurt",
  "times",
  "tabbuct",
  "tizizwit",
  "tudert",
  "tameddurt",
  "tiγirdemt",
  "tamart",
  "tifdent",
  "tawacult",
  "tamegṛeḍt",
  "tuγmest",
  "tafsut",
  "tagrest",
  "tigzirt",
  "tayet",
  "takeṛṛust",
  "tissist",
  "tabexsist",
  "tiqenṭeṛt",
  "tačinet",
  "tislit",
  "timenγiwt",
  "timesrifegt",
  "taneqlet",
  "tagrurt",
  "tissit",
  "taγenğawt",
  "tamessaḍt",
  "taṣabunt",
  "tifirest",
  "tasarut"
];

const asgetTaqbaylit = ["idmaren", "idamen", "idammen", "imeṭṭawen", "izmawen"];
const imqimen = [
  "kemmi",
  "kemmini",
  "kem",
  "nekki",
  "nekkini",
  "nek",
  "kečči",
  "keččini",
  "keč"
];
const arudmawan = [
  "wagi",
  "wayi",
  "wagini",
  "wayini",
  "wagikana",
  "tagi",
  "ta",
  "tayini",
  "tagini",
  "waggi",
  "wayyi",
  "tayi",
  "taggi",
  "tayyi",
  "tayikana",
  "tagikana",
  "wihina",
  "widak",
  "widakihina",
  "tihin",
  "tihina",
  "tidakihina"
];
const englishplurals = [
  "calves",
  "halves",
  "hooves",
  "knives",
  "leaves",
  "lives",
  "loaves",
  "news",
  "potatoes",
  "selves",
  "shelves",
  "thieves",
  "tomatoes",
  "wives",
  "wolves"
];
const dakkel = [
  "dakkel",
  "amddakel",
  "tamddakelt",
  "tameddakelt",
  "ameddakel",
  "amedakkel",
  "ddukel",
  "ddakel"
];

const randomWords = ["word", "light", "man", "only", "after", "live"];

//custom functions
tokenizeSpellingKabyle = item => {
  if (
    item[0] == "t" &&
    item[item.length - 1] == "t" &&
    untiTaqbaylit.includes(item) == false
  ) {
    item = item.slice(1, item.length - 1);
  } else if (
    item[0] == "i" &&
    item.slice(-2) == "en" &&
    asgetTaqbaylit.includes(item) == false
  ) {
    item = "a" + item.slice(1, item.length - 2);
  } else if (
    item[0] == "t" &&
    item[1] == "i" &&
    item.slice(-2) == "in" &&
    arudmawan.includes(item) == false
  ) {
    item = "a" + item.slice(2, item.length - 2);
  } else if (arudmawan.includes(item) == true && item[1] == "a") {
    item = "wa";
  } else if (arudmawan.includes(item) == true && item[1] == "i") {
    item = "wihin";
  } else if (imqimen.includes(item) == true && item.length == 5) {
    item = item.slice(0, item.length - 1);
  } else if (imqimen.includes(item) == true && item.length > 5) {
    item = item.slice(0, item.length - 3);
  } else if (imqimen.includes(item) == true && item.length == 3) {
    item = item + item[item.length - 1];
  } else if (dakkel.includes(item) == true && item[0] == "d") {
    item = "dukkel";
  } else if (
    dakkel.includes(item) == true &&
    (item[1] == "m" || item[item.length - 1] == "t")
  ) {
    item = "amdakkel";
  } else if (item == "izmawen") {
    item = "izem";
  }
  return item;
};

app.get("/api", (req, res) => {
  fs.readFile("words.xml", "utf-8", function(err, data) {
    if (err) {
      console.log("error");
      //res.send(err);
    } else {
      parser.parseString(data, function(err, result) {
        //let words = JSON.stringify(result['entry']['form']);
        let words = result["entry"]["form"];
        console.log("typeof words: ", typeof words);

        //res.json(words);

        //var items = randomWords[Math.floor(Math.random() * randomWords.length)];
        // let str = words.filter(x => x.orth == items);
        //console.log("typeof items: ", items);
        res.json(words);
      });
    }
  });
});

app.get("/api/lexemes", (req, res) => {
  let { searchTerm, optionValue } = req.query;
  console.log("l'option est: ", req.query.optionValue);
  console.log("le mot est: ", req.query.searchTerm);
  if (optionValue == "English-Kabyle") {
    fs.readFile("words.xml", "utf-8", function(err, data) {
      if (err) {
        console.log("error");
        //res.send(err);
      } else {
        parser.parseString(data, function(err, result) {
          //searchTerm = searchTerm.toLowerCase().trim();
          console.log("word after tokenization", searchTerm);
          //let words = JSON.stringify(result['entry']['form']);
          let words = result["entry"]["form"];
          let str = words.filter(x => x.orth == searchTerm);
          //words = words.filter(x => x.orth.indexOf(searchTerm) !== -1);
          console.log("typeof words: ", str);
          console.log(" words: ", words);

          res.json(str);
        });
      }
    });
  } else {
    fs.readFile("kabToEng.xml", "utf-8", function(err, data) {
      if (err) {
        console.log("error");
        //res.send(err);
      } else {
        parser.parseString(data, function(err, result) {
          let lexeme, gr, part;
          searchTerm = searchTerm.toLowerCase().trim();
          searchTerm = tokenizeSpellingKabyle(searchTerm);
          console.log("word after tokenization", searchTerm);
          //let words = JSON.stringify(result['entry']['form']);
          let words = result["entry"]["form"];
          let str = words.filter(x => x.orth == searchTerm);
          //console.log("typeof words: ", words);

          res.json(str);
        });
      }
    });
  }

  /*console.log("the customer's name is " + firstName);
  
  var str = customers.filter(x => x.firstName == firstName);
  //console.log("the customer's name is " + str);
  //res.json(str);
  res.send(str);
  //res.json(customers);*/
});

app.get("*", (req, res) => {
  //res.sendFile(path.join(__dirname + "/client/build/index.html"));
  res.sendFile(path.join(__dirname + "/app/public/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`lexemes listening on ${port}`);
