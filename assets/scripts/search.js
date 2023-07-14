// const api_key_sucheta_watchmode = "GuNGDaJ1Dqvw6nIrD3bG9dc6LAb0Rjs4YjZUe9Lt"; limit exceeded.
// const api_key_su = "PByuLqDSSGFYSHuu6g1O8FVZGP6tCXRz583czW24";
let cardHolder = document.getElementById("tile-container");
let searchResultByGenre = [];
let genreElement = document.getElementById("genreName");
let category = ["movie", "tv"];
let movieBtn = document.getElementById("movie-btn");
let tvBtn = document.getElementById("tv-btn");
let searchContainer = document.getElementById("card-container");
let container = document.getElementById("watch-list");
let storedData = [];
let demoData = [
  {
    adult: false,
    backdrop_path: "/PwI3EfasE9fVuXsmMu9ffJh0Re.jpg",
    genre_ids: [27, 9648, 53],
    id: 406563,
    original_language: "en",
    original_title: "Insidious: The Last Key",
    overview:
      "Parapsychologist Elise Rainier and her team travel to Five Keys, NM, to investigate a man’s claim of a haunting. Terror soon strikes when Rainier realizes that the house he lives in was her family’s old home.",
    popularity: 2001.862,
    poster_path: "/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg",
    release_date: "2018-01-03",
    title: "Insidious: The Last Key",
    video: false,
    vote_average: 6.2,
    vote_count: 2491,
  },
];
showSearchCategory(); // called on page load

function showSearchCategory() {
  var query = document.location.search.split("=")[1].split("&")[0];
  if (query === "movie" || query === "tv") {
    var userInput = location.search.split("=")[2].split("%20").join(" ");
    genreElement.textContent = userInput;
  } else {
    let genreName = document.location.search.split("&")[1].split("=")[1];
    genreElement.textContent = genreName;
  }
  searchResultByGenre = [];
}

// Shows search results
function displaySearch() {
  var query = document.location.search.split("=")[1].split("&")[0];
  var userInput = document.location.search.split("=")[2];
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk1MWRmZGYwNGYyYTkzODcwZGE0NjM5ZjAyZjQ4NyIsInN1YiI6IjY0YTgzMTU0OTY1MjIwMDBhZTg0ZTI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8GB2JNYGmG1oe1PqVgUTRIsrjnSCGqb4OD0fE8WhN8",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/search/" +
      query +
      "?query=" +
      userInput +
      "&include_adult=false&language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var results = response.results;
      console.log(results);
      renderCards(results, query, searchContainer);
    })
    .catch((err) => console.error(err));
}
displaySearch();

// Gets the movie or tv data based on user's choice
function getbyGenre(searchBy) {
  let genreId = document.location.search.split("=")[1].split("&")[0];

  cardHolder.setAttribute("data-show", `${searchBy}`);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdlOTcyOWNhNzA5ZjRiNzE1NmJlZjNkMGI5ZDYwZCIsInN1YiI6IjY0YTgyMTM1OTU3ZTZkMDEzOWNmYzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yf03KF5yK3_pSaqifJRp2-tzgrrsvlPYENFI3cqpaWQ",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/discover/${searchBy}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let results = response.results;
      if (results.length !== 0) {
        searchResultByGenre = [...results];
        renderCards(results, searchBy, cardHolder);
      } else {
        genreElement.textContent = "Not Found";
      }
    })
    .catch((err) => console.error(err));
}

//Click events
movieBtn.addEventListener("click", (e) => {
  let searchBy = e.target.dataset.name;
  if (
    (cardHolder.children.length !== 0 &&
      cardHolder.getAttribute("data-show") !== "movie") ||
    cardHolder.children.length === 0
  ) {
    cardHolder.removeAttribute("data-show");
    cardHolder.innerHTML = "";
    getbyGenre(searchBy);
  }
});
tvBtn.addEventListener("click", (e) => {
  let searchBy = e.target.dataset.name;
  if (
    (cardHolder.children.length !== 0 &&
      cardHolder.getAttribute("data-show") !== "tv") ||
    cardHolder.children.length === 0
  ) {
    cardHolder.removeAttribute("data-show");
    cardHolder.innerHTML = "";
    getbyGenre(searchBy);
  }
});

// Renders the card/tiles dynamically
function renderCards(data, category, div) {
  data.forEach((obj) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-id", `${category}-${obj.id}`);
    let cardImage = document.createElement("div");
    cardImage.setAttribute("class", "card-image");
    card.appendChild(cardImage);
    let figure = document.createElement("figure");
    figure.setAttribute("class", "is-4by3");
    let moreinfo = document.createElement("button");
    moreinfo.innerText = "More Info";
    moreinfo.setAttribute("id", "moreInfo");
    moreinfo.setAttribute("class", "button");
    moreinfo.addEventListener("click", (e) => {
      openTitleData(e, obj, category);
    });
    let addToWatch = document.createElement("button");
    addToWatch.setAttribute("id", "addToWatch");
    addToWatch.setAttribute("class", "button");
    addToWatch.addEventListener("click", (e) => {
      addToWatchList(e, obj, category);
    });
    addToWatch.innerText = "Add to Watchlist";
    figure.appendChild(moreinfo);
    figure.appendChild(addToWatch);
    cardImage.appendChild(figure);
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300${obj.poster_path}`
    );
    img.setAttribute("alt", `${obj.original_title}`);
    figure.appendChild(img);
    div.appendChild(card);
  });
}

//Function to store on localStorage
function addToWatchList(e, obj, category) {
  let id = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
  // let val = obj;
  obj[category] = category;
  obj[id] = id;
  storedData.push(obj);
  // storedData[id] = val;
  let tempdata = JSON.stringify(storedData);
  localStorage.setItem(`${category}`, tempdata);
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Added to watchlist",
    showConfirmButton: false,
    timer: 1500,
  });
}

// 'https://api.watchmode.com/v1/title/345534/details/?apiKey=YOUR_API_KEY&append_to_response=sources'
function openTitleData(e, obj, category) {
  let id;
  if (e.target.hasAttribute("category")) {
    id = e.target.dataset.id;
  } else {
    id = e.target.parentNode.parentNode.parentNode
      .getAttribute("data-id")
      .split("-")[1];
  }

  let streaming = []; // to store the response from the fetch call

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdlOTcyOWNhNzA5ZjRiNzE1NmJlZjNkMGI5ZDYwZCIsInN1YiI6IjY0YTgyMTM1OTU3ZTZkMDEzOWNmYzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yf03KF5yK3_pSaqifJRp2-tzgrrsvlPYENFI3cqpaWQ",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/${category}/${id}/watch/providers`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let results = response.results["US"];
      if (results !== null && Object.keys(results).includes("buy")) {
        streaming = results["buy"];
        let providers = document.createElement("div");
        providers.setAttribute("class", "iconColumn");
        streaming.forEach((el) => {
          let iconTile = document.createElement("span");
          let iconImage = document.createElement("img");
          iconImage.setAttribute("class", "icon");
          iconImage.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w300${el.logo_path}`
          );
          iconImage.setAttribute("alt", `${el.provider_name}`);
          iconTile.appendChild(iconImage);
          providers.appendChild(iconTile);
        });
        Swal.fire({
          title: `${
            "original_title" in obj
              ? obj.original_title
              : "original_name" in obj
              ? obj.original_name
              : ""
          }`,
          imageUrl: `https://image.tmdb.org/t/p/w300${obj.backdrop_path}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: `${obj.original_title}`,
          html: providers,
          text: `${obj.overview}`,
        });
      } else {
        Swal.fire({
          title: `${
            "original_title" in obj
              ? obj.original_title
              : "original_name" in obj
              ? obj.original_name
              : ""
          }`,
          text: `${obj.overview}`,
          imageUrl: `https://image.tmdb.org/t/p/w300${obj.backdrop_path}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: `${obj.original_title}`,
        });
      }
    })
    .catch((err) => {
      Swal.fire({
        title: `${
          "original_title" in obj
            ? obj.original_title
            : "original_name" in obj
            ? obj.original_name
            : ""
        }`,
        text: `${obj.overview}`,
        imageUrl: `https://image.tmdb.org/t/p/w300${obj.backdrop_path}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: `${obj.original_title}`,
      });
      console.error(err);
    });
}

function showWatchlist() {
  if (container.children) {
    container.innerHTML = "";
  }
  let tv = JSON.parse(localStorage.getItem("tv"));
  let movie = JSON.parse(localStorage.getItem("movie"));
  let heading = document.createElement("h1");
  heading.textContent = `Showing Watchlist`;
  heading.setAttribute("class", "title");
  container.insertAdjacentElement("beforebegin", heading);
  // container.appendChild(heading);
  if (tv !== null) {
    renderCards(tv, (category = "tv"), container);
  }
  if (movie !== null) {
    renderCards(movie, (category = "movie"), container);
  }
}
