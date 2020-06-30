// Number.prototype.loop = function(target, callback){
//     let number = this.valueOf()
//     for(let index = 0; index < 0; index++){
//         callback(number)
//         number++
//     }
// }

// Number.prototype.loopStep = function(target, step, callback){
//     let number = this.valueOf()
//     for(let index = 0; index < target; index++){
//         callback(number)
//         number += step
//     }
// }

// Number.prototype.decrementLoop = function(target, callback){
//     let number = this.valueOf()
//     for(let index = number; index > target; index--){
//         number--
//         callback(number)
//     }
// }

// Number.prototype.decrementStep = function(target, step, callback){
//     let number = this.valueOf()
//     for(let index = number; index > target; index--){
//         callback(number)
//         number -= step
//     }
// }
const loop = require('./modules/loop')

let number = 1

number.loopStep(10, 3, (number)=>{console.log(number)})