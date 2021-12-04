dragula([document.querySelector('#col-one'), document.querySelector('#col-two'), document.querySelector('#col-three')]);

// add motivational quote to the page
function addQuote(quote, author) {
  const quoteDiv = document.querySelector("#quote");

  const quoteText = document.createElement("blockquote");
  quoteText.textContent = quote;
  quoteDiv.appendChild(quoteText);

  const quoteAuhor = document.createElement("figcaption");
  quoteAuhor.textContent = "– " + author;
  quoteDiv.appendChild(quoteAuhor);
}

function addWeather() {

}

// check if a quote is stored in the local storage
if (localStorage.quote && localStorage.author) {
  addQuote(JSON.parse(localStorage.quote), JSON.parse(localStorage.author));
} else {
  // get motivational quote from API
fetch("https://zenquotes.io/api/today/", {
  method: "GET",
  mode: "cors",
  credentials: "include"
})
  .then(response => response.json())
  .then(data => {
    // display quote on dashboard
    addQuote(JSON.stringify(data[0].q), JSON.stringify(data[0].a));

    // store quote locally
    localStorage.setItem("quote", JSON.stringify(data[0].q));
    localStorage.setItem("author", JSON.stringify(data[0].a));
  })
  .catch(err => console.log(err))
}

/*
fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/331123?apikey=B7DgsNbyAXjhYJt3MLmwDxozLgAYA0Bs&metric=true", {
  method: "GET",
  mode: "cors",
  credentials: "include"
})
  .then(response => response.json())
  .then(data => {
    console.log(JSON.stringify(data))
    //addWeather(JSON.stringify(data))
  })
  .catch(err => console.log(err))
*/