const express = require("express");
const app = express();
const port = 3000

app.get("/", function(req, res){
    res.send("Wecome to my assignment!")
});
app.get("/speak/:animal", function(req, res){ 
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "meow",
        goldfish: "..."
    }
    let animal = req.params.animal.toLowerCase();
    let sound = sounds[animal];
    res.send(`This ${animal} says ${sound}`);
});

app.get("/repeat/:message/:times", function(req, res){
    let message = req.params.message;
    let times = Number(req.params.times);
    let result = "";
    for(let i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});


app.get("*", function(req, res){
    res.send("Sorry Page Not Found!")
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))