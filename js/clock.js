
const offsetHours = 7
const offsetMinutes = 15
const offsetSeconds = 75

export function startTime(elem) {

  const today = new Date()
  let h = today.getHours()+offsetHours
  let m = today.getMinutes()+offsetMinutes
  let s = today.getSeconds()+offsetSeconds
  m = checkTime(m)
  s = checkTime(s)
  elem.innerHTML = "FST: "+ h + ":Z0:" + m + ":" + s
  const t = setTimeout(() =>{startTime(elem)}, 1000)

}

function checkTime(i) {

  if (i < 10) {i = "0" + i}
  return i

}
