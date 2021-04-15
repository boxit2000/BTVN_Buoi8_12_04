function changeQuotes(){
    let i = Math.floor((Math.random() * data.length) + 1);
    let quotes = document.getElementById("quo");
    quotes.innerText = data[i].quoteText;
    let auth = document.getElementById("author");
    auth.innerText = data[i].quoteAuthor;
}
