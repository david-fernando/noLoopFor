<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="icon/icon.png" alt="No loop for"></a>
</p>

<h1 align="center">No loop for</h1>

---

### Languages
<ul style="display:inline; list-style-type:none">
  <li style="list-style-type:none"><a href="LEIAME.md">Portuguese</li>
  <li style="list-style-type:none"><a href="#">English</li>
</ul>

### About
Library that allows you to loop without use the for

### Why use it
Because with this library you can guarantee data immutability

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
  loop(numberLoop, callback())
  ```
  - <h4>Example</h4>
  ```javascript
  let number = 10
  number.loop(20, (items)=>{
   console.log(items)
  })
  ```
### loopStep
   - <h4>Syntax</h4>
  ```javascript
  loopStep(numberLoop, numberStep, callback())
  ```
  - <h4>Example</h4>
  ```javascript
  let number = 10
  number.loopStep(100, 10, (items)=>{
   console.log(items)
  })
  ```
  

### decrementLoop
   - <h4>Syntax</h4>
  ```javascript
  loopLoop(numberTarget, callback())
  ```
  - <h4>Example</h4>
  ```javascript
  let number = 10
  number.loopStep(1, (items)=>{
   console.log(items)
  })
  ```
  
### decrementStep
   - <h4>Syntax</h4>
  ```javascript
  loopStep(numberTarget, numberStep, callback())
  ```
  - <h4>Example</h4>
  ```javascript
  let number = 20
  number.loopStep(10, 1, (items)=>{
   console.log(items)
  })
  ```

### Licence:
MIT
