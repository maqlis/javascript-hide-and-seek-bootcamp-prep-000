function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#nested .target")
}
function deepestChild(){
  var lista = document.querySelectorAll("#grand-node div")
  for (var i = 0; i<lista.length; i++){

  }
  return lista[lista.length - 1]
}
function increaseRankBy(n){
  
}