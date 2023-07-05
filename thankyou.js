var preloader = document.getElementById("loading");

function thankyou() {
    preloader.style.display ='none';
}
setTimeout(()=>{
location.href="index.html"
},6000)