// import Header from "./header.js"
// import SideBar from "./side-bar.js"
// import Content from "./content.js"
// import FileHander  from "./file-hander.js"
// import avatar from "./avatar.jpg"
// import "./index.scss"
// import {add } from "./math.js"
// // import _ from "lodash"
// import result from "./asyncChunksTest"
import $ from "jquery"
// import "./commonJs"
// console.log(avatar);
import "./test-style.css"
import "./test1-style.css"

// new Header()
// new SideBar()
// new Content()
// new FileHander(avatar)

// console.log(new Promise(()=>{}));

// ()=>{}

// add(4,5)

// console.log(_.join(["hu","yong"],"="));

// result().then(r=>{
//     console.log(r);
// })

// console.log($.ajax);

document.addEventListener("click",()=>{
    import("lodash").then(({default:_})=>{
        console.log(_.join);
    })
})

$("div")