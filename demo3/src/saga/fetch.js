export default function(status) {
  return new Promise((resolve, reject) => {
    if ('success' === status)
      setTimeout(()=>resolve(100), 3*1000)
    else if ('error' === status)
      setTimeout(()=>reject(-100), 3*1000)
  })
}
