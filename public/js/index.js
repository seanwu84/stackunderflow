window.addEventListener("DOMContentLoaded", () => {
  const expandElement = (element) => {
    element.style.display === "block"
      ? (element.style.display = "none")
      : (element.style.display = "block");
  };

  const links = document.getElementById("links");
  const searchBar = document.getElementById("mobile-searchBar");

  document.getElementById("hamburger").addEventListener("click", () => {
    expandElement(links);
  });

  document.getElementById("search-icon").addEventListener("click", () => {
    expandElement(searchBar);
  });

  document.addEventListener("click", (e) => {
    if (e.target.id !== "hamburger") {
      links.style.display = "none";
    }
    if (e.target.id !== "search-icon" && e.target.id !== "mobile-search") {
      searchBar.style.display = "none";
    }
  });
});
