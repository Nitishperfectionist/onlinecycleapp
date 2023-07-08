  
  //let url ="https://slate-gray-fox-belt.cyclic.app/data" 
   
  let data=JSON.parse(localStorage.getItem("wishlist"))
   
  fetcho();
   
    function fetcho(){
        console.log(data)
        display(data)


   }



let arr=[];


function display(data){


    data.forEach(ele => {

      let  mainImage=document.getElementById("mainImage")
            mainImage.setAttribute("src", ele.image)

            let  sideVIew=document.getElementById("sideVIew")
            sideVIew.setAttribute("src", ele.image)
            let  backView=document.getElementById("backView")
            backView.setAttribute("src", ele.image1)
            let  front_view=document.getElementById("front_view")
            front_view.setAttribute("src", ele.image2)
            let  zoomView=document.getElementById("zoomView")
            zoomView.setAttribute("src", ele.image3)
            let  xtraZoom=document.getElementById("xtraZoom")
            xtraZoom.setAttribute("src", ele.image4)


            sideVIew.addEventListener("click", fun)
            backView.addEventListener("click", fun1)
            front_view.addEventListener("click", fun2)
            zoomView.addEventListener("click", fun3)
            xtraZoom.addEventListener("click", fun4)



function fun(){
    mainImage.setAttribute("src", ele.image)
}

function fun1(){
    mainImage.setAttribute("src", ele.image1)
}

function fun2(){
    mainImage.setAttribute("src", ele.image2)
}

function fun3(){
    mainImage.setAttribute("src", ele.image3)
}

function fun4(){
    mainImage.setAttribute("src", ele.image4)
}




            let  front_wheel=document.getElementById("front_wheel")
            front_wheel.textContent=`Traverse SL 29" `
            let  rear_wheel=document.getElementById("rear_wheel")
            rear_wheel.textContent=`TRAVERSE SL 29" `
            let  front_tire=document.getElementById("front_tire")
            front_tire.textContent=`BUTCHER GRID TRAIL T9 29 X 2.3" `
            let  inner_tubes=document.getElementById("inner_tubes")
            inner_tubes.textContent=`STANDARD, PRESTA VALUE" `
            let  front_wheel2=document.getElementById("front_wheel2")
            front_wheel2.textContent=`BUTCHER GRID TRAIL T7 29 X 2.3" `


            // <!-- *************************right side ******************************** -->

            let  name=document.getElementById("name")
            name.textContent=ele.title

            let  mrp=document.getElementById("mrp")
            mrp.textContent= +ele.price

            let  offer=document.getElementById("offer")
            offer.textContent= +ele.price-Math.floor(ele.price*0.03)

           

            






            let addToCart=document.getElementById("addToCart");

            addToCart.addEventListener("click", function(){
                    setData(ele)
            })
            

    

            
    })
}


function setData(ele){
    window.location.assign("cart.html")

    localStorage.setItem("Cart-list",JSON.stringify(ele)) 

}




