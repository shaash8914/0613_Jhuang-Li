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

// 問題上拉

$(function () {
  $("#slideButton").click(function () {
    $(".ans").slideToggle(1500, "easeInBack");
  });
});


