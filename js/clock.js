$(document).ready(function() {
  var datetime = new Date(),
    h = datetime.getHours(),
    m = datetime.getMinutes(),
    s = datetime.getSeconds();

  var myPointerH = $(".clockH");
  var myPointerM = $(".clockM");
  var myPointerS = $(".clockS");

  var oneSecond = 60 / 60;
  var oneHour = 60 * 60;
  var twelveHours = 12 * 60 * 60;

  TweenMax.set(".second, .hour, .minute", {
    yPercent: -50,
    transformOrigin: "50% 100%"
  });

  var hourTween = TweenMax.to(myPointerH, twelveHours, {
    rotation: "360_cw",
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
  });

  var minuteTween = TweenMax.to(myPointerM, oneHour, {
    rotation: "360",
    ease: Linear.easeNone,
    paused: true
  });

  var secondsTween = TweenMax.to(myPointerS, oneSecond, {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
    paused: true
  });

  function showMorningTime(){
    document.body.style.backgroundColor = "#FED370";
  }

  function showDayTime(){
    document.body.style.backgroundColor = "#FD8F07";
    document.getElementById('title').style.color = "white";
    document.getElementById('actualTime').style.color = "white";
  }


  function showNightTime(){
    document.body.style.backgroundColor = "#506F86";
    document.getElementById('title').style.color = "white";
    document.getElementById('actualTime').style.color = "white";
  }

  function showTime() {
    (datetime = new Date()),
      (h = datetime.getHours()),
      (m = datetime.getMinutes()),
      (s = datetime.getSeconds());

    minutesAsSeconds = m * 60;
    hoursAsSeconds = h * 60 * 60;
    secondsAsSeconds = s / 60;

    hourTween.progress(hoursAsSeconds / twelveHours);
    minuteTween.progress(minutesAsSeconds / oneHour);
    secondsTween.progress(secondsAsSeconds / oneSecond);

    if(h >= 6 && h <=12){
        showMorningTime();
    }if(h >= 13 && h <= 18){
          showDayTime();
    }if(h >= 17 && h <= 5){
        showNightTime();
    }

    document.getElementById("actualTime").innerHTML = h + " : " + m + " : " + s;

  }

  showTime();

  setInterval(function() {
    showTime();
  }, 1000);
});
