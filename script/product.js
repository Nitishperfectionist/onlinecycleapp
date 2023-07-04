let wishList = JSON.parse(localStorage.getItem('wishlist')) || [];

let mainContainer = document.getElementById("products")

let filterData =null;
let materailFilter =null;

let url = 'https://slate-gray-fox-belt.cyclic.app/data'


// pagination********************

let pageNumber 
let len = url.length/6
let resutl = Math.round(len)
let n = resutl;
// console.log(n)

// pagination function
let pagination = document.getElementById("pagination1")

for (let i =1; i <=n; i ++){
  let btn1 = document.createElement("button")
  btn1.setAttribute("class","pagination-button")
  btn1.textContent = i
// pageNumber = i

btn1.addEventListener("click", ()=>{
  pageNumber =i
  featchData()
 

})
pagination.append(btn1)


}



async function featchData(){
    try{
        let res = await fetch(`${url}?_page=${pageNumber}&_limit=6`)
        let data = await res.json()
        console.log(data)
        filterData = data 
        materailFilter = data
        displayData(data)
    }
    catch(err){
        console.log(err)
    }
}
featchData()

function displayData(data){
    mainContainer.innerHTML = "";
    data.map((ele) =>{

        let item = document.createElement("div");
        item.setAttribute("class","item")

        let image = document.createElement("img");
        image.src = ele.image

        let title = document.createElement("h3");
        title.textContent = ele.title

        let price = document.createElement("p");
        price.textContent = "₹ " + ele.price

        let btn = document.createElement("button")
        btn.setAttribute("class", "addItem")
        btn.innerHTML ="🤍"
        // btn.style.color="red"
        btn.addEventListener('click',function(){
            addToWishList(ele)
        })

        

        item.append(image,title,price,btn)
        mainContainer.append(item)
    })
}



function addToWishList(item){
    wishList.push(item)
    localStorage.setItem("wishlist",JSON.stringify(wishList))
}


// category 
let category = document.getElementById("category")

category.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.catrgory === category.value){
            return ele
        }
    })
    displayData(filtered)
})
//  materail filter
let material = document.getElementById("material")
material.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.materia === material.value){
            return ele
        }
    })
    displayData(filtered)
})

// size

let size = document.getElementById("size")
size.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.size === size.value){
            return ele
        }
    })
    displayData(filtered)
})

// color

let color = document.getElementById("color")
color.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.color === color.value){
            return ele
        }
    })
    displayData(filtered)
})


// break

let brk = document.getElementById("break")
brk.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.brake_type === brk.value){
            return ele
        }
    })
    displayData(filtered)
})


// suspension

let suspension = document.getElementById("suspension")
suspension.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.suspension === suspension.value){
            return ele
        }
    })
    displayData(filtered)
})


// wheel

let wheel = document.getElementById("wheel")
wheel.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.wheel_size === wheel.value){
            return ele
        }
    })
    displayData(filtered)
})

// year

let year = document.getElementById("year")
year.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele) =>{
        if (ele.model_year === year.value){
            return ele
        }
    })
    displayData(filtered)
})

// sorting price


let select = document.getElementById("select");
select.addEventListener("change",()=>{
    let filtered = filterData.filter((ele) =>{
        if (ele.price < 20000){
            return ele
        }


    })
    displayData(filtered)
    
})
// let select1 = document.getElementById("select");
// select1.addEventListener("change",()=>{
//     let filtered = filterData.filter((ele) =>{
//         if (ele.price > 20000){
//             return ele
//         }


//     })
//     displayData(filtered)
    
// })
  
