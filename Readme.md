<h1>CODE COMPILER</h1>
This module provide some basic functionality to run code in node of different language.
It use open source compiler like <b>GNU GCC</b>
The module requires:
<ul>
<li>GCC</li>
<li>Python</li>
<li>NodeJS</li>
</ul>
```javascript
const {runNode,runC,runCPP,runPython}=require('code-compiler')

runNode(code,input,cb(stderr,stdout){
 console.log({err:stderr});
 console.log({output:stdout});
})
```