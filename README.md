<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="icon/icon.png" alt="No loop for"></a>
</p>

<h3 align="center">No loop for</h3>

---

### About
Library that allows you to loop without use the for

### Why use it
Because with this library you can guarantee data immutability

### How to use
Add the line below in head of your html
```html
<script src="https://cdn.jsdelivr.net/gh/david-fernando/noForLoop/dist/noforloop.js"></script>
```
### loop
   - #### Syntax
  ```javascript
  loop(numberLoop, callback())
  ```
  - #### Example
  ```javascript
  let number = 10
  number.loop(20, (items)=>{
   console.log(items)
  })
  ```
### loopStep
   - #### Syntax
  ```javascript
  loopStep(numberLoop, numberStep, callback())
  ```
  - #### Example
  ```javascript
  let number = 10
  number.loopStep(100, 10, (items)=>{
   console.log(items)
  })
  ```
  

### decrementLoop
   - #### Syntax
  ```javascript
  loopLoop(numberTarget, callback())
  ```
  - #### Example
  ```javascript
  let number = 10
  number.loopStep(1, (items)=>{
   console.log(items)
  })
  ```
  
### decrementStep
   - #### Syntax
  ```javascript
  loopStep(numberTarget, numberStep, callback())
  ```
  - #### Example
  ```javascript
  let number = 20
  number.loopStep(10, 1, (items)=>{
   console.log(items)
  })
  ```
