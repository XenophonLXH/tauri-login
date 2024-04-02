const { invoke } = window.__TAURI__.tauri;

let username;
let response;

async function validate() {
  response.textContent = await invoke("wrong_pass", { name: username.value });
}

window.addEventListener("DOMContentLoaded", () => {
  username = document.querySelector("#username");
  response = document.querySelector("#response");
  document.querySelector("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
  });
});
