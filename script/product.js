let wishList = JSON.parse(localStorage.getItem('wishlist')) || [];

let mainContainer = document.getElementById("products")

let filterData =null;

let url = 'https://slate-gray-fox-belt.cyclic.app/data'
async function featchData(){
    try{
        let res = await fetch(`${url}?_page=${1}&_limit=20`)
        let data = await res.json()
        console.log(data)
        filterData = data
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

let category = document.getElementById("category")

category.addEventListener("change", ()=>{
    let filtered = filterData.filter((ele)=>{
        if(ele.catrgory === category.value){
            return ele
        }
    })
    displayData(filtered)
})