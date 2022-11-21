#! /usr/bin/env node
import prompt from 'prompt'

const paraGraph=prompt.get(['paraGraph'],function(err,res){
    let paraGraph:string=String(res.paraGraph);
    console.log(paraGraph.split(" "));
    let wordCount:number=paraGraph.split(" ").length;
    console.log(`Words : ${wordCount}`);
});
