export default function (src){
    var dom=document.getElementById("app")
    var child = document.createElement("img")
    child.src = src
    child.classList.add("avatar");
    dom.append(child)
}