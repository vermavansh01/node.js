const fs = require("fs")

// console.log(fs)
console.log("starting")

// fs.writeFileSync("hary.txt","harry is a good boy")
fs.writeFile("harry.txt","harry is a good boy",()=>{
    console.log("done")
    fs.readFile("harry.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("vv.txt","vv is not a name",(e,d)=>{
console.log(e,d         )
})

console.log("ending")