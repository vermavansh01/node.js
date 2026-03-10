import fs from "fs/promises"

let a = await fs.readFile("hary.txt")

let b = await fs.appendFile("hary.txt","\n\n\n\n\nthis is amazin promise")
console.log(a.toString(),b)