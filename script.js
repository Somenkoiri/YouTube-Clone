
let menu = document.querySelector(".btn");
let leftside = document.querySelector(".liftside");
let rightside = document.querySelector(".rightside");
let fig = 0;

menu.addEventListener("click",function(){

   if(fig==0){

    leftside.style.display="none"
    rightside.style.width="100%"
   
    fig = 1;

   }else{
    leftside.style.display="block"
   
    fig=0;
   }
})