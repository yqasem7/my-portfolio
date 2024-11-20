// Example: Display a welcome message in the console when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to My Portfolio!");
});

function openModal(imageSrc) {
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  document.getElementById("modalImage").src = imageSrc;
  modal.show();
}
