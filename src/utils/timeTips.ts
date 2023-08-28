export const getTime = () => {
  const hour = new Date().getHours()
  if (hour >= 4 && hour <= 5) {
    return '凌晨好'
  } else if (hour >= 6 && hour <= 10) {
    return '早上好'
  } else if (hour >= 11 && hour <= 14) {
    return '中午好'
  } else if (hour >= 15 && hour <= 18) {
    return '下午好'
  } else if (hour >= 19 && hour <= 21) {
    return '晚上好'
  } else {
    return '深夜好'
  }
}
