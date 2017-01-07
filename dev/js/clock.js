var canvas = document.getElementById('clock');
var ctx = canvas.getContext('2d');
var radius = canvas.height / 2;
ctx.translate(radius,radius);
var scaleRadius = 0.8;
var dim;
var now = new Date;
var hour = now.getHours();
var offset;
//offset = now.getTimeZoneOffset / 60;
if(hour + offset >= 18 || hour + offset <= 6) {
  dim = 1;
}else{
  dim = 0;
}
radius = radius * scaleRadius;
//drawClock();
setInterval(drawClock,1000);

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0,0,radius,0,2*Math.PI);
  if(dim == 0) {
    ctx.fillStyle = '#fff';
  } else {
    ctx.fillStyle = '#666';
  }
  ctx.fill();

  ctx.strokeStyle = '#092f58';
  ctx.lineWidth = radius*0.1;
  ctx.stroke();

  ctx.beginPath();
  var small = radius*0.08;
  ctx.arc(0,0,small,0,2*Math.PI);
  ctx.fillStyle = '#092f58';
  ctx.fill();
}

function drawNumbers(ctx,radius){
  var ang;
  var num;
  var numOffset = 0.8;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num= 1; num <= 12; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*numOffset);
      ctx.rotate(-ang);
      if(dim == 0) {
        ctx.fillStyle = '#333';
      }else{
        ctx.fillStyle = '#ddd';
      }
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*numOffset);
      ctx.rotate(-ang);
  }
}

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function getTextHour() {
  var now = new Date();
}

function drawTime(ctx, radius){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var offset;
    offset = now.getTimezoneOffset();
    offset = offset / 60;
    console.log(offset);
    //hour = hour + offset;
    if(hour >= 24) {
      hour = hour - 12;
      day = day + 1;
    }
    $('#clock-wrap .text-time').html(year + '年' + month + '月' + day + '日 <br>' + hour + '時' + minute + '分' + second + '秒');
    // if(hour <= 12) {
    //   $('#clock-wrap .text-time').html(year + '年' + month + '月' + day + '日 <br>午前' + hour + '時' + minute + '分' + second + '秒');
    // } else {
    //   $('#clock-wrap .text-time').html(year + '年' + month + '月' + day + '日 <br>午後' + (hour - 12) + '時' + minute + '分' + second + '秒');
    // }

    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);


}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
