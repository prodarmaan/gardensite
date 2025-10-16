const landingLogo = document.querySelector('#landing img');
const hoverText = document.querySelector('#landing .hover-text');
const centerText = document.getElementById('center-text');
const navbar = document.getElementById('navbar');

landingLogo.addEventListener('click', () => {
  // Fade logo to 60%
  landingLogo.style.opacity = 0.6;

  // Hide hover text
  hoverText.style.opacity = 0;

  // After fade completes, show center text and navbar
  setTimeout(() => {
    centerText.style.display = 'flex';
    navbar.style.display = 'flex';
  }, 1500); // matches CSS fade duration
});