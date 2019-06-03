const express = require("express");
const app = express();
const port = 3000

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there")
});

//  "/bye" => "Goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye");
});
// "/dog" => "Meow!!!"
app.get("/dog", function(req, res){
    console.log("someone made a request")
    res.send("Meow!!!");
});

app.get("/r/:subredditName", function(req, res){
    let subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!");

});

app.get("*", function(req, res){
    res.send("YOU ARE A STAR!")
})
// Tell Express to listen for requests (start server)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))