var a =document.querySelector(".toggle");
var i=2;
a.addEventListener("click",function(){
    if(i%2==0)
    {
      var a=document.querySelector(".notif");
      a.classList.add("display");
      a.classList.remove("hidden");
  
    }
    else{
      var a=document.querySelector(".notif");
      a.classList.remove("display");
      a.classList.add("hidden");
    }
    i++;
});