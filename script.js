
let menu = document.querySelector(".btn");
let leftside = document.querySelector(".liftside");
let rightside = document.querySelector(".rightside");

let openClose = 0;


menu.addEventListener("click",function(){

   if(openClose==0){

    leftside.style.display="block"
    rightside.style.width="100%"
   
    openClose = 1;

   }else{
    leftside.style.display="none"
   
    openClose=0;
   }
})

