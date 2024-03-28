const content = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.textContent = "Welcome to the new Restaurant";
  content.appendChild(header);
});

export { content };
