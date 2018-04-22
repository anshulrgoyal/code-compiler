const {spawn}=require('child_process')
const {unlink}=require('fs')
const {createFile}=require('./helper')
function runC(code,input,cb) {
    let stderr=""
    let stdout=""
    const {path,fileName}=createFile('c',code);
    const ps=spawn(`gcc` ,[`${path}/${fileName}.c`,`-o ${fileName}`])

    ps.stderr.on('data',(err)=>{
        stderr=stderr+err
    })
    ps.stdout.on('data',(out)=>{
        stdout=stdout+out;
    })
    ps.on('close',(data)=> {
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
    })


    ps.on('error', (err) => {
        console.log(err)
    })

}
module.exports={runC}