var ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.font = "30px Arial";
  ctx.strokeText("I love JavaScript", 10, 50);
  ctx.moveTo(0,0);
  ctx.lineTo(200,100);
  ctx.stroke();
