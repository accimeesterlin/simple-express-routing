

const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser());


// Routing in Express
// app.get()
// app.post()

// Communication between your server and the client

// {status:'sad'}
app.post("/signup", (req, res) => {
    // Processing the data from the client
    console.log("Request Object: ", req.body);
    res.json({ message:"Hey buddy, we receive your data, hold on a second, it's being processed" });
});



app.get('*', (req, res) => {
    let user = {
        username:'Accime'
    };
    res.sendFile(path.join(__dirname, "index.html")); // file(html, css, javascript)
});


app.get("/david", (req, res) => {
    let user = {
        username:'David'
    };
    res.json(user); // json,
});

// Maybe
// app.put()
// app.delete()

app.listen(8080, () => {
    console.log("Server is starting at port 8080");
});

// What is Express?

// Why should we use it?

// How do we use it?


// Very extremely seriously trust me ugly

// handsome
// Powerful
// easy

// Routing Middleware



// Ajax
// Form



































