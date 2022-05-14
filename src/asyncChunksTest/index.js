export default function (){
    debugger
    return import(/*webpackChunckName:"lodash"*/"lodash").then(({default:_})=>{
        return _.join(["hu","yong"],",")
    })
}