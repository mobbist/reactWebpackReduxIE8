export const TEST = "TEST"

var Promise = require("es6-promise-polyfill").Promise;


function abc(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({
                type:TEST,
                data:{name:"东航"}
            });
        },1000)
        
    })
}

export function testFun(){
    var self = this;
    return  dispatch =>{

    return abc().then((response)=>{
            dispatch(response);
        })
    }
}