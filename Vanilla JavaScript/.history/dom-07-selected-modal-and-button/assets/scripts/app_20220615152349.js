// const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
// const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const startAddMovieButton = document.querySelector("header button");

const addMovieModal = document.getElementById("add-modal");

const backdrop = document.getElementById("backdrop");

const cancelMovie = document.getElementById("cancel");

const addMovie = cancelMovie.nextElementSibling;
const userInput = addMovieModal.querySelectorAll("input");

const backdropToggler = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieHandler = () => {
  addMovieModal.classList.toggle("visible");
  backdropToggler();
};

const backdropClickHandler = () => {
  toggleMovieHandler();
};

// const cancelBackdropHandler = () => {

// }

startAddMovieButton.addEventListener("click", toggleMovieHandler);
backdrop.addEventListener("click", toggleMovieHandler);
cancelMovie.addEventListener("click", backdropClickHandler);
