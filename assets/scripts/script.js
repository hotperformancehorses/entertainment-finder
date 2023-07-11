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

var movieUrl = "https://api.themoviedb.org/3/trending/movie/week?api_key=" + apiKeyTm;
console.log(movieUrl);

var cardImage= document.querySelector(".card-image");
var movieOne= document.querySelector("#movie-1");
var movieTwo= document.querySelector("#movie-2");
var movieThree= document.querySelector("#movie-3");
var movieFour= document.querySelector("#movie-4");
var movieFive= document.querySelector("#movie-5");
var movieSix= document.querySelector("#movie-6");
var movieSeven= document.querySelector("#movie-7");
var movieEight= document.querySelector("#movie-8");

var tvOne= document.querySelector("#tv-1");
var tvTwo= document.querySelector("#tv-2");
var tvThree= document.querySelector("#tv-3");
var tvFour= document.querySelector("#tv-4");
var tvFive= document.querySelector("#tv-5");
var tvSix= document.querySelector("#tv-6");
var tvSeven= document.querySelector("#tv-7");
var tvEight= document.querySelector("#tv-8");



function renderMovie(data) {

const img1= document.createElement("img");
img1.src= "https://image.tmdb.org/t/p/w300" + data.results[0].poster_path;
movieOne.append(img1);

const img2= document.createElement("img");
img2.src= "https://image.tmdb.org/t/p/w300" + data.results[1].poster_path;
movieTwo.append(img2);

const img3= document.createElement("img");
img3.src= movie3= "https://image.tmdb.org/t/p/w300" + data.results[2].poster_path;
movieThree.append(img3);

const img4= document.createElement("img");
img4.src= "https://image.tmdb.org/t/p/w300" + data.results[3].poster_path;
movieFour.append(img4);

const img5= document.createElement("img");
img5.src= "https://image.tmdb.org/t/p/w300" + data.results[4].poster_path;
movieFive.append(img5);

const img6= document.createElement("img");
img6.src= "https://image.tmdb.org/t/p/w300" + data.results[5].poster_path;
movieSix.append(img6);

const img7= document.createElement("img");
img7.src= "https://image.tmdb.org/t/p/w300" + data.results[6].poster_path;
movieSeven.append(img7);

const img8= document.createElement("img");
img8.src= "https://image.tmdb.org/t/p/w300" + data.results[7].poster_path;
movieEight.append(img8);

}


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

function renderTV(data) {
const teleimg1= document.createElement("img");
teleimg1.src= "https://image.tmdb.org/t/p/w300" + data.results[0].poster_path;
teleimg1.style.height = "526.5px";
teleimg1.style.width = "351px";
tvOne.append(teleimg1);

const teleimg2= document.createElement("img");
teleimg2.src= "https://image.tmdb.org/t/p/w300" + data.results[1].poster_path;
teleimg2.style.height = "526.5px";
teleimg2.style.width = "351px";
tvTwo.append(teleimg2);

const teleimg3= document.createElement("img");
teleimg3.src= "https://image.tmdb.org/t/p/w300" + data.results[2].poster_path;
teleimg3.style.height = "526.5px";
teleimg3.style.width = "351px";
tvThree.append(teleimg3);

const teleimg4= document.createElement("img");
teleimg4.src= "https://image.tmdb.org/t/p/w300" + data.results[3].poster_path;
teleimg4.style.height = "526.5px";
teleimg4.style.width = "351px";
tvFour.append(teleimg4);

const teleimg5= document.createElement("img");
teleimg5.src= "https://image.tmdb.org/t/p/w300" + data.results[4].poster_path;
teleimg5.style.height = "526.5px";
teleimg5.style.width = "351px";
tvFive.append(teleimg5);

const teleimg6= document.createElement("img");
teleimg6.src= "https://image.tmdb.org/t/p/w300" + data.results[5].poster_path;
teleimg6.style.height = "526.5px";
teleimg6.style.width = "351px";
tvSix.append(teleimg6);

const teleimg7= document.createElement("img");
teleimg7.src= "https://image.tmdb.org/t/p/w300" + data.results[6].poster_path;
teleimg7.style.height = "526.5px";
teleimg7.style.width = "351px";
tvSeven.append(teleimg7);

const teleimg8= document.createElement("img");
teleimg8.src= "https://image.tmdb.org/t/p/w300" + data.results[7].poster_path;
teleimg8.style.height = "526.5px";
teleimg8.style.width = "351px";
tvEight.append(teleimg8);
}


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
    })
}



getmovieApi();
getTVApi();

