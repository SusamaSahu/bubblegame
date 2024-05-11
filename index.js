
var clutter="";
var timer=60;
var hit=0;
var score=0;
var hitbtn=document.getElementById("hit");
var scorebtn=document.getElementById("score");
 var pbtn=document.querySelector(".pbtn")

    const timineterval=()=>{
       var interval=  setInterval(() => {
            if(timer>0){
                timer--;
                document.getElementById('time').innerHTML = timer;
            }
            
            
            else{
                clearInterval(interval);
                pbtn.innerHTML = `GAME OVER`
            }
        },1000);
    }
    

const hits=()=>{
   hit=(Math.floor((Math.random())*10))
  hitbtn.innerText=hit;


}
const result=()=>{
score+=10;
scorebtn.innerText=score;

}
pbtn.addEventListener("click",(e)=>{
  if(hit===Number(e.target.innerText)){
    document.getElementById('time').innerHTML = timer+4;
    
       
    result();
    bubble();
    hits();

  }

  
})



const bubble=()=>{
for(var i=0;i<70;i++){
    let count=Math.floor((Math.random() * 10))
    clutter+=` <div class="box">${count}</div>`;

}
document.querySelector(".pbtn").innerHTML=clutter;
}
bubble();
timineterval();
hits()
result()