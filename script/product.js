
let mainContainer = document.getElementById("container")

let url = 'https://slate-gray-fox-belt.cyclic.app/data'
async function featchData(){
    try{
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
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
        btn.textContent ="Add to card"

        item.append(image,title,price,btn)
        mainContainer.append(item)
    })
}