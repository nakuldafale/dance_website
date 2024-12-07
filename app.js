// const express = require("express")
// const path = require("path")
// const bodyparser = require("body-parser")
// const app = express()
// const port = 80

// // getting-started.js
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://localhost/contactDance');

//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// const contactSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     phone: String,
//     age: String,
//     desc: String
// });

// const Contact = mongoose.model('Contact', contactSchema);


// // express spesific stuff
// app.use('/static', express.static('static'))//for serving static files
// app.use(express.urlencoded())

// // pug spesific stuff
// app.set('view engine', 'pug')//set template engine as pug
// app.set('views', path.join(__dirname, 'views'))//set the views directory

// // endpoint
// app.get("/", (req, res) => {
//     const nakul = {}
//     res.status(200).render('index.pug', nakul)
// })

// app.get("/contact", (req, res) => {
//     const nakul = {}
//     res.status(200).render('contact.pug', nakul)
// })

// app.post("/contact", (req, res) => {
//     var myData = new Contact(req.body);
//     myData.save().then(() => {
//         res.send("this has been save to database")
//     }).catch(() => {
//         res.status(400).send("item was not save to the database")
//     })
//     // res.status(200).render('contact.pug')
// })

// app.listen(port, () => {
//     console.log("your system is run")
// })

const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();
const port = 80;

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost/contactDance');
}

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    age: String,
    desc: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Express specific stuff
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded()); // Parse form data

// Endpoints
app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/contact", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views/contact.html"));
});

app.get("/classes", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views/classes.html"));
});

app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views/about.html"));
});

app.post("/contact", (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This has been saved to the database");
    }).catch(() => {
        res.status(400).send("Item was not saved to the database");
    });
});

app.listen(port, () => {
    console.log("Your system is running");
});
