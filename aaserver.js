const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors")
const fs = require("fs");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

app.get("/people", (req, res) =>
{
    res.send(readJSONFile());
} )

app.post("/people", (req, res) => {
    const people = readJSONFile();
    people.push(req.body);
    writeJSONFile(people);
    res.send(req.body);
})
app.listen(port, () => {
    console.log("This app is listening on port: ", port);
});

function readJSONFile()
{
    return  JSON.parse(fs.readFileSync("form.json"))["people"];}

function writeJSONFile(content){
    fs.writeFileSync(
        "form.json",
        JSON.stringify({people: content}),
        "utf8",
        err =>
        {if(err)
        {
            console.log(err);
        }}
    )
}