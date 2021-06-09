



function startTime(elem) {
  let today = new Date();
  let h = today.getHours()+7;
  let m = today.getMinutes()+17;
  let s = today.getSeconds()+7;
  m = checkTime(m);
  s = checkTime(s);
  elem.innerHTML = "FST: "+ h + ":Z0:" + m + ":" + s;
  let t = setTimeout(() =>{startTime(elem)}, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i}
  return i
}
