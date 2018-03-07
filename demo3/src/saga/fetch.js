export default function() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>resolve(100), 3*1000)
  })
}
