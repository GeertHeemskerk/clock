$(document).ready(function() {

  //hieronder worden de datums gevalideerd
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

  //hieronder worden alle divs en svg's gevalideerd
  var cloud1 = $('.cloud');
  var cloud2 = $('.cloud2');

  var sun = $('#sun');
  var moon = $('#moon');

  var body = $('body');

  var beerTime = $('.beerTime');

  //hier wordt de animatie gegeven aan de body zodat hij stuitert
  TweenMax.to(body, 3,{
    ease: Bounce.easeOut,
    y: 500
  });

  //hier worden de animaties gevalideerd aan de svg's
  function movingClouds(){
    document.getElementById('cloud').style.fill = "#ffffff";
    document.getElementById('cloud2').style.fill = "#ffffff";
    TweenMax.to(cloud, 8, {
      ease: Power0.easeNone,
      x:"100vw",
      repeat:-1
    });
    TweenMax.to(cloud2, 8, {ease: Power0.easeNone,
       x:"100vw",
      repeat:-1
    }).play(4);
  }

  //hier worden de planeten geanimeerd
  function movingPlanets(){
    TweenMax.to(moon, 60, {
      ease: Power0.easeNone,
      y:"-440"
    });
    TweenMax.to(sun, 60, {
      ease: Power0.easeNone,
      y:"-440"
    });
  }

  //hier wordt de biertijd geanimeerd
  function beerTimeMsg(){
    document.getElementsByClassName('beerTime')[0].style.visibility = "visible";

    //hier wordt de message geanimeerd
    TweenMax.to(beerTime, 2, {
      ease: Power0.easeNone,
      y:"-55"
    }).delay(2);

    //hier wordt na 20seconden de class zijn opacity 0 zodat hij weg is
    TweenMax.to(beerTime, 3, {
      opacity: 0
    }).delay(20);
  }

  TweenMax.set(".second, .hour, .minute", {
    yPercent: -50,
    transformOrigin: "50% 100%"
  });


  //hier onder worden alle wijzers geanimeerd en gezegd hoever ze mogen draaien
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

  //hieronder worden alle verschillende soort tijden gemaakt
  function showMorningTime(){
    document.body.style.backgroundColor = "#FED370";
    document.getElementById('sun').style.visibility = "visible";
    document.getElementById('moon').style.visibility = "invisible";
  }

  function showDayTime(){
    document.body.style.backgroundColor = "#FD8F07";
    document.getElementById('title').style.color = "#ffffff";
    document.getElementById('actualTime').style.color = "#ffffff";
  }

  function showNightTime(){
    document.body.style.backgroundColor = "#506F86";
    document.getElementById('title').style.color = "#ffffff";
    document.getElementById('actualTime').style.color = "#ffffff";
    document.getElementById('moon').style.visibility = "visible";
    document.getElementById('sun').style.visibility = "invisible";
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

    //hier worden alle verschillende tijden gescheiden
    if(h >= 6 && h <=12){
      showMorningTime();
    }if(h >= 13 && h <= 18){
      showDayTime();
    }if(h >= 19 && h >= 5){
      showNightTime();
      beerTimeMsg();
    }

    //hier wordt de digitale clock laten zien
    document.getElementById("actualTime").innerHTML = h + " : " + m + " : " + s;

  }

  showTime();
  movingClouds();
  movingPlanets();

  //hier update hij de functie na elke seconde
  setInterval(function() {
    showTime();
  }, 1000);
});
