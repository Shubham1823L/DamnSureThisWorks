const name=["Every Breath You" , "Everybody Wants to Rule the World" , "Ishq Wala Love" , "Perfect"]
let p=0;
function nextf(){
    p=p+1;
    console.log(p);
    if(p>3){
        p=0
    }
    nam[0].innerHTML=name[p]
    if(p==1){
        let im=document.getElementsByClassName("musicimg");
        im[0].src="songposter/every.jpg";
    }
    else if(p==2){
        let im=document.getElementsByClassName("musicimg");
        im[0].src="songposter/ishq.jpg";
    }
    else if(p==3){
        let im=document.getElementsByClassName("musicimg");
        im[0].src="songposter/perfect.jpg";
    }
    else{
        let im=document.getElementsByClassName("musicimg");
        im[0].src="songposter/breath.jpg";
    }
}
function prevf(){
    p=p-1;
    console.log(p);
    if(p<0){
        p=3
    }
    nam[0].innerHTML=name[p]
    if(p==1){
        let im=document.getElementsByClassName("musicimg");
        im[0].src="songposter/every.jpg";
    }
    else if(p==2){
        let im=document.getElementsByClassName("musicimg");
        im[0].src="songposter/ishq.jpg";
    }
    else if(p==3){
        let im=document.getElementsByClassName("musicimg");
        im[0].src="songposter/perfect.jpg";
    }
    else{
        let im=document.getElementsByClassName("musicimg");
        im[0].src="songposter/breath.jpg";
    }
}

let a=0;

function buttonswap(){
    let bt=document.getElementsByClassName("playsvg");
    a=a+1;
    if(a%2 != 0){
        bt[0].src="assets/svgs/pause.svg";
    }
    else{
        bt[0].src="assets/svgs/play.svg"
    }
}


console.log("hello world");
let nam=document.getElementsByClassName("musictitle");
// console.log(nam);
// nam[0].innerHTML=name[1]
document.getElementsByClassName("next")[0].addEventListener("click", nextf);
document.getElementsByClassName("prev")[0].addEventListener("click", prevf)
console.log(p);
document.getElementsByClassName("play")[0].addEventListener("click",buttonswap)