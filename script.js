document.body.onload = function () {
  let rtClock = new Date();
  let jam = rtClock.getHours();
  let menit = rtClock.getMinutes();
  let detik = rtClock.getSeconds();

  jam = ("0" + jam).slice(-2);
  menit = ("0" + menit).slice(-2);
  detik = ("0" + detik).slice(-2);

  document.getElementById('clock').innerHTML =
  jam + "  :  " + menit + "  :  " + detik;
  let t = setTimeout(document.body.onload, 500);
}