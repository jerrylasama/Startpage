function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDay();
    var mon = today.getMonth();
    var year = today.getFullYear();
    h = checkTime(h)
    m = checkTime(m);
    document.getElementById('date').innerHTML =
    year + "年 "+ mon + "月 " + day + "日";
    document.getElementById('time').innerHTML =
    h + ":" + m + " ";
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }