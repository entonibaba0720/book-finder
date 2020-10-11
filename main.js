document.addEventListener("DOMContentLoaded", function (event) {
  let searchInput = document.getElementById("search");
  let searchButton = document.getElementById("search-btn");
  function searching() {
    document.getElementById("content").innerHTML = "";

    fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchInput.value)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.items.length; i++) {
          console.log(data.items[i].volumeInfo.title);
          content.innerHTML +=
            "<h2>" + data.items[i].volumeInfo.title + "</h2>";
        }
      });
    searchInput.value = "";
  }
  searchButton.addEventListener("click", searching, false);
});
