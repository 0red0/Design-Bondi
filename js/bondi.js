const lists = document.querySelectorAll(".our-work ul li");
const apps = document.querySelectorAll(".our-work .row > div");

// Add active class on selected list
lists.forEach((l) => l.addEventListener("click", toggleActive));
function toggleActive() {
   lists.forEach((x) => x.classList.remove("active"));
   this.classList.add("active");
}

// Show desired apps on click
lists.forEach((l) => l.addEventListener("click", showApps));
function showApps() {
   //1- Hide all
   apps.forEach((a) => a.classList.add("d-none"));
   //2- show All case
   if (this.innerText == "All") {
      apps.forEach((a) => a.classList.remove("d-none"));
   }
   //3- show desired category only
   //prettier-ignore
   document.querySelectorAll(`.${this.dataset.group}`).forEach((x) => x.classList.remove("d-none"));
}
