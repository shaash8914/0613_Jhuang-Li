//to top

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//to scrollButton

document.getElementById("scrollButton").addEventListener("click", () => {
  document.getElementById("scrollClass").scrollIntoView({ behavior: "smooth" });
});

