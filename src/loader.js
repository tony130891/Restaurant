(function loader() {
  const content = document.querySelector("#content");

  content.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.textContent = "Welcome to the new Restaurant";
    content.appendChild(header);
  });
})();

export default loader;
