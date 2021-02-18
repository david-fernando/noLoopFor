<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://images2.imgbox.com/23/40/erCGj2jK_o.png" alt="No loop for"></a>
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

### Comece a usar

  - <h4>No Node JS</h4>
  Para instalar no Node, basta executar o comando abaixo no terminal
  ```
  npm install noloopfor
  ```
  Para importar a função desejada use desestruturação de objetos, por exemplo, o código abaixo está importando a função loop
  ```javascript
  const { loop } = require('noloopfor')
  ```
  Se estiver usando React JS ou alguma outra biblioteca JS que permite usar a sintaxe ESM, você pode usá-la com desestruturação de objetos, como no exemplo abaixo
  ```javascript
  import { loop } from 'noloopfor'
  ```
   - <h4>No navegador</h4>
  Se você está fora do Node JS, não precisa instalar nada, apenas importe a função desejada usando a sintaxe ESM, por exemplo, o código abaixo está importando a funtion loop, e em seguida está implementando a mesma.
  
  ```html
  <script type="module">
  import { loop } from 'https://cdn.jsdelivr.net/gh/david-fernando/noForLoop/dist/noforloop.js'

  const number = 10

  loop(number, 20, (iterations)=>{
   console.log(iterations)
  })

  </script>
  ```

### Referência

### loop
   - <h4>Sintaxe</h4>
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
   - <h4>Sintaxe</h4>
  ```javascript
  loopStep(number, numberOfIterations, numberStep, callback)
  ```
  - <h4>Exemplo</h4>
  ```javascript
  const number = 10
  loopStep(number, 100, 10, (iterations)=>{
   console.log(iterations)
  })
  ```
  

### decrementLoop
   - <h4>Sintaxe</h4>
  ```javascript
  decrementLoop(number, numberTarget, callback)
  ```
  - <h4>Exemplo</h4>
  ```javascript
  const number = 10
  decrementLoop(number, 1, (iterations)=>{
   console.log(iterations)
  })
  ```
  
### decrementStep
   - <h4>Sintaxe</h4>
  ```javascript
  decrementStep(number, numberTarget, numberStep, callback)
  ```
  - <h4>Exemplo</h4>
  ```javascript
  const number = 20
  decrementStep(number, 10, 1, (iterations)=>{
   console.log(iterations)
  })
  ```

### Licence:
MIT
