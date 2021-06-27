const navbarEl = document.getElementById("navbar");
const navBarHTML = `
  <nav class="navbar">
    <span class="navbar-toggle" id="js-navbar-toggle"> Menu </span>
    <a href="#" class="logo">Susie</a>
    <ul class="main-nav" id="js-menu">
      <li>
        <a href="/" class="nav-links">Home</a>
      </li>
      <li>
        <a href="#" class="nav-links">Projects</a>
      </li>
      <li>
        <a href="#" class="nav-links">Blog</a>
      </li>
      <li>
        <a href="/recently-read" class="nav-links">Recently Read</a>
      </li>
    </ul>
  </nav>`;
navbarEl.innerHTML = navBarHTML;

const mainNav = document.getElementById("js-menu");
const navBarToggle = document.getElementById("js-navbar-toggle");
navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
