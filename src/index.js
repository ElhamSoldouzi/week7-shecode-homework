function searchSubmit(event) {
  event.preventDefalt();
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
