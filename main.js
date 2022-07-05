let Prodacts = [
    {
        id: 1,
        productName:"vagie Muffen",
        price:10,
        description:" There are many things are needed to start the Fast Food Business.",
        reting:"⭐️⭐️⭐️⭐️⭐️",
        img:"./food/eat-1.png"
    },
    {
        id: 2,
        productName:"vagie Muffen",
        price:20,
        description:" There are many things are needed to start the Fast Food Business.",
        reting:"⭐️⭐️⭐️⭐️⭐️",
        img:"./food/eat-2.png"
    },
    {
        id: 3,
        productName:"vagie Muffen",
        price:30,
        description:" There are many things are needed to start the Fast Food Business.",
        reting:"⭐️⭐️⭐️⭐️⭐️",
        img:"./food/eat-3.png"
    },
    {
        id: 4,
        productName:"vagie Muffen",
        price:40,
        description:" There are many things are needed to start the Fast Food Business.",
        reting:"⭐️⭐️⭐️⭐️⭐️",
        img:"./food/eat-5.png"
    },
    {
        id: 5,
        productName:"vagie Muffen",
        price:50,
        description:" There are many things are needed to start the Fast Food Business.",
        reting:"⭐️⭐️⭐️⭐️⭐️",
        img:"./food/eat-6.png"
    },
   {
       id:6,
       productName:"vagie Muffen",
       price:50,
       description:"There are many things are needed to start the Fast Food Business.",
       reting:"⭐️⭐️⭐️⭐️⭐️",
       img:"./food/eat-7.png"
   },
]
let selectProducts=[]

function drawProduct() {
  let a = Prodacts.map((item, index)=>`
  <div class="card">
  <div class="img-con">
    <img src="${item.img}" alt="" />
  </div>
  <div class="title-page-4">
    <h4>${item.productName}</h4>
    <h4 >${item.price}</h4>
  </div>
  <div class="title2-page-4">
    <p>
      ${item.description}
    </p>
  </div>
  <div class="footer-title">
  ${
    selectProducts.some((a) => a.id === item.id) ? `<button onclick="deletePoduct(${item.id})"> <i class="bi bi-dash dash-icon" ></i></button>` : `<button onclick="addCard(${item.id})"><i class="bi bi-plus plus-icon" >+</i></button>`
  }
    
    
    <div class="stars">
     ${item.reting}
    </div>
  </div>
</div>`)
console.log(a);  

$("#cards-in-page-4").html(a)

}

function openModal() {
    $(".Modal").toggleClass("d-block")
    
}
function addCard(id) {
    Prodacts.filter(item=>{
         if(item.id === id){
          return selectProducts.push(item)
         }
    })
    $("#num").text(selectProducts.length)
    drawProduct()
    drawSelectProduct()
}
function drawSelectProduct() {
    let a = selectProducts.map((item,index)=> `
        <tr>
            <th> ${index + 1} </th>
            <th>
                <img src="${item.img}" width=80> 
                ${item.id} 
            </th>
            <th> ${item.price} </th>
            <th> 0 </th>
            <th> 
                <button onclick="deleteProduct(${item.id})"> Delete</button>
                
            </th>
        </tr>
    `)
    $("#tbody").html(a)
}

function deletePoduct(id) {
   selectProducts.filter((item , index)=>{
    if(item.id === id) {
        selectProducts.splice(index , 1)
    }
   }) 
   $("#num").text(selectProducts.length)
   drawSelectProduct()
   drawProduct()
}

function openModal() {
    $(".Modal").toggleClass("d-block")
    drawSelectProduct()
}



















drawProduct()