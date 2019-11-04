var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var appendKitten = kittens.push(name)
  return appendKitten
}

function destructivelyPrependKitten(name){
  var prependKitten = kittens.unshift(name)
  return prependKitten
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

