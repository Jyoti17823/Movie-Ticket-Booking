/*
Step 1: Get references to DOM elements
*/
// Get a reference to the main container
const container = document.querySelector(".container");

// Reference of all available seats
const seats = document.querySelectorAll(".row .seat:not(.sold)");

// Reference of the count and total elements
const count = document.getElementById("count");
const total = document.getElementById("total");

// Reference of the movie dropdown
const movieSelect = document.getElementById("movie");
let ticketPrice=+movieSelect.value;
/*
Step 2: Add event listeners
*/
// let ticketPrice ;
// Event listner for movie selection change
movieSelect.addEventListener("change", e => {
  //Update ticket price and store selected movie data
 ticketPrice = +e.target.value;
//   setMovieData(e.target.selectedIndex, e.target.value);

  // Update displayed count and total
  updateSelectedCount();
});

// Event listner for seat clicks
container.addEventListener("click", e => {
  // check if a seat is clicked and not sold
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    //Toggle seat selection
    e.target.classList.toggle("selected");

    // Update displayed count and total
    updateSelectedCount();
  }
});

/*
Step 3: Define funtion to update selected count and total
*/

function updateSelectedCount() {
  // Get all selected seats
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Get an array of selected seats's indexes
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  // Store selected seats index into local storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  // Calculate selected seats and count
  const selectedSeatsCounts = selectedSeats.length;

  // Update UI with selected seats count and total price
  count.innerText = selectedSeatsCounts;
  total.innerText = selectedSeatsCounts * ticketPrice;
  }
// step:4 store movie data in local storage
function setMovieData(movieindex,movieprice){
    localStorage.setItem("selectedmovieindex",movieindex);
    localStorage.setItem("selectedmovieprice",movieprice);
}
// step:5 populate ui with local storage data 
function populateui(){
    const selectedSeats=JSON.parse(localStorage.getItem("selectedseats"));
}

populateui();
