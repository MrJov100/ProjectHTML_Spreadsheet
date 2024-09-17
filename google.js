const scriptURL =
  "https://script.google.com/macros/s/AKfycbyaTnAiWjzoTW1v7CQwQZfPvxzNZW11c5IhLWG6-ZJL5rWFKZVAG0Iu_KpO0ia4dyBDTw/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! Your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
