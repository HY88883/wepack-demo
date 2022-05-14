export default function (){
    var dom=document.getElementById("app")
    var child = document.createElement("div")
    child.innerHTML = "header"
    dom.append(child)
}