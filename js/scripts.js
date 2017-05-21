function Ticket(movie, time, age) {
  this.movieName = movie;
  this.showTime = time;
  this.userAge = age;
}

Ticket.prototype.ticketPrice = function () {
  var movieCost = 0;
  var showCost = 0;
  var ageCost = 0;
  if (this.movieName === "new") {
    movieCost = 300;
  }
  else {
    movieCost = 150;
  }

  if (this.showTime === "first") {
    showCost = 100;
  }
  else if (this.showTime === "second") {
    showCost = 75;
  }
  else if (this.showTime === "third") {
    showCost = 50;
  }
  else {
    showCost = 25;
  }

  if (this.userAge === "youth")
  {
    ageCost = 50;
  }
  else if (this.userAge === "adult")
  {
    ageCost = 75;
  }
  else
  {
    ageCost = 25;
  }
  return movieCost + showCost + ageCost;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();

  var movieInput = $("#movie").val();
  var timeInput = $("input:radio[name=time]:checked").val();
  var ageInput = $("input:radio[name=age]:checked").val();
  var newTicket = new Ticket(movieInput, timeInput, ageInput);
  $(".ticket-price").show();
  $("#result").text(newTicket.ticketPrice());
  });
});
