function search() {
  var input = document.getElementById("search-box").value.toLowerCase();
  var pages = [
    "/paintings.html",
    "/photography.html",
    "/posters.html",
    "/sketches.html",
    "/digital.html"
  ];

  for (var i = 0; i < pages.length; i++) {
    if (pages[i].toLowerCase().includes(input)) {
      window.location.href = pages[i];
      return;
    }
  }

  alert("No match found.");
}
