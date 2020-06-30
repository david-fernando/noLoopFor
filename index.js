const loop = {
    Loop: Number.prototype.loop = function(target, callback){
        let number = this.valueOf()
        for(let index = 0; index < target; index++){
            callback(number)
            number++
        }
    },
    LoopStep: Number.prototype.loopStep = function(target, step, callback){
        let number = this.valueOf()
        for(let index = 0; index < target; index++){
            callback(number)
            number += step
        }
    },
    DecrementLoop: Number.prototype.decrementLoop = function(target, callback){
        let number = this.valueOf()
        for(let index = number; index > target; index--){
            number--
            callback(number)
        }
    },
    DecrementStep: Number.prototype.decrementStep = function(target, step, callback){
        let number = this.valueOf()
        for(let index = number; index > target; index--){
            callback(number)
            number -= step
        }
    }
}

module.exports = loop
