function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#nested .target")
}
function deepestChild(){
  var lista = document.querySelectorAll("#grand-node div")
  for (let i = 0; i<lista.length; i++){
    
  }
  return lista[i]
}
