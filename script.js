const q=document.getElementById("Q");
const w=document.getElementById("W");
const e=document.getElementById("E");
const a=document.getElementById("A");
const s=document.getElementById("S");
const d=document.getElementById("D");
const z=document.getElementById("Z");
const x=document.getElementById("X");
const c=document.getElementById("C");
const result=document.getElementById("result");



const audioQ=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/kick.wav");
const audioW=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/kick-alt.wav");
const audioE=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/snare-m.wav");
const audioA=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/snare-h.wav");
const audioS=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/clap.wav");
const audioD=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/hihat-closed.wav");
const audioZ=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/hihat-open.wav");
const audioX=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/crash.wav");
const audioC=new Audio("https://oramics.github.io/sampled/DM/LM-2/samples/tom-h.wav");


q.addEventListener("click",()=>{
    audioQ.currentTime=0;
    audioQ.play();
    result.textContent="Kick";
})
w.addEventListener("click",()=>{
    audioW.currentTime=0;
    audioW.play();
    result.textContent=" Alternate Kick";
})
e.addEventListener("click",()=>{
    audioE.currentTime=0;
    audioE.play();
    result.textContent="Snare(mid)";
})
a.addEventListener("click",()=>{
    audioA.currentTime=0;
    audioA.play();
    result.textContent="Snare(high)";
})
s.addEventListener("click",()=>{
    audioS.currentTime=0;
    audioS.play();
    result.textContent="Clap";
})
d.addEventListener("click",()=>{
    audioD.currentTime=0;
    audioD.play();
    result.textContent=" Closed Hi-Hat";
})
z.addEventListener("click",()=>{
    audioZ.currentTime=0;
    audioZ.play();
    result.textContent="Open Hi-Hat";
})
x.addEventListener("click",()=>{
    audioX.currentTime=0;
    audioX.play();
    result.textContent="Crash";
})
c.addEventListener("click",()=>{
    audioC.currentTime=0;
    audioC.play();
    result.textContent="Tom";
})





