function receivesAFunction(cb) {
    return (cb())
}

function returnsANamedFunction() {
    function aName() {
       return 'hi my name is brandi'
    }
    console.log(aName)
    return aName
}

function returnsAnAnonymousFunction(){
    return function() {
        return 
    }
}