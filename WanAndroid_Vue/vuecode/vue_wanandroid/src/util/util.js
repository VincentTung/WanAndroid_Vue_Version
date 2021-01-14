let formatMsgTime = function (timespan) {
  let dateTime = new Date(timespan)
  let year = dateTime.getFullYear()
  let month = dateTime.getMonth() + 1
  let day = dateTime.getDate()
  let hour = dateTime.getHours()
  let minute = dateTime.getMinutes()
  let second = dateTime.getSeconds()
  let now = new Date()
  let nowNew = Date.parse(now.toDateString())

  let milliseconds = 0
  let timeSpanStr

  milliseconds = nowNew - timespan

  if (milliseconds <= 1000 * 60 * 1) {
    timeSpanStr = '刚刚'
  } else if (
    1000 * 60 * 1 < milliseconds &&
    milliseconds <= 1000 * 60 * 60
  ) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60)) + '分钟前'
  } else if (
    1000 * 60 * 60 * 1 < milliseconds &&
    milliseconds <= 1000 * 60 * 60 * 24
  ) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
  } else if (
    1000 * 60 * 60 * 24 < milliseconds &&
    milliseconds <= 1000 * 60 * 60 * 24 * 15
  ) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
  } else if (
    milliseconds > 1000 * 60 * 60 * 24 * 15 &&
    year === now.getFullYear()
  ) {
    timeSpanStr = `${month}-${day} ${hour}:${minute}`
  } else {
    timeSpanStr =
      `${year}-${month}-${day} ${hour}:${minute}`
  }
  return timeSpanStr
}
export {
  formatMsgTime
}
