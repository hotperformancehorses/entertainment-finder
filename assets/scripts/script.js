// This fucntion controls the sliders
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}
// Navbar functionality
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

//// Function select specific genre
let genreClass = document.querySelectorAll(".genre");
genreClass.forEach((el) => {
  el.addEventListener("click", (e) => {
    let currBtn = e.target;
    currBtn.setAttribute(
      "href",
      `./search.html?genreId=${currBtn.dataset.id}&genreName=${currBtn.dataset.name}`
    );
  });
});

// Lily's API Key for TMDB
var apiKeyTm = "d8456d6d5c57d78561ea4588cc7a1a54";

// URL for trending movie and tv shows
var tvUrl = "https://api.themoviedb.org/3/trending/tv/week?api_key=" + apiKeyTm;
console.log(tvUrl);

var movieUrl =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=" + apiKeyTm;
console.log(movieUrl);

var cardImage = document.querySelector(".card-image");
var movieOne = document.querySelector("#movie-1");
var movieTwo = document.querySelector("#movie-2");
var movieThree = document.querySelector("#movie-3");
var movieFour = document.querySelector("#movie-4");
var movieFive = document.querySelector("#movie-5");
var movieSix = document.querySelector("#movie-6");
var movieSeven = document.querySelector("#movie-7");
var movieEight = document.querySelector("#movie-8");

var tvOne = document.querySelector("#tv-1");
var tvTwo = document.querySelector("#tv-2");
var tvThree = document.querySelector("#tv-3");
var tvFour = document.querySelector("#tv-4");
var tvFive = document.querySelector("#tv-5");
var tvSix = document.querySelector("#tv-6");
var tvSeven = document.querySelector("#tv-7");
var tvEight = document.querySelector("#tv-8");

var sliderParent = document.querySelector("#slider");

function renderMovie(data) {
  console.log(data);
  const img1 = document.createElement("img");
  img1.src = "https://image.tmdb.org/t/p/w300" + data.results[0].poster_path;
  img1.setAttribute("data-title", data.results[0].original_title);
  movieOne.append(img1);

  const img2 = document.createElement("img");
  img2.src = "https://image.tmdb.org/t/p/w300" + data.results[1].poster_path;
  img2.setAttribute("data-title", data.results[1].original_title);
  movieTwo.append(img2);

  const img3 = document.createElement("img");
  img3.src = movie3 =
    "https://image.tmdb.org/t/p/w300" + data.results[2].poster_path;
  img3.setAttribute("data-title", data.results[2].original_title);
  movieThree.append(img3);

  const img4 = document.createElement("img");
  img4.src = "https://image.tmdb.org/t/p/w300" + data.results[3].poster_path;
  img4.setAttribute("data-title", data.results[3].original_title);
  movieFour.append(img4);

  const img5 = document.createElement("img");
  img5.src = "https://image.tmdb.org/t/p/w300" + data.results[4].poster_path;
  img5.setAttribute("data-title", data.results[4].original_title);
  movieFive.append(img5);

  const img6 = document.createElement("img");
  img6.src = "https://image.tmdb.org/t/p/w300" + data.results[5].poster_path;
  img6.setAttribute("data-title", data.results[5].original_title);
  movieSix.append(img6);

  const img7 = document.createElement("img");
  img7.src = "https://image.tmdb.org/t/p/w300" + data.results[6].poster_path;
  img7.setAttribute("data-title", data.results[6].original_title);
  movieSeven.append(img7);

  const img8 = document.createElement("img");
  img8.src = "https://image.tmdb.org/t/p/w300" + data.results[7].poster_path;
  img8.setAttribute("data-title", data.results[7].original_title);
  movieEight.append(img8);
}

sliderParent.addEventListener("click", function (event) {
  if (event.target.matches("img")) {
    console.log(event.target.getAttribute("data-title"));
    var movieTitle = event.target.getAttribute("data-title");
    location.assign("./search.html?" + "q=movie&input=" + movieTitle);
  }
});

// function renderMovie(data) {
//   console.log(data);
//   for (var i = 0; i < 5; i++) {
//     var backPoster = "https://image.tmdb.org/t/p/w300" + data.results[i].poster_path;
//     console.log(backPoster);
//     const img = document.createElement("img");
//     console.log(img.src = backPoster);
//   }

// }

function getmovieApi() {
  fetch(movieUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderMovie(data);
    })
    .catch(function (error) {
      console.log("Requestfailed", error);
    });
}

// Search bar functionality
var formEl = document.querySelector("#form");
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  var searchInput = document.querySelector("#search-input").value;
  // console.log(searchInput)
  var queryParam = document.getElementById("queryParam").value;
  console.log(queryParam);
  location.assign(
    "./search.html?" + "q=" + queryParam + "&input=" + searchInput
  );

  // MOVED BELOW CODE TO SEARCH.JS
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk1MWRmZGYwNGYyYTkzODcwZGE0NjM5ZjAyZjQ4NyIsInN1YiI6IjY0YTgzMTU0OTY1MjIwMDBhZTg0ZTI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8GB2JNYGmG1oe1PqVgUTRIsrjnSCGqb4OD0fE8WhN8'
  //   }
  // };

  // fetch("https://api.themoviedb.org/3/search/"+queryParam+"?query="+searchInput+"&include_adult=false&language=en-US&page=1", options)
  //   .then(response => response.json())
  //   .then(response => {
  //     var results = response.results
  //   })
  //   .catch(err => console.error(err));
});

var sliderParentTv = document.querySelector("#slider-two");

function renderTV(data) {
  console.log(data);
  const teleimg1 = document.createElement("img");
  teleimg1.src =
    "https://image.tmdb.org/t/p/w300" + data.results[0].poster_path;
  teleimg1.setAttribute("data-titletv", data.results[0].original_name);
  tvOne.append(teleimg1);

  const teleimg2 = document.createElement("img");
  teleimg2.src =
    "https://image.tmdb.org/t/p/w300" + data.results[1].poster_path;
  teleimg2.setAttribute("data-titletv", data.results[1].original_name);
  tvTwo.append(teleimg2);

  const teleimg3 = document.createElement("img");
  teleimg3.src =
    "https://image.tmdb.org/t/p/w300" + data.results[2].poster_path;
  teleimg3.setAttribute("data-titletv", data.results[2].original_name);
  tvThree.append(teleimg3);

  const teleimg4 = document.createElement("img");
  teleimg4.src =
    "https://image.tmdb.org/t/p/w300" + data.results[3].poster_path;
  teleimg4.setAttribute("data-titletv", data.results[3].original_name);
  tvFour.append(teleimg4);

  const teleimg5 = document.createElement("img");
  teleimg5.src =
    "https://image.tmdb.org/t/p/w300" + data.results[4].poster_path;
  teleimg5.setAttribute("data-titletv", data.results[4].original_name);
  tvFive.append(teleimg5);

  const teleimg6 = document.createElement("img");
  teleimg6.src =
    "https://image.tmdb.org/t/p/w300" + data.results[5].poster_path;
  teleimg6.setAttribute("data-titletv", data.results[5].original_name);
  tvSix.append(teleimg6);

  const teleimg7 = document.createElement("img");
  teleimg7.src =
    "https://image.tmdb.org/t/p/w300" + data.results[6].poster_path;
  teleimg7.setAttribute("data-titletv", data.results[6].original_name);
  tvSeven.append(teleimg7);

  const teleimg8 = document.createElement("img");
  teleimg8.src =
    "https://image.tmdb.org/t/p/w300" + data.results[7].poster_path;
  teleimg8.setAttribute("data-titletv", data.results[7].original_name);
  tvEight.append(teleimg8);
}

sliderParentTv.addEventListener("click", function (event) {
  if (event.target.matches("img")) {
    console.log(event.target.getAttribute("data-titletv"));
    var tvTitle = event.target.getAttribute("data-titletv");
    location.assign("./search.html?" + "q=tv&input=" + tvTitle);
  }
});

// function renderTV(data) {
//   console.log(data)
//   for (var i=0; i < 5; i++) {
//   var backGround = "https://image.tmdb.org/t/p/w300/" + data.results[i].poster_path;
//   console.log(backGround);
//   }
// }

function getTVApi() {
  fetch(tvUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderTV(data);
    })
    .catch(function (error) {
      console.log("Requestfailed", error);
    });
}

getmovieApi();
getTVApi();
