function dateTimeStr() {
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var ms = d.getMilliseconds();
  var sec = d.getSeconds();
  return year + "-" + month + "-" + day + "-" + sec + "-" + ms;
}