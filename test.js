


let one = document.getElementById("mainImage")

let img=document.createElement("img");
img.setAttribute("src","https://assets.specialized.com/i/specialized/96822-71_LEVO-SL-HT-OAKGRNMET-LMSTN-SMK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")    
one.append(img)



let angle = document.getElementById("diffAngle")

let img1=document.createElement("img")

img1.setAttribute("src",ele.image )

let img2=document.createElement("img")

img2.setAttribute("src","https://assets.specialized.com/i/specialized/96822-71_LEVO-SL-HT-OAKGRNMET-LMSTN-SMK_FDSQ?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")


let img3=document.createElement("img")

img3.setAttribute("src","https://assets.specialized.com/i/specialized/96822-71_LEVO-SL-HT-OAKGRNMET-LMSTN-SMK_RDSQ?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")

let img4=document.createElement("img")

img4.setAttribute("src", "https://assets.specialized.com/i/specialized/96822-71_LEVO-SL-HT-OAKGRNMET-LMSTN-SMK_D2-BAR?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")

let img5=document.createElement("img")

img5.setAttribute("src", "https://assets.specialized.com/i/specialized/96822-71_LEVO-SL-HT-OAKGRNMET-LMSTN-SMK_D3-HT?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto")


let sideVIew = document.getElementById("sideVIew")
sideVIew.append(img1)

let backView = document.getElementById("backView")
backView.append(img2)

let front_view = document.getElementById("front_view")
front_view.append(img3)

let anglfront_view = document.getElementById("zoomView")
anglfront_view.append(img4)

let Diffangle = document.getElementById("xtraZoom")
Diffangle.append(img5)


angle.append(sideVIew,backView,front_view,anglfront_view,Diffangle)
 
img1.addEventListener("click",side)
img2.addEventListener("click",back)
img3.addEventListener("click",front);
img4.addEventListener("click",anglefront)
img5.addEventListener("click",diffAngle)
      
});
}


function side(){
one.innerHTML="";

one.append(img1)



}

function back(){
one.innerHTML="";

one.append(img2)



}
function front(){
one.innerHTML="";

one.append(img3)



}
function anglefront(){
one.innerHTML="";

one.append(img4)



}
function diffAngle(){
one.innerHTML="";

one.append(img5)



}





