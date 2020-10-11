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

  const questionsRegex = RegExp(".+/questions$");
  const usersRegex = RegExp(".+/users$");

  const questions = questionsRegex.test(window.location.href);
  const users = usersRegex.test(window.location.href);
  const askQuestions = window.location.href.includes("ask");

  if (questions) {
    const questionLinks = document.querySelectorAll("a[href='/questions']");
    questionLinks.forEach(
      (questionLink) => (questionLink.style.fontWeight = "bold")
    );
  }
  if (users) {
    const usersLinks = document.querySelectorAll("a[href='/users']");
    usersLinks.forEach((usersLink) => (usersLink.style.fontWeight = "bold"));
  }

  if (askQuestions) {
    const askQuestionsLink = document.querySelectorAll(
      "a[href='/questions/ask']"
    );
    askQuestionsLink.forEach(
      (askQuestionsLink) => (askQuestionsLink.style.fontWeight = "bold")
    );
  }
});
