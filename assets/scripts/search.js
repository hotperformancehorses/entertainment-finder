// const api_key_sucheta_watchmode = "GuNGDaJ1Dqvw6nIrD3bG9dc6LAb0Rjs4YjZUe9Lt"; limit exceeded.
// const api_key_su = "PByuLqDSSGFYSHuu6g1O8FVZGP6tCXRz583czW24";
let cardHolder = document.getElementById("card-container");
let searchResultByGenre = [];
let genreElement = document.getElementById("genreName");
let category = ["movie", "tv"];
let movieBtn = document.getElementById("movie-btn");
let tvBtn = document.getElementById("tv-btn");
let storedData = {};
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

// Shows search category
function showSearchCategory() {
  let genreName = document.location.search.split("&")[1].split("=")[1];
  genreElement.textContent = genreName;
  searchResultByGenre = [];
}

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
        renderCards(results, searchBy);
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
function renderCards(data, category) {
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
      openTitleData(e, obj);
    });
    let addToWatch = document.createElement("button");
    addToWatch.setAttribute("id", "addToWatch");
    addToWatch.setAttribute("class", "button");
    addToWatch.addEventListener("click", (e) => {
      addToWatchList(e, obj);
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
    cardHolder.appendChild(card);
  });
}

// renderCards(demoData);

//Function to store on localStorage
function addToWatchList(e, obj) {
  let id = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
  let val = obj;
  storedData[id] = val;
  let tempdata = JSON.stringify(storedData);
  localStorage.setItem("movieData", tempdata);
}

// 'https://api.watchmode.com/v1/title/345534/details/?apiKey=YOUR_API_KEY&append_to_response=sources'
function openTitleData(e, obj) {
  console.log(obj);
  let streaming
  let id = e.target.parentNode.parentNode.parentNode
    .getAttribute("data-id")
    .split("-")[1];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdlOTcyOWNhNzA5ZjRiNzE1NmJlZjNkMGI5ZDYwZCIsInN1YiI6IjY0YTgyMTM1OTU3ZTZkMDEzOWNmYzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yf03KF5yK3_pSaqifJRp2-tzgrrsvlPYENFI3cqpaWQ",
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.results["US"]);
      if (response.results.buy) {
        logoBuy = response.results["US"].buy;
        logoRent = response.results["US"].rent;
      } else if (response.results.buy) {
        logoBuy = response.results["US"].buy;
      } else if (response.results.rent) {
        logoRent = response.results["US"].rent;
      }

      let wrapper = document.createElement("div");
      let buyFrom = document.createElement("div");
      buyFrom.setAttribute("class", "iconColumn");
      let rentFrom = document.createElement("div");
      rentFrom.setAttribute("class", "iconColumn");
      let header1 = document.createElement("h5");
      header1.textContent = `Buy`;
      let header2 = document.createElement("h5");
      header2.textContent = `Rent`;
      wrapper.appendChild(header1);
      wrapper.appendChild(buyFrom);
      wrapper.appendChild(header2);
      wrapper.appendChild(rentFrom);
      if (logoBuy.length !== 0) {
        logoBuy.forEach((el) => {
          let iconTile = document.createElement("span");
          let iconImage = document.createElement("img");
          iconImage.setAttribute("class", "icon");
          iconImage.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w300${el.logo_path}`
          );

          iconTile.appendChild(iconImage);
          buyFrom.appendChild(iconTile);
        });
      }
      if (logoRent.length !== 0) {
        logoRent.forEach((el) => {
          let iconTile = document.createElement("span");
          let iconImage = document.createElement("img");
          iconImage.setAttribute("class", "icon");
          iconImage.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w300${el.logo_path}`
          );

          iconTile.appendChild(iconImage);
          rentFrom.appendChild(iconTile);
        });
      }

      Swal.fire({
        title: `${obj.original_title}`,
        text: `${obj.overview}`,
        imageUrl: `https://image.tmdb.org/t/p/w300${obj.backdrop_path}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: `${obj.original_title}`,
        html: wrapper,
      });
    })
    .catch((err) => console.error(err));
}

// {
//   "link": "https://www.themoviedb.org/movie/406563-insidious-the-last-key/watch?locale=US",
//   "buy": [
//       {
//           "logo_path": "/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
//           "provider_id": 2,
//           "provider_name": "Apple TV",
//           "display_priority": 5
//       },
//       {
//           "logo_path": "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg",
//           "provider_id": 10,
//           "provider_name": "Amazon Video",
//           "display_priority": 12
//       },
//       {
//           "logo_path": "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
//           "provider_id": 3,
//           "provider_name": "Google Play Movies",
//           "display_priority": 13
//       },
//       {
//           "logo_path": "/oIkQkEkwfmcG7IGpRR1NB8frZZM.jpg",
//           "provider_id": 192,
//           "provider_name": "YouTube",
//           "display_priority": 14
//       },
//       {
//           "logo_path": "/21dEscfO8n1tL35k4DANixhffsR.jpg",
//           "provider_id": 7,
//           "provider_name": "Vudu",
//           "display_priority": 41
//       },
//       {
//           "logo_path": "/shq88b09gTBYC4hA7K7MUL8Q4zP.jpg",
//           "provider_id": 68,
//           "provider_name": "Microsoft Store",
//           "display_priority": 52
//       },
//       {
//           "logo_path": "/gbyLHzl4eYP0oP9oJZ2oKbpkhND.jpg",
//           "provider_id": 279,
//           "provider_name": "Redbox",
//           "display_priority": 53
//       },
//       {
//           "logo_path": "/xL9SUR63qrEjFZAhtsipskeAMR7.jpg",
//           "provider_id": 358,
//           "provider_name": "DIRECTV",
//           "display_priority": 56
//       },
//       {
//           "logo_path": "/kJlVJLgbNPvKDYC0YMp3yA2OKq2.jpg",
//           "provider_id": 352,
//           "provider_name": "AMC on Demand",
//           "display_priority": 136
//       }
//   ],
//   "rent": [
//       {
//           "logo_path": "/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
//           "provider_id": 2,
//           "provider_name": "Apple TV",
//           "display_priority": 5
//       },
//       {
//           "logo_path": "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg",
//           "provider_id": 10,
//           "provider_name": "Amazon Video",
//           "display_priority": 12
//       },
//       {
//           "logo_path": "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
//           "provider_id": 3,
//           "provider_name": "Google Play Movies",
//           "display_priority": 13
//       },
//       {
//           "logo_path": "/oIkQkEkwfmcG7IGpRR1NB8frZZM.jpg",
//           "provider_id": 192,
//           "provider_name": "YouTube",
//           "display_priority": 14
//       },
//       {
//           "logo_path": "/21dEscfO8n1tL35k4DANixhffsR.jpg",
//           "provider_id": 7,
//           "provider_name": "Vudu",
//           "display_priority": 41
//       },
//       {
//           "logo_path": "/shq88b09gTBYC4hA7K7MUL8Q4zP.jpg",
//           "provider_id": 68,
//           "provider_name": "Microsoft Store",
//           "display_priority": 52
//       },
//       {
//           "logo_path": "/gbyLHzl4eYP0oP9oJZ2oKbpkhND.jpg",
//           "provider_id": 279,
//           "provider_name": "Redbox",
//           "display_priority": 53
//       },
//       {
//           "logo_path": "/xL9SUR63qrEjFZAhtsipskeAMR7.jpg",
//           "provider_id": 358,
//           "provider_name": "DIRECTV",
//           "display_priority": 56
//       },
//       {
//           "logo_path": "/1tLCqSH5xiViDxMiTVWl6DmE8hd.jpg",
//           "provider_id": 486,
//           "provider_name": "Spectrum On Demand",
//           "display_priority": 170
//       }
//   ]
// }
