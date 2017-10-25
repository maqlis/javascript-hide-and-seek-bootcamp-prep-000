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
  var lista = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i<lista.length; i++){
    lista[i].innerHTML = parseInt(lista[i].innerHTML) + n
  }
}
