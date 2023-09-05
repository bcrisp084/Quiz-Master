$(document).ready(function () {
  renderScores();
  const urlScore = new URLSearchParams(window.location.search);
  const score = urlScore.get("score");
  $(".modal").removeClass("hide");
  $(".home").on("click", function () {
    window.location.href = "index.html";
  });

  $(".submit").on("click", function (event) {
    event.preventDefault();
    const user = {
      initials: $("#initials").val(),
      score: score,
    };
    localStorage.setItem("user", JSON.stringify(user));
  });

  function renderScores() {
    const user = JSON.parse(localStorage.getItem("user")) || [];
    if (user) {
      const liEl = $("<li>").text(
        `Name: ${user.initials} - Score: ${user.score}`
      );
      $(".list").append(liEl);
    } else {
      $(".list").html(" ");
    }
    location.reload();
  }

  $(".clear").on("click", function () {
    console.log("clicked");
    localStorage.clear();
  });
});
