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

var sliderParent = document.querySelector("#slider")

function renderMovie(data) {
console.log(data)
const img1= document.createElement("img");
img1.src= "https://image.tmdb.org/t/p/w300" + data.results[0].poster_path;
img1.setAttribute("data-title",data.results[0].original_title)
movieOne.append(img1);

const img2= document.createElement("img");
img2.src= "https://image.tmdb.org/t/p/w300" + data.results[1].poster_path;
img2.setAttribute("data-title",data.results[1].original_title)
movieTwo.append(img2);

const img3= document.createElement("img");
img3.src= movie3= "https://image.tmdb.org/t/p/w300" + data.results[2].poster_path;
img3.setAttribute("data-title",data.results[2].original_title)
movieThree.append(img3);

const img4= document.createElement("img");
img4.src= "https://image.tmdb.org/t/p/w300" + data.results[3].poster_path;
img4.setAttribute("data-title",data.results[3].original_title)
movieFour.append(img4);

const img5= document.createElement("img");
img5.src= "https://image.tmdb.org/t/p/w300" + data.results[4].poster_path;
img5.setAttribute("data-title",data.results[4].original_title)
movieFive.append(img5);

const img6= document.createElement("img");
img6.src= "https://image.tmdb.org/t/p/w300" + data.results[5].poster_path;
img6.setAttribute("data-title",data.results[5].original_title)
movieSix.append(img6);

const img7= document.createElement("img");
img7.src= "https://image.tmdb.org/t/p/w300" + data.results[6].poster_path;
img7.setAttribute("data-title",data.results[6].original_title)
movieSeven.append(img7);

const img8= document.createElement("img");
img8.src= "https://image.tmdb.org/t/p/w300" + data.results[7].poster_path;
img8.setAttribute("data-title",data.results[7].original_title)
movieEight.append(img8);

}

sliderParent.addEventListener("click",function(event){
 
  if (event.target.matches("img"))
  {
    console.log(event.target.getAttribute("data-title"))
    var movieTitle = event.target.getAttribute("data-title")
    location.assign("./search.html?"+"q=movie&input="+movieTitle)
  }
})


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
var formEl = document.querySelector("form")
formEl.addEventListener("submit", function(event){
  event.preventDefault()
  var searchInput = document.querySelector("#search-input").value
  console.log(searchInput)
  var queryParam = document.getElementById ("queryParam").value
  console.log(queryParam)
  location.assign("./search.html?"+"q="+queryParam+"&input="+searchInput)
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
    
})


var demodata = [
  {
      "adult": false,
      "backdrop_path": "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      "genre_ids": [
          28,
          878,
          12
      ],
      "id": 27205,
      "original_language": "en",
      "original_title": "Inception",
      "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      "popularity": 86.087,
      "poster_path": "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      "release_date": "2010-07-15",
      "title": "Inception",
      "video": false,
      "vote_average": 8.363,
      "vote_count": 33959
  },
  {
      "adult": false,
      "backdrop_path": "/JeGkRdNsOuMrgwBdtB0hp763MU.jpg",
      "genre_ids": [
          18,
          53
      ],
      "id": 613092,
      "original_language": "es",
      "original_title": "El crack cero",
      "overview": "Madrid, Spain, 1975; shortly after the end of the Franco dictatorship. Six months after the mysterious death of his lover, a prestigious tailor, a married woman visits the office of the young Germán Areta, a former police officer turned private detective, to request his professional services.",
      "popularity": 3.511,
      "poster_path": "/kzgPu2CMxBr4YZZxC1Off4cUfR9.jpg",
      "release_date": "2019-10-04",
      "title": "The Crack: Inception",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 34
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          16,
          28,
          53,
          878
      ],
      "id": 64956,
      "original_language": "en",
      "original_title": "Inception: The Cobol Job",
      "overview": "The Cobol Job is a fourteen-minute animated prequel to Christopher Nolan’s award-winning movie: Inception, detailing the heist on Mr. Kaneda's mind by Nash, Cobb, Arthur, and several Cobol Engineering thugs.",
      "popularity": 6.665,
      "poster_path": "/sNxqwtyHMNQwKWoFYDqcYTui5Ok.jpg",
      "release_date": "2010-12-07",
      "title": "Inception: The Cobol Job",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 289
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 350632,
      "original_language": "en",
      "original_title": "Nātyārambham",
      "overview": "On certain Adavus: the basic steps in Bharatanatyam. The first part covers Tatta Adavu, Natta Adavu, Visharu Adavu , Tatti Metti Adavu and Teermanam Adavu.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "",
      "title": "The Inception of Dramatic Representation",
      "video": true,
      "vote_average": 5.8,
      "vote_count": 3
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          10402
      ],
      "id": 973484,
      "original_language": "en",
      "original_title": "Inception: Music from the Motion Picture",
      "overview": "The Special Features Blu-ray disc contains a lossless DTS-HD MA 5.1 surround mix of the Inception soundtrack.",
      "popularity": 1.088,
      "poster_path": "/7uM4DyRVAcgagvhZoWrkrqMPbqV.jpg",
      "release_date": "2010-12-07",
      "title": "Inception: Music from the Motion Picture",
      "video": true,
      "vote_average": 6,
      "vote_count": 1
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
          35
      ],
      "id": 542438,
      "original_language": "en",
      "original_title": "Bikini Inception",
      "overview": "Two flunky Janitors in an Arctic Lab perform unauthorized experiments transporting them to a beach dream world in Malibu California w/50 beautiful young girls and a female Brazilian PhD Student wearing only a bra and panties. A '67 Muscle car races chases horses guns fights surfing, sumo wrestler, wolf monster, underwater scenes tons of gorgeous models. Sexy sci-fi fun.",
      "popularity": 0.68,
      "poster_path": "/mNASlEOFX2c9upxaSbgeKFvIr1L.jpg",
      "release_date": "2015-05-19",
      "title": "Bikini Inception",
      "video": false,
      "vote_average": 7,
      "vote_count": 1
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 250845,
      "original_language": "en",
      "original_title": "WWA The Inception",
      "overview": "The first World Wrestling Allstars pay per view, live from Sydney, Australia! A tournament titled \"7 Deadly Sins\", each round having a stipulation match, the winner will be crowned the first ever WWA Heavyweight Champion! Wrestlers such as Jeff Jarrett, Road Dogg, Jerry Lawler all compete in the tournament, with the WWA Commissioner, Bret Hart not too far away to make sure nothing gets to far out of hand!",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "2001-10-26",
      "title": "WWA The Inception",
      "video": true,
      "vote_average": 3.1,
      "vote_count": 5
  },
  {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 957443,
      "original_language": "en",
      "original_title": "Inception: Jump Right Into the Action",
      "overview": "Inception: Making of. Join filmmaker Christopher Nolan and his cast and crew as they reveal the secrets of Inception, its development, characters, performances, story and jaw-dropping special effects in this solid 14-segments piece.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "",
      "title": "Inception: Jump Right Into the Action",
      "video": false,
      "vote_average": 9.5,
      "vote_count": 2
  }
]







function renderTV(data) {
const teleimg1= document.createElement("img");
teleimg1.src= "https://image.tmdb.org/t/p/w300" + data.results[0].poster_path;
tvOne.append(teleimg1);

const teleimg2= document.createElement("img");
teleimg2.src= "https://image.tmdb.org/t/p/w300" + data.results[1].poster_path;
tvTwo.append(teleimg2);

const teleimg3= document.createElement("img");
teleimg3.src= "https://image.tmdb.org/t/p/w300" + data.results[2].poster_path;
tvThree.append(teleimg3);

const teleimg4= document.createElement("img");
teleimg4.src= "https://image.tmdb.org/t/p/w300" + data.results[3].poster_path;
tvFour.append(teleimg4);

const teleimg5= document.createElement("img");
teleimg5.src= "https://image.tmdb.org/t/p/w300" + data.results[4].poster_path;
tvFive.append(teleimg5);

const teleimg6= document.createElement("img");
teleimg6.src= "https://image.tmdb.org/t/p/w300" + data.results[5].poster_path;
tvSix.append(teleimg6);

const teleimg7= document.createElement("img");
teleimg7.src= "https://image.tmdb.org/t/p/w300" + data.results[6].poster_path;
tvSeven.append(teleimg7);

const teleimg8= document.createElement("img");
teleimg8.src= "https://image.tmdb.org/t/p/w300" + data.results[7].poster_path;
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
