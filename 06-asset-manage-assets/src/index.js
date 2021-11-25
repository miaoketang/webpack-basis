import helloword from './hello-word'
import imgSrc from './assets/music.png'
import logoSvg from './assets/notes-folder-icon.svg'
import exampleTxt from './assets/example.txt'
import jpgMap from './assets/client.jpg'
import './style.css'
import './style.less'
import Data from './assets/timedtext.xml'
import Notes from './assets/data.csv'

console.log(helloword())

// asset/resource
const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)

// asset/inline
const img2 = document.createElement('img')
img2.style.cssText = 'width:600px;height:200px;'
img2.src = logoSvg
document.body.appendChild(img2)

// asset/source
const block = document.createElement('div')
block.style.cssText = 'width:200px;height:200px;background:yellow;'
block.textContent = exampleTxt
block.classList.add('block-bg')
document.body.appendChild(block)

// asset
const img3 = document.createElement('img')
img3.style.cssText = 'width:600px;height:200px;background:gray;display:block;'
img3.src = jpgMap
document.body.appendChild(img3)

document.body.classList.add('hello')

console.log(Data)
console.log(Notes)
