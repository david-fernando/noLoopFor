function loop(value, target, callback){
    let number = value;
    for(let index = 0; index < target; index++){
        callback(number);
        number++
    }
}

function loopStep(value, target, step, callback){
    let number = value;
    for(let index = 0; index < target; index++){
        callback(number);
        number += step
    }
}

function decrementLoop(value, target, callback){
    let number = value;
    for(let index = number; index > target; index--){
        number--
        callback(number);
    }
}

function decrementStep(value, target, step, callback){
    let number = value;
    for(let index = number; index > target; index--){
        callback(number);
        number -= step;
    }
}

module.exports = {
    loop,
    loopStep,
    decrementLoop,
    decrementStep
}