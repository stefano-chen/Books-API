const express = require("express");
const dbConnector = require("./dbConnector");

const app = express();
const PORT = 3000;

const database = dbConnector.connect("booksDB");

const booksCollection = database.collection("books");

app.use(express.json());
app.use("/", express.static("./public/home", {index: "home.html"}));
app.use("/login", express.static("./public/login", {index: "login.html"}));

app.get("/books", async (request, response) => {
    const booksCursor = await booksCollection.find();
    const books = await booksCursor.toArray();
    if (books.length > 0)
        response.status(200).json(books);
    else
        response.status(404).end();
})


app.listen(3000, () => {
    console.log(`HTTP server running on port ${PORT}`);
});
