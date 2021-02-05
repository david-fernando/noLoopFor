<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://images2.imgbox.com/23/40/erCGj2jK_o.png" alt="No loop for"></a>
</p>

<h1 align="center">No loop for</h1>

<div align="center">
  
![GitHub top language](https://img.shields.io/github/languages/top/david-fernando/noLoopFor) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/f39ced0748b84cf181d948c33dd510e2)](https://www.codacy.com/manual/david-fernando/noLoopFor?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=david-fernando/noLoopFor&amp;utm_campaign=Badge_Grade) [![GitHub license](https://img.shields.io/github/license/david-fernando/noLoopFor)](https://github.com/david-fernando/noLoopFor/blob/master/LICENSE)

</li>
</div>

---


### Languages
<ul style="display:inline; list-style-type:none">
  <li style="list-style-type:none"><a href="LEIAME.md">Portuguese</li>
  <li style="list-style-type:none"><a href="#">English</li>
</ul>

### About
JavaScript library for making functional loops

### Demonstration
 <img style="width:100%; height: 200px" src="https://images2.imgbox.com/83/3f/xxP0kvaO_o.gif" alt="No loop for demonstration">

### Instalation
To install on the node, just execute the command below on the terminal
```
npm install noloopfor
```
Or if you're off the nodejs, just add the line below in head of your html
```html
<script src="https://cdn.jsdelivr.net/gh/david-fernando/noForLoop/dist/noforloop.js"></script>
```
### How to use
If you are on nodejs, just import the library
```
const noloopfor = require('noloopfor')
```
If you aren't on the node, you don't need make any more. Just use the the available methods!

### loop
   - <h4>Syntax</h4>
  ```javascript
  loop(numberOfIterations, callback())
  ```
  - <h4>Example</h4>
  ```javascript
  let number = 10
  number.loop(20, (iterations)=>{
   console.log(iterations)
  })
  ```
### loopStep
   - <h4>Syntax</h4>
  ```javascript
  loopStep(numberOfIterations, numberStep, callback())
  ```
  - <h4>Example</h4>
  ```javascript
  let number = 10
  number.loopStep(100, 10, (iterations)=>{
   console.log(iterations)
  })
  ```
  

### decrementLoop
   - <h4>Syntax</h4>
  ```javascript
  decrementLoop(numberTarget, callback())
  ```
  - <h4>Example</h4>
  ```javascript
  let number = 10
  number.decrementLoop(1, (iterations)=>{
   console.log(iterations)
  })
  ```
  
### decrementStep
   - <h4>Syntax</h4>
  ```javascript
  decrementStep(numberTarget, numberStep, callback())
  ```
  - <h4>Example</h4>
  ```javascript
  let number = 20
  number.decrementStep(10, 1, (iterations)=>{
   console.log(iterations)
  })
  ```

### Licence:
MIT
