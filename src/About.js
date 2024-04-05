 document.addEventListener("DOMContentLoaded", () => {
  const content = document.createElement("div");
  const divAbout = document.createElement("h2");
  divAbout.textContent = "This is the about tab";
  content.appendChild(divAbout);
});

export { divAbout }