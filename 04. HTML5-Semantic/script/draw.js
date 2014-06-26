var ctx = document.getElementById("myCanvas").getContext("2d");

ctx.font = "26px Arial";
ctx.fillText("I love JavaScript", 5, 50);
ctx.strokeStyle="#FF0000";
ctx.translate(0.5, 0.5);
ctx.beginPath();
ctx.setLineDash([5,2]);
ctx.rect(0,0,200,200);
ctx.stroke();
ctx.fillStyle = "#F1DA4E";
ctx.fillRect(40, 70, 100, 100);
ctx.fillStyle = "#000000"
ctx.font = "48px Arial";
ctx.fillText("JS", 75, 160);