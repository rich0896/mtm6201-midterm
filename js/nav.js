// Custom function to allow for mobile hamburger nav menu!
// Makes navlinks visible on click, otherwise hides them.
function openNav() {
    var x = document.getElementById("menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }