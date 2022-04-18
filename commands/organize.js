function organizefn(dirpath){
    //1.take the input from the user of Path
    let destpath;
    if(dirpath==undefined)
    {
        //console.log("please provide the path to organize");
        destpath= process.cwd();
        return;
    }
    else{
        
    //2.create the dir of folder name organize folder 
    //check path is exist or not
    if(fs.existsSync(dirpath)==true)
    {
         destpath = path.join(dirpath,"organized folder");
        //create dir
        if(fs.existsSync(destpath)==false){
            fs.mkdirSync(destpath); 
        }
        
    }
    else{
        console.log("please provide the correct path");
        return;
    }

    }
organizehelper(dirpath,destpath);

    //3.find the category of the files under the dirpath and also create create category folder :image--jpg
    //4.cut and copy files from the dirpath and paste under their categories

}

function organizehelper(src,dest){
    let childnames=fs.readdirSync(src);
    //console.log(childnames); //give the file name
    for(let i=0; i<childnames.length;i++){
        let childadress=path.join(src,childnames[i]); //give the path of the file
        //console.log(childadress);

        //if path is file then it will work but if folder then not work
        let isFile=fs.lstatSync(childadress).isFile();
        if(isFile){
            //console.log(childnames[i]);
            //3.identify the category
            let category = getcategory(childnames[i]);
            //console.log(childnames[i],"belongs to - ",category); print the category
            //4.make directory of category and  cut / copy from dirpath to category folder
            sendfiles(childadress,dest,category);
        }
    }

}


function sendfiles(srcfilepath, dest,category){
    let categorypath = path.join(dest,category);
    if(fs.existsSync(categorypath)==false)
    {
        fs.mkdirSync(categorypath); 
    }
    let filename = path.basename(srcfilepath);
    let destpathfile= path.join(categorypath,filename); //
    fs.copyFileSync(srcfilepath,destpathfile);
    console.log(filename,"copying to this ",category);
    fs.unlinkSync(srcfilepath); //use for delete 
}
function getcategory(name){
    let ext=path.extname(name);
    ext = ext.slice(1);
    //console.log(ext);
    //compare it with the key in objects
    for(let keys in types){
        let ctypearr = types[keys];
        for(let i=0; i<ctypearr.length;i++){
            if(ext == ctypearr[i]){
                return keys;
            }
        }
    }
    return "others";
}
module.exports={
    organizekey : organizefn
}