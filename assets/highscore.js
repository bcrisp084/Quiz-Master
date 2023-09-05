$(document).ready(function () {
  $(".modal").removeClass("hide");
  $(".home").on("click", function () {
    window.location.href = "index.html";
  });

  $(".clear").on("click", function () {
    console.log("clicked");
    localStorage.clear();
  });
});
