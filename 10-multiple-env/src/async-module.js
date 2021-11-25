function getComponet() {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div')
    element.innerHTML = _.join(['async-module.js', 'Hello', 'webpack'], ' ')
    return element
  })
}

getComponet().then((element) => {
  document.body.appendChild(element)
})
