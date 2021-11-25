function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world!!!')
    }, 2000)
  })
}
async function helloword() {
  let string = await getString()
  return string
}

export default helloword
