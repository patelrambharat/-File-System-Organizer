function treehelper(dirpath,indentation)
{
    //if path has a file or folder 
    let isFile =fs.lstatSync(dirpath).isFile();
    if(isFile==true){
        let filename =path.basename(dirpath);
        console.log(indentation + "├──" + filename);

    }
    else{
        let dirname = path.basename(dirpath);
        console.log(indentation + " └─── " +dirname);
        fs.readdirSync(dirpath);
        let childrens = fs.readdirSync(dirpath);
        for(let i=0; i<childrens.length;i++){
            let childpath= path.join(dirpath,childrens[i]);
            treehelper(childpath,indentation+ "\t");
        }
        }
}
function treefn(dirpath){
    
    //1.take the input from the user of Path
    //let destpath;
    if(dirpath==undefined)
    {
        //console.log("please provide the path to see the magic");
        treehelper(process.cwd(), "");
        return;
    }
    else{
        
   
    if(fs.existsSync(dirpath)==true)
    {
        
        treehelper(dirpath);
        
    }
    else{
        console.log("please provide the correct path");
        return;
    }

    }
}

module.exports={
    treekey : treefn
}