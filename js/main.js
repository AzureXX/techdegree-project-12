$("#about-me p").on("mouseover", () => {
  $("#about-me p").css("color", "#fff");
});

var clickCount = 0;

$("#about-me img").on("click", () => {
  clickCount++;
  if(clickCount=== 5) {
    alert("Why are you clicking me");
  } else if (clickCount=== 10) {
    alert("WHY?! WHY?! Do you have a plan?");
  } else if (clickCount=== 15) {
    alert("Please STOP it!!!");
  } else if (clickCount=== 20) {
    alert("STOP IT NOW!!! OR YOU WILL REGRET!!!");
  } else if (clickCount=== 25) {
    $("#about-me img").attr("src", "images/realface.png")
    alert("OK, you revealed my real face");
  }

})
