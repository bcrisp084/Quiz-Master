$(document).ready(function () {
  renderScores();
  const storedUsers = [];
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
    const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
    storedUsers.push(user);
    localStorage.setItem("user", JSON.stringify(storedUsers));
    location.reload();
  });

  function renderScores() {
    const user = JSON.parse(localStorage.getItem("user")) || [];
    if (user.length > 0) {
      user.map((user) => {
        const liEl = $("<li>");
        liEl.text(`${user.initials} - ${user.score}`);
        $(".list").append(liEl);
      });
    } else {
      $(".list").append("No scores yet!");
    }
  }

  $(".clear").on("click", function () {
    console.log("clicked");
    localStorage.clear();
  });
});
