// const api_key_sucheta_watchmode = "GuNGDaJ1Dqvw6nIrD3bG9dc6LAb0Rjs4YjZUe9Lt"; limit exceeded.
let cardHolder = document.getElementById("card-container");
let searchResultByGenre = [];
let genreElement = document.getElementById("genreName");
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
  {
    adult: false,
    backdrop_path: "/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg",
    genre_ids: [27, 9648, 53],
    id: 614479,
    original_language: "en",
    original_title: "Insidious: The Red Door",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    popularity: 1356.604,
    poster_path: "/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg",
    release_date: "2023-07-05",
    title: "Insidious: The Red Door",
    video: false,
    vote_average: 5.7,
    vote_count: 83,
  },
  {
    adult: false,
    backdrop_path: "/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
    genre_ids: [27, 9648, 53],
    id: 423108,
    original_language: "en",
    original_title: "The Conjuring: The Devil Made Me Do It",
    overview:
      "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
    popularity: 1402.495,
    poster_path: "/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
    release_date: "2021-05-25",
    title: "The Conjuring: The Devil Made Me Do It",
    video: false,
    vote_average: 7.5,
    vote_count: 5176,
  },
  {
    adult: false,
    backdrop_path: "/lQzSMhkAl90iXPirjnLbRHkxApC.jpg",
    genre_ids: [27],
    id: 917007,
    original_language: "en",
    original_title: "Bed Rest",
    overview:
      "A pregnant woman on bed rest begins to wonder if her house is haunted or if it's all in her head.",
    popularity: 920.299,
    poster_path: "/tiZF8b9T9fMcwvsEEkJ5ik1wCnV.jpg",
    release_date: "2022-12-08",
    title: "Bed Rest",
    video: false,
    vote_average: 6.8,
    vote_count: 83,
  },
  {
    adult: false,
    backdrop_path: "/osnvZffaZymubHiBkOsIFd8Y3Re.jpg",
    genre_ids: [28, 27, 53],
    id: 986070,
    original_language: "en",
    original_title: "The Wrath of Becky",
    overview:
      "Two years after she escaped a violent attack on her family, 16-year-old Becky attempts to rebuild her life in the care of an older woman -- a kindred spirit named Elena. However, when a violent group known as the Noble Men break into their home, attack them and take their beloved dog, Becky must return to her old ways to protect herself and her loved ones.",
    popularity: 859.36,
    poster_path: "/3LShl6EwqptKIVq6NWOZ0FbZHEe.jpg",
    release_date: "2023-05-26",
    title: "The Wrath of Becky",
    video: false,
    vote_average: 6.9,
    vote_count: 73,
  },
  {
    adult: false,
    backdrop_path: "/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
    genre_ids: [27, 53],
    id: 890771,
    original_language: "en",
    original_title: "The Black Demon",
    overview:
      "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
    popularity: 818.426,
    poster_path: "/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
    release_date: "2023-04-26",
    title: "The Black Demon",
    video: false,
    vote_average: 6.2,
    vote_count: 280,
  },
  {
    adult: false,
    backdrop_path: "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
    genre_ids: [53, 27],
    id: 713704,
    original_language: "en",
    original_title: "Evil Dead Rise",
    overview:
      "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    popularity: 814.662,
    poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    release_date: "2023-04-12",
    title: "Evil Dead Rise",
    video: false,
    vote_average: 7,
    vote_count: 1879,
  },
  {
    adult: false,
    backdrop_path: "/37LyKFPr7ksoXMea7MIWFa8Llaj.jpg",
    genre_ids: [27, 53],
    id: 714669,
    original_language: "en",
    original_title: "Run Rabbit Run",
    overview:
      "Sarah is a fertility doctor with a firm understanding of the cycle of life. When she is forced to make sense of the increasingly strange behavior of her young daughter Mia, she must challenge her own beliefs and confront a ghost from her past.",
    popularity: 736.861,
    poster_path: "/n34lYVoFy1C2lc02i7eaZFWznuN.jpg",
    release_date: "2023-01-19",
    title: "Run Rabbit Run",
    video: false,
    vote_average: 5.3,
    vote_count: 93,
  },
  {
    adult: false,
    backdrop_path: "/ulaj7IhW72EK0cGSnMpP0UixTTC.jpg",
    genre_ids: [27, 53],
    id: 993867,
    original_language: "en",
    original_title: "Eradication",
    overview:
      "When an unknown disease wipes out most of the world’s population, a man with unique blood is isolated for study. Fearing for his wife’s safety, he breaks his quarantine – into a world overrun by monstrous Infected and a shadowy agency hunting them down.",
    popularity: 666.8,
    poster_path: "/6XZYA9VtCcidCU8Hus0J0V9wFhY.jpg",
    release_date: "2022-07-15",
    title: "Eradication",
    video: false,
    vote_average: 6.5,
    vote_count: 45,
  },
  {
    adult: false,
    backdrop_path: "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
    genre_ids: [27, 53],
    id: 758323,
    original_language: "en",
    original_title: "The Pope's Exorcist",
    overview:
      "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    popularity: 696.46,
    poster_path: "/gNPqcv1tAifbN7PRNgqpzY8sEJZ.jpg",
    release_date: "2023-04-05",
    title: "The Pope's Exorcist",
    video: false,
    vote_average: 7.2,
    vote_count: 1559,
  },
  {
    adult: false,
    backdrop_path: "/ajIgkZtZ2mme1vYbrfKSV2ddOuq.jpg",
    genre_ids: [27],
    id: 1083858,
    original_language: "en",
    original_title: "The Angry Black Girl and Her Monster",
    overview:
      "Vicaria is a brilliant teenager who believes death is a disease that can be cured. After the brutal and sudden murder of her brother, she embarks on a dangerous journey to bring him back to life.",
    popularity: 481.17,
    poster_path: "/4c3rU9R5oYexKFWaAHAc195B0RN.jpg",
    release_date: "2023-06-09",
    title: "The Angry Black Girl and Her Monster",
    video: false,
    vote_average: 7.1,
    vote_count: 10,
  },
  {
    adult: false,
    backdrop_path: "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
    genre_ids: [27, 14],
    id: 346364,
    original_language: "en",
    original_title: "It",
    overview:
      "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
    popularity: 440.351,
    poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    release_date: "2017-09-06",
    title: "It",
    video: false,
    vote_average: 7.2,
    vote_count: 17743,
  },
  {
    adult: false,
    backdrop_path: "/bylGn5OC2h3BWfGLYFtIcxlYxLy.jpg",
    genre_ids: [27, 53],
    id: 49018,
    original_language: "en",
    original_title: "Insidious",
    overview:
      "A family discovers that dark spirits have invaded their home after their son inexplicably falls into an endless sleep. When they reach out to a professional for help, they learn things are a lot more personal than they thought.",
    popularity: 375.844,
    poster_path: "/tmlDFIUpGRKiuWm9Ixc6CYDk4y0.jpg",
    release_date: "2010-09-13",
    title: "Insidious",
    video: false,
    vote_average: 6.9,
    vote_count: 6112,
  },
  {
    adult: false,
    backdrop_path: "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
    genre_ids: [27, 9648, 53],
    id: 934433,
    original_language: "en",
    original_title: "Scream VI",
    overview:
      "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    popularity: 415.507,
    poster_path: "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    release_date: "2023-03-08",
    title: "Scream VI",
    video: false,
    vote_average: 7.2,
    vote_count: 1466,
  },
  {
    adult: false,
    backdrop_path: "/4soWZwLbJz1XDJ6Astk76uorvXA.jpg",
    genre_ids: [27],
    id: 1115710,
    original_language: "en",
    original_title: "The Mount 2",
    overview:
      "A year after the incident at the Mount, the police are still investigating the murders of Philomena and Caroline. The Mount has been cordoned off by the police. However, on Halloween night, a group of teenagers break in. They plan on holding a wedding between friends, conducted by a rather odd character, however, little did they know some unexpected guests would show up to crash the party.",
    popularity: 427.127,
    poster_path: "/cJpHTbHobMYzEyHTgSaCcjy4ELB.jpg",
    release_date: "2023-05-12",
    title: "The Mount 2",
    video: false,
    vote_average: 5,
    vote_count: 13,
  },
  {
    adult: false,
    backdrop_path: "/baE88dSR0byNAMDBk8HENkdDbt0.jpg",
    genre_ids: [27, 53],
    id: 1098160,
    original_language: "en",
    original_title: "The Tank",
    overview:
      "In 1978 Oregon, Ben and Jules inherit an abandoned coastal property from Ben's late mother, who's never mentioned it. The untouched house has been kept a secret for 40 years and comes with a beautiful private cove and beach. Jules searches for answers while Ben unwittingly awakens a fiercely protective creature.",
    popularity: 332.501,
    poster_path: "/2VxEtwgzOUukatl2IKGn4borpgE.jpg",
    release_date: "2023-04-21",
    title: "The Tank",
    video: false,
    vote_average: 5.2,
    vote_count: 40,
  },
  {
    adult: false,
    backdrop_path: "/8Y0RxH5cXiKV8C9Wyj6JkW9VYaG.jpg",
    genre_ids: [27],
    id: 994143,
    original_language: "en",
    original_title: "Skinamarink",
    overview:
      "Two children wake up in the middle of the night to find their father is missing, and all the windows and doors in their home have vanished.",
    popularity: 326.633,
    poster_path: "/8qOTi8VXvnuLH0jijMBCyygtV9d.jpg",
    release_date: "2023-01-13",
    title: "Skinamarink",
    video: false,
    vote_average: 5.9,
    vote_count: 106,
  },
  {
    adult: false,
    backdrop_path: "/xkXsV1WOiKfAJ6dzXiavdwsZ3E2.jpg",
    genre_ids: [28, 53, 27],
    id: 799379,
    original_language: "ko",
    original_title: "늑대사냥",
    overview:
      "While under heavily armed guard, the dangerous convicts aboard a cargo ship unite in a coordinated escape attempt that soon escalates into a bloody, all-out riot. But as the fugitives continue their brutal campaign of terror, they soon discover that not even the most vicious among them is safe from the horror they unknowingly unleashed from the darkness below deck.",
    popularity: 310.462,
    poster_path: "/dniWicB6fa7NvpGbguxWlNPMc5f.jpg",
    release_date: "2022-09-21",
    title: "Project Wolf Hunting",
    video: false,
    vote_average: 6.4,
    vote_count: 179,
  },
  {
    adult: false,
    backdrop_path: "/fgQAPS9LwdW7zIdHZpgIvbV64Yu.jpg",
    genre_ids: [27, 53],
    id: 91586,
    original_language: "en",
    original_title: "Insidious: Chapter 2",
    overview:
      "The haunted Lambert family seeks to uncover the mysterious childhood secret that has left them dangerously connected to the spirit world.",
    popularity: 294.439,
    poster_path: "/w5JjiB3O1CLDXbTJe1QpU5RHmlU.jpg",
    release_date: "2013-09-12",
    title: "Insidious: Chapter 2",
    video: false,
    vote_average: 6.7,
    vote_count: 3787,
  },
  {
    adult: false,
    backdrop_path: "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
    genre_ids: [878, 27],
    id: 536554,
    original_language: "en",
    original_title: "M3GAN",
    overview:
      "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
    popularity: 291.98,
    poster_path: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
    release_date: "2022-12-28",
    title: "M3GAN",
    video: false,
    vote_average: 7.3,
    vote_count: 2863,
  },
];

function displaySearch() {
  var query = document.location.search.split("=")[1].split("&")[0]
  var userInput = document.location.search.split("=")[2]
  // console.log(query)
  // console.log(userInput)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk1MWRmZGYwNGYyYTkzODcwZGE0NjM5ZjAyZjQ4NyIsInN1YiI6IjY0YTgzMTU0OTY1MjIwMDBhZTg0ZTI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8GB2JNYGmG1oe1PqVgUTRIsrjnSCGqb4OD0fE8WhN8'
    }
  };

  fetch("https://api.themoviedb.org/3/search/" + query + "?query=" + userInput + "&include_adult=false&language=en-US&page=1", options)
    .then(response => response.json())
    .then(response => {
      var results = response.results
     
      var moviePoster = document.getElementById('resultsPoster')
      var movieTitle = document.getElementById('resultsTitle')
      var moviePosterLink = "https://image.tmdb.org/t/p/w300"+ results[0].poster_path
      moviePoster.src = moviePosterLink
      
      var movieTitleResult = results[0].original_title
      var id = results[0].id
  
      movieTitle.innerHTML = movieTitleResult
      console.log(results)
      console.log(id)
    })
    .catch(err => console.error(err));

}
displaySearch()

function getbyGenre() {
  let genreId = document.location.search.split("=")[1].split("&")[0];
  let genreName = document.location.search.split("&")[1].split("=")[1];
  genreElement.textContent = genreName;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdlOTcyOWNhNzA5ZjRiNzE1NmJlZjNkMGI5ZDYwZCIsInN1YiI6IjY0YTgyMTM1OTU3ZTZkMDEzOWNmYzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yf03KF5yK3_pSaqifJRp2-tzgrrsvlPYENFI3cqpaWQ",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
// getbyGenre();

function renderCards() {
  demoData.forEach((obj) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let figure = document.createElement("figure");
    figure.appendChild(card);
    let img = document.createElement("img");
    img.setAttribute("src", `${obj.poster_path}`);
  });
}

// async function createSearchList() {
//   let listOfIds = await getGenreList();
//   listOfIds.forEach(async (id)=>{
//     let response = await fetch()
//   })
// }

// getListByGenreId();

// renderSearchToPage(searchResultByGenre);

// function renderSearchToPage(array) {
//   if (array.length !== 0) {
//     array.forEach((el) => {
//       // let card = document.createElement("div");
//       // let figure = document.createElement("figure");
//       // let img = document.createElement("img");
//       console.log(el.poster);
//       // cardHolder.append(card);
//     });
//   }
// }

// Promise all demo

// let promise1 = Promise.resolve(12);
// let promise2 = Promise.resolve(30);
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 1000);
// });
// console.log("resolving promise");
// Promise.resolve("resolving first promise")
//   .then((data) => {
//     console.log(data);
//     let fetch_calls = []
//     data["titles"].forEach((obj) => {
//       let pr = fetch('url')
//       fetch_calls.push(pr)
//     })
//     //return Promise.all([promise1, promise2, promise3]);
//     return Promise.all(fetch_calls)
//   })
//   .then((data) => {
//     console.log(`promise all returned ${data}`);
//   });

// Async demo

// async function x() {
//   data = [];
//   list = await fetch("");
//   list.forEach(async (data) => {
//     let y = await fetch();
//     data.push(y);
//   });
//   return data;
// }

// let my_data = await x();
