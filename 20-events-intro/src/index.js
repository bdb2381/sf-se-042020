document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM has loaded");
  // listenToAlertButtonClick();
  listenToFormSubmit();
  listenToHelicopterParentClick();
});

function listenToHelicopterParentClick() {
  const helicopterParent = document.getElementById("helicopter-parent");

  helicopterParent.addEventListener("click", function (e) {
    switch (e.target.dataset.name) {
      case "alert":
        alert("WARNING");
        break;
      case "log":
        console.log("LOGGING");
        break;
      case "error":
        console.error("ERROR");
        break;
      default:
        break;
    }

    // if (e.target.dataset.name === "alert") {
    //   alert("WARNING");
    // } else if (e.target.dataset.name === "log") {
    //   console.log("LOGGING");
    // } else if (e.target.dataset.name === "error") {
    //   console.error("ERROR");
    // }
  });
}

function listenToFormSubmit() {
  const commentForm = document.getElementById("comment-form");
  // const commentForm = document.getElementsByTagName("form")[0];

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const commentInput = document.getElementById("new-comment");
    const commentText = commentInput.value;
    // const commentText = event.target.comment.value;

    const commentEl = document.createElement("p");
    // add commentText to p tag
    commentEl.innerText = commentText;
    //get div to attach p tag to
    const container = document.getElementById("comments-container");
    // attach p tag to div
    container.append(commentEl);

    commentInput.value = "";
  });
}

function listenToAlertButtonClick() {
  const alertButton = document.querySelector("button");
  // const alertButton = document.querySelector("#helicopter-parent button");
  // const alertButton = document.querySelectorAll('[data-name=alert]')
  // const alertButton = document.querySelectorAll('button')[0]

  // alertButton.addEventListener("click", function () {
  //   alert("you clicked the alert button");
  // });

  alertButton.addEventListener("click", function () {
    alert("you clicked the alert button");
  });
}
