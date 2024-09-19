const announcementDate = new Date("June 26, 2019"); // Set the announcement date
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const timeDifference = now - announcementDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  countdownElement.textContent = `It's been ${days} days since Silksong was announced!`;
}

updateCountdown(); // Call the function initially to display the time
setInterval(updateCountdown, 1000); // Update the countdown every second
