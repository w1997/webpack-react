// src/index.js
import style from "./index.less"
if (module && module.hot) {
  module.hot.accept();
}
const ele = document.querySelector('#root')
ele.innerHTML = '阶段测试4'
const newEle = document.createElement("div")
newEle.className = style.ele
newEle.innerHTML = '测试css 2wwww'
ele.appendChild(newEle)