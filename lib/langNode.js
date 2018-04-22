const {spawn}=require('child_process')
const {unlink}=require('fs')
const {createFile}=require('./helper')

function runNode(code, input, cb=()=>{throw 'cb is required'}) {
    const {path,fileName}=createFile('js',code);
    const ps=spawn('node',[`${path}/${fileName}.js`])
    let stdout="";
    let stderr="";
    ps.stdout.on('data',data=>stdout=stdout+data)
    ps.stderr.on('data',data=>stderr=stderr+data)
    ps.on('close',(code)=>{
        unlink(`${path}/${fileName}.js`,()=>{})
        ps.kill(0);
        cb(stderr,stdout)
    })
}

module.exports={runNode}