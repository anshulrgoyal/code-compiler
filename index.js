const {runC}=require('./lib/langC')
const {runCPP}=require('./lib/langCPP')
const {runNode}=require('./lib/langNode')
const {runPython}=require('./lib/langPython')

module.exports={runNode,runC,runCPP,runPython}