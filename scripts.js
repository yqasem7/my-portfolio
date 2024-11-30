// Example: Display a welcome message in the console when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to My Portfolio!");
});

function openModal(imageSrc) {
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  document.getElementById("modalImage").src = imageSrc;
  modal.show();
}

// Toggle the About Bar
document
  .getElementById("aboutBarToggle")
  .addEventListener("click", function () {
    const aboutBar = document.getElementById("aboutBar");
    const mainContainer = document.querySelector(".main-container");

    aboutBar.classList.toggle("active");
    mainContainer.classList.toggle("shifted");
  });

// Resume page
