setInterval((locale)=>{
    let time=new Date();
    htime = time.getHours();
    mtime = time.getMinutes();
    date=time.getDate();
    day=time.toLocaleDateString(locale, { weekday: 'long' });
    month=time.toLocaleDateString(locale, { month: 'long' });
    if(htime<10){
        htime=0+""+htime;
    }
    if(mtime<10){
        mtime=0+""+mtime;
    }
    document.querySelector(".timenav").innerHTML=htime+":"+mtime;
    document.querySelector(".maintime").innerHTML=htime+":"+mtime;
    document.querySelector(".date").innerHTML=day+","+" "+month+" "+date;
    console.log(day+","+" "+month+" "+date);

},1000)
let home=document.querySelector(".home");
let whatsapp=document.querySelector("#whatsApp");
let youtub=document.querySelector("#youtub");
let wikipedia=document.querySelector("#wikipedia");
let facebook=document.querySelector("#facebook");
let contact=document.querySelector(".contact");
let gallary=document.querySelector(".galary");
home.addEventListener("click",()=>{
    document.querySelector(".whatsapp").style.display="none";
    document.querySelector(".youtub").style.display="none";
    document.querySelector(".wikipedia").style.display="none";
    document.querySelector(".facebook").style.display="none";
    document.querySelector(".Contact").style.display="none";
    document.querySelector(".gallary").style.display="none";
})

whatsapp.addEventListener("click",()=>{
    //alert("welcome to whatsapp");
    document.querySelector(".whatsapp").style.display="block";
})
youtub.addEventListener("click",()=>{
    //alert("hy");
    document.querySelector(".youtub").style.display="block";
})
wikipedia.addEventListener("click",()=>{
    document.querySelector(".wikipedia").style.display="block";
})
facebook.addEventListener("click",()=>{
   // alert("hallo khushbu singh parihar welcome to facebook ")
    document.querySelector(".facebook").style.display="block";
})
contact.addEventListener("click",()=>{
    document.querySelector(".Contact").style.display="block";
})
gallary.addEventListener("click",()=>{
    document.querySelector(".gallary").style.display="block";
})

// youtub section
var main=document.querySelector("#main");
var vl2=document.querySelector("#v2");
vl2.addEventListener("click",()=>{
    //alert('hy');
    document.querySelector("#play1").style.display="none";
    document.querySelector("#play2").style.display="block";
    document.querySelector("#play3").style.display="none";
})
var imgdisplay=document.querySelector("#imgdisplay");
var img1=document.querySelector("#img1");
var img2=document.querySelector("#img2");
var img3=document.querySelector("#img3");
var img4=document.querySelector("#img4");
var img5=document.querySelector("#img5");
img1.addEventListener("click",()=>{
   
    imgdisplay.src=img1.src;
    document.querySelector(".display").style.background="url(image1.jpeg)no-repeat";
     document.querySelector(".display").style.background.size="100%";
})
img2.addEventListener("click",()=>{
    imgdisplay.src=img2.src;
     document.querySelector(".display").style.background="url(image2.jpeg)no-repeat";
     document.querySelector(".display").style.background.size="cover";
})
img3.addEventListener("click",()=>{
    imgdisplay.src=img3.src;
     document.querySelector(".display").style.background="url(image3.jpeg)no-reapeat";
     document.querySelector(".display").style.background.size="100%";
})
img4.addEventListener("click",()=>{
    imgdisplay.src=img4.src;
     document.querySelector(".display").style.background="url(img4.jpg)";
})
img5.addEventListener("click",()=>{
    imgdisplay.src=img5.src
     document.querySelector(".display").style.background="url(img5.jpeg)";
})