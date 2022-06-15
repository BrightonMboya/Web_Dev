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

const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
  } else {
    entryTextSection.style.display = "none";
  }
};

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

const clearMovieInputHandler = () => {
  for (input of userInput) {
    input.value = "";
  }
};

const cancelMovieHandler = () => {
  toggleMovieHandler();
  clearMovieInputHandler;
};

const addMovieHandler = () => {
  const titleValue = userInput[0].value;
  const imageUrlValue = userInput[1].value;
  const ratingValue = userInput[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    ratingValue.trim() < 1 ||
    ratingValue.trim() > 5
  ) {
    alert("Please Enter Bloody Valid Inputs eeeh!!");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push[newMovie];
  console.log(movies);
  clearMovieInputHandler();
  toggleMovieHandler();
};

// const cancelBackdropHandler = () => {

// }

addMovie.addEventListener("click", addMovieHandler);
startAddMovieButton.addEventListener("click", toggleMovieHandler);
backdrop.addEventListener("click", toggleMovieHandler);
cancelMovie.addEventListener("click", cancelMovieHandler);
