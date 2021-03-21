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
  <li style="list-style-type:none"><a href="https://github.com/david-fernando/noLoopFor/blob/master/LEIAME.md">Portuguese</li>
  <li style="list-style-type:none"><a href="#">English</li>
</ul>

### About
JavaScript library for making functional loops

### Get Started

  - <h4>On the Node JS</h4>
  To install on the node, just execute the command below on the terminal
  ```
  npm install noloopfor
  ```
  To import the the desired function use destructuring assignment, for example, the bellow code is importing the function loop.
  ```javascript
  const { loop } = require('noloopfor')
  ```
  If using React JS, or some other JS library that allows you to use the ESM syntax, you can use it with destructuring assignment, as in the example below
  ```javascript
  import { loop } from 'noloopfor'
  ```
 - <h4>On the browser</h4>
  If you're out of Node JS you don't need to install anything, just import the desired function using ESM syntax, for example, the below code is importing the function loop, and then is implementing the same.
  
  ```html
  <script type="module">
  import { loop } from 'https://cdn.jsdelivr.net/gh/david-fernando/noForLoop/dist/noforloop.js'

  const number = 10

  loop(number, 20, (iterations)=>{
   console.log(iterations)
  })

  </script>
  ```

  - <h4>With Typscript</h4>
  Noloopfor can now be used with TypeScript, for this just install the TypeScript declarations with one of the commands below
  ```javascript
  npm install @types/noloopfor

  // or

  yarn add @types/noloopfor

  ```
### Reference

### loop
   - <h4>Syntax</h4>
  ```javascript
  loop(number, numberOfIterations, callback)
  ```
  - <h4>Example</h4>
  ```javascript
  const number = 10
  loop(number, 20, (iterations)=>{
   console.log(iterations)
  })
  ```
### loopStep
   - <h4>Syntax</h4>
  ```javascript
  loopStep(number, numberOfIterations, numberStep, callback)
  ```
  - <h4>Example</h4>
  ```javascript
  const number = 10
  loopStep(number, 100, 10, (iterations)=>{
   console.log(iterations)
  })
  ```
  

### decrementLoop
   - <h4>Syntax</h4>
  ```javascript
  decrementLoop(number, numberTarget, callback)
  ```
  - <h4>Example</h4>
  ```javascript
  const number = 10
  decrementLoop(number, 1, (iterations)=>{
   console.log(iterations)
  })
  ```
  
### decrementStep
   - <h4>Syntax</h4>
  ```javascript
  decrementStep(number, numberTarget, numberStep, callback)
  ```
  - <h4>Example</h4>
  ```javascript
  const number = 20
  decrementStep(number, 10, 1, (iterations)=>{
   console.log(iterations)
  })
  ```

### Licence:
MIT
