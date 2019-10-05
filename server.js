// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

// Requiring Note and Article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

// Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Define port
var port = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Make public a static dir
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "/views/layouts/partials")
  })
);
app.set("view engine", "handlebars");

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/NewsScraperHW", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Show any mongoose errors
mongoose.connection.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
mongoose.connection.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
//GET requests to render Handlebars pages
app.get("/", function(req, res) {
  Article.find({ saved: false }, function(error, data) {
    var hbsObject = {
      article: data
    };
    console.log(hbsObject);
    res.render("home", hbsObject);
  });
});

app.get("/saved", function(req, res) {
  Article.find({ saved: true })
    .populate("notes")
    .exec(function(error, articles) {
      var hbsObject = {
        article: articles
      };
      res.render("saved", hbsObject);
    });
});

// A GET request to scrape the echojs website
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with request
  axios("https://www.nytimes.com/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h2 within an article tag, and do the following:
    $("article h2").each(function(i, element) {
      // Save an empty result object
      var result = {};

      // Add the title and summary of every link, and save them as properties of the result object

      summary = "";
      if ($(this).find("ul").length) {
        summary = $(this)
          .find("li")
          .first()
          .text();
      } else {
        summary = $(this)
          .find("p")
          .text();
      }

      result.title = $(this)
        .find("h2")
        .text();
      result.summary = summary;
      result.link =
        "https://www.nytimes.com" +
        $(this)
          .find("a")
          .attr("href");

      // Create a new Article using the `result` object built from scraping
      Article.create(result)
        .then(function(dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function(err) {
          // If an error occurred, log it
          console.log(err);
        });
    });
    // Send a message to the client
    res.send("Scrape Complete");
  });
});

// Route for getting all Articles from the db
app.get("/articles", function(req, res) {
  // Grab every document in the Articles collection
  Article.find({})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for grabbing a specific Article by id, populate it with it's note
app.get("/articles/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  Article.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("note")
    .then(function (dbArticle) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbArticle);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Save an article
app.post("/articles/save/:id", function(req, res) {
  // Use the article id to find and update its saved boolean
  Article.findOneAndUpdate({ _id: req.params.id }, { saved: true })
    // Execute the above query
    .exec(function(err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      } else {
        // Or send the document to the browser
        res.send(doc);
      }
    });
});

// Delete an article
app.post("/articles/delete/:id", function(req, res) {
  // Use the article id to find and update its saved boolean
  Article.findOneAndUpdate({ _id: req.params.id }, { saved: false, notes: [] })
    // Execute the above query
    .exec(function(err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      } else {
        // Or send the document to the browser
        res.send(doc);
      }
    });
});

// Create a new note
app.post("/notes/save/:id", function(req, res) {
  // Create a new note and pass the req.body to the entry
  var newNote = new Note({
    body: req.body.text,
    article: req.params.id
  });
  console.log(req.body);
  // And save the new note to the db
  newNote.save(function(error, note) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Otherwise
    else {
      // Use the article id to find and update it's notes
      Article.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { notes: note } }
      )
        // Execute the above query
        .exec(function(err) {
          // Log any errors
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            // Or send the note to the browser
            res.send(note);
          }
        });
    }
  });
});

// Delete a note
app.delete("/notes/delete/:note_id/:article_id", function(req, res) {
  // Use the note id to find and delete it
  Note.findOneAndRemove({ _id: req.params.note_id }, function(err) {
    // Log any errors
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      Article.findOneAndUpdate(
        { _id: req.params.article_id },
        { $pull: { notes: req.params.note_id } }
      )
        // Execute the above query
        .exec(function(err) {
          // Log any errors
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            // Or send the note to the browser
            res.send("Note Deleted");
          }
        });
    }
  });
});

// Listen on port
app.listen(port, function() {
  console.log("App running on port " + port);
});
