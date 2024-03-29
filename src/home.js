const content = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", () => {
  const h4 = document.createElement("h4");
  h4.textContent = "Welcome to the new Restaurant";
  content.appendChild(h4);
});

export { content };
