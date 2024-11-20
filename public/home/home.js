const main = document.getElementById("main");

const loadBooks = async () => {
    const response = await fetch("http://localhost:3000/books");
    if (!response.ok)
        return null;

    return await response.json();
}


loadBooks().then(books => {
    if (books) {
        let result = "<dl>";

        for (let book of books) {
            result += `<dt>${book["title"]} (ID:${book["id"]})</dt><dd>${book["description"]}</dd>`
        }

        main.innerHTML = result + "</dl>";
    }
});





