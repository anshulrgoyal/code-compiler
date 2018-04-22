const {spawn}=require('child_process')
const {unlink,existsSync}=require('fs')
const {createFile}=require('./helper')
function runCPP(code,input,cb) {
    let stderr=""
    let stdout=""
    const {path,fileName}=createFile('cpp',code);
    const ps=spawn(`g++` ,[`${path}/${fileName}.cpp`,`-o ${fileName}`])


    ps.stderr.on('data',(err)=>{
        stderr=stderr+err
        console.log(err.toString())
    })
    ps.stdout.on('data',(out)=>{
        stdout=stdout+out;
    })
    ps.on('close',(data)=> {
       if(existsSync('./ '+fileName)){
           const ps2 = spawn('./ ' + fileName,)

           ps2.stdin.write(input + '\n')
           ps2.stdin.pause();
           ps2.stdout.on('data', (out) => {

               stdout = stdout + out

           })
           ps2.on('error', (err) => {
               console.log(err)
           })
           ps2.on('close', (data) => {
               unlink(' '+fileName,function (err) {

               })
               cb(stderr,stdout)
           })
       }

    })


    ps.on('error', (err) => {
        console.log(err)
    })

}
module.exports={runCPP}