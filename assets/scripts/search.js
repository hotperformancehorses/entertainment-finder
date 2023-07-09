const api_key_sucheta_watchmode = "GuNGDaJ1Dqvw6nIrD3bG9dc6LAb0Rjs4YjZUe9Lt";
let searchResultByGenre = [];
let genreElement = document.getElementById("genreName");

function getListByGenreId() {
  let genreId = document.location.search.split("=")[1];
  let genreName = document.location.search.split("&")[1].split("=")[1];
  genreElement.textContent = genreName;

  //   fetch(
  //     `https://api.watchmode.com/v1/list-titles/?apiKey=${api_key_sucheta_watchmode}&genres=${genreId}&limit=50`
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Couldn't find the requested data");
  //       }
  //     })
  //     .then((data) => {
  //       let id_list = [];
  //       data["titles"].forEach((obj) => {
  //         tmdb_id_list.push(obj.id);
  //       });
  //       return tmdb_id_list;
  //     })
  //     .then((idList) => {})
  //     .catch((err) => {
  //       console.log(`There was an error`, err);
  //     });
}
getListByGenreId();
