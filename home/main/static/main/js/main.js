var speed=150;
var m1=document.getElementById('message1');
var m2=document.getElementById('message2');
var m3=document.getElementById('message3');
m3.innerHTML=m2.innerHTML;
function mymarquee(){
  if(m3.offsetHeight-m1.scrollTop <= 0){
    m1.scrollTop -= m2.offsetHeight;
  }else{
    m1.scrollTop++;
  }
}
var MyMar1=setInterval(mymarquee,speed);
m1.onmouseover=function(){clearInterval(MyMar1);}
m1.onmouseout=function(){MyMar1=setInterval(mymarquee,speed);}

