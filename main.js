#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path =require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize")

let types={
    document : ['txt','pdf','docx','csv'],
    Image : ['png','jpg','jpeg'],
    Application : ['exe','apk','zip','msi','dmg'],
    Video : ['mp4']
}
//..console.log(inputArr);

//node main .js organize "pathdir"
//node main .js tree "pathdir"
//node main .js help
let command =inputArr[0];
switch(command)
{
    case "help":
        helpObj.helpkey();
        break;
    case "tree":
        treeObj.treekey(inputArr[1],"");
        break;
    case "organize":
        organizeObj.organizekey(inputArr[1]);
        break;
    default:
        
        console.log("Please  provide us the command");
        break;
}








