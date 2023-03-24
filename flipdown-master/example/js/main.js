document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
  // var twoDaysFromNow = new Date("2023-04-15T00:00:00Z").getTime() / 1000;
  var april15th2023 = new Date("2023-04-15T00:00:00Z").getTime() / 1000;


  // Set up FlipDown
  var flipdown = new FlipDown(april15th2023)
  

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
