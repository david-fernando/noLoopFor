<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="icon/icon.png" alt="No loop for"></a>
</p>

<h1 align="center">No loop for</h1>

---

### Idiomas
<ul style="display:inline; list-style-type:none">
  <li style="list-style-type:none"><a href="#">Português</li>
  <li style="list-style-type:none"><a href="README.md">Inglês</li>
</ul>

### Sobre
Esta é uma biblioteca JavaScript, que permite fazer inumeros loops sem o uso do for

### Porque usar
Por esta esta biblioteca garante a imutabilidade dos dados

### Como usar
Adicione a linha abaixo na tag head do seu html, e pronto! Você já pode usar todas as funções disponíveis.
```html
<script src="https://cdn.jsdelivr.net/gh/david-fernando/noForLoop/dist/noforloop.js"></script>
```
### loop
   - #### Sintaxe
  ```javascript
  loop(numberLoop, callback())
  ```
  - #### Exemplo
  ```javascript
  let number = 10
  number.loop(20, (items)=>{
   console.log(items)
  })
  ```
### loopStep
   - #### Sintaxe
  ```javascript
  loopStep(numberLoop, numberStep, callback())
  ```
  - #### Exemplo
  ```javascript
  let number = 10
  number.loopStep(100, 10, (items)=>{
   console.log(items)
  })
  ```
  

### decrementLoop
   - #### Sintaxe
  ```javascript
  loopLoop(numberTarget, callback())
  ```
  - #### Exemplo
  ```javascript
  let number = 10
  number.loopStep(1, (items)=>{
   console.log(items)
  })
  ```
  
### decrementStep
   - #### Sintaxe
  ```javascript
  loopStep(numberTarget, numberStep, callback())
  ```
  - #### Exemplo
  ```javascript
  let number = 20
  number.loopStep(10, 1, (items)=>{
   console.log(items)
  })
  ```

### Licença:
MIT
