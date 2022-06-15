// const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
// const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");

const backdropToggler = () => {
  backdrop.classList.toggle("visible");
};

const addMovieModal = document.getElementById("add-modal");

const toggleMovieHandler = () => {
  addMovieModal.classList.toggle("visible");
  backdropToggler();
};

const backdropClickHandler = () => {
  toggleMovieHandler();
};

startAddMovieButton.addEventListener("click", toggleMovieHandler);
backdrop.addEventListener("click", toggleMovieHandler);
