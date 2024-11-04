//-------------Module in Javascript---------------------

//----readFileSync
//const fs=require("fs");
// const text=fs.readFileSync('./del.txt','utf-8')
// console.log(text);

//-----writeFileSync/readFileSync-------------
// const fs=require("fs")
// const data="what is your name?"
// const text =fs.writeFileSync("./del.txt",data)
// console.log("Successfully!")
// const text2=fs.readFileSync('./del.txt','utf-8')
// console.log(text2);

//----readFile/.replace-----
const fs=require('fs')
const text=fs.readFile('./del.txt','utf8',(err,data)=>{
if(err){
    console.log(err);
    return;
}

const updatedData=data.replace('what is your name?','Lets go!');
fs.writeFileSync('./del.txt',updatedData)
console.log(`updatedData successfully`);
console.log(updatedData);
});
