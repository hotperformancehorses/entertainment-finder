const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdlOTcyOWNhNzA5ZjRiNzE1NmJlZjNkMGI5ZDYwZCIsInN1YiI6IjY0YTgyMTM1OTU3ZTZkMDEzOWNmYzUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yf03KF5yK3_pSaqifJRp2-tzgrrsvlPYENFI3cqpaWQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));