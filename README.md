<h1 align="center">noForLoop</h1>

---

### About
Library that allows you to loop without use the for

### Why use it
Because with this library you can guarantee data immutability

### How to use
```html
<script src="https://cdn.jsdelivr.net/gh/david-fernando/noForLoop/dist/noforloop.js"></script>
```
### loop
   - #### Syntax
  ```javascript
  loop(number, callback())
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
  loopStep(number, numberStep, callback())
  ```
  - #### Example
  ```javascript
  let number = 10
  number.loopStep(100, 10, (items)=>{
   console.log(items)
  })
  ```
