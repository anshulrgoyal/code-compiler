const {spawn}=require('child_process')
const {unlink}=require('fs')
const {createFile}=require('./helper')

function runPython(code, input, cb=()=>{throw 'cb is required'}) {
    const {path,fileName}=createFile('py',code);
    const ps=spawn('python',[`${path}/${fileName}.py`])
    let stdout="";
    let stderr="";
    ps.stdout.on('data',data=>stdout=stdout+data)
    ps.stderr.on('data',data=>stderr=stderr+data)
    ps.on('close',(code)=>{
        unlink(`${path}/${fileName}.py`,()=>{})
        ps.kill(0);
        cb(stderr,stdout)
    })
}
module.exports={runPython}