function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#nested .target")
}
function deepestChild(){
  var lista = document.querySelectorAll("#grand-node div")
  return lista[lista.length - 1]
}
function increaseRankBy(n){

}
