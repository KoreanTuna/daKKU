var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('profile.ejs', {})
})

function updateTime() {
  var date = new Date();
  
  var daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  var day = daysOfWeek[date.getDay()];
  
  var months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  var month = months[date.getMonth()];
  
  var dayOfMonth = date.getDate();
  
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  var time = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
  
  document.getElementById("day").textContent = day;
  document.getElementById("month").textContent = month;
  document.getElementById("date").textContent = dayOfMonth;
  document.getElementById("time").textContent = time;
}

setInterval(updateTime, 1000);


module.exports = router