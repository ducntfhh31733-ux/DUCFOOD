async function showfood() {
    const data = await getAll(URL_FOOD);
    const hello = document.querySelector(".foods");
    data.sort((a, b) => a.id - b.id).forEach(p => {
        const item = document.createElement("div");
          item.classList.add("col");
        item.innerHTML = `<div class="card adf">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h3>${p.id}</h3>
                                     <h4>${Number(p.price).toLocaleString('vi-VN')} <sup>₫</sup></h4>
                                        <div class="d-flex gap-2">
                                            <i onclick= "handlesua(${p.id})" data-bs-toggle="modal" data-bs-target="#addfood" class="fa-solid fa-pen-to-square text-primary"></i>
                                            <i onclick="handledelete(${p.id})" data-bs-toggle="modal" data-bs-target="#deletefood" class="fa-solid fa-trash-can text-danger"></i>
                                        </div>
                                    </div>
                                    <div class="box-img">
                                        <img class="img-food" src=${p.imgUrl} alt="">
                                    </div>
                                    <h6 class="text-center">${p.name}</h6>
                                    <div class="d-flex gap-2 justify-content-center align-items-center">
                                        <button class="btn btn-info text-white d-flex align-items-center minus"><i
                                                class="fa-solid fa-minus"></i></button>
                                        <input class="quantity" type="text" value="0">
                                        <button class="btn btn-info text-white d-flex align-items-center plus"><i
                                                class="fa-solid fa-circle-plus"></i>
                                        </button>
                                    </div>
                                </div>`;
                                    const minus = item.querySelector(".minus");
                                    const quantity = item.querySelector(".quantity");
                                    const plus = item.querySelector(".plus");
                                   plus.addEventListener("click", () => {
                                       quantity.value = parseInt(quantity.value) + 1;
                                   });
                                   minus.addEventListener("click", () => {
                                       if (quantity.value > 0) {
                                            quantity.value = parseInt(quantity.value) - 1;
                                        }
                                   });

                                hello.appendChild(item);
    })

}
showfood();
const file = document.getElementById("filefood");
file.addEventListener("change", handleFoodImageSelect)
let selectedFoodImageFile; // toan cuc
// Xử lý khi người dùng chọn file ảnh
function handleFoodImageSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    // Sau khi đọc xong ảnh, hiển thị preview lên giao diện
    reader.onload = (e) => {
        document.getElementById("imgfood").src = e.target.result;
    };

    selectedFoodImageFile = file; // Lưu lại file để upload sau
}

let idEdit ; // toan cuc 
const btn_addfood = document.getElementById("afd"); // biến toàn cục 
btn_addfood.addEventListener("click", async () => {
    const name = document.getElementById("namefood");
    const price = document.getElementById("pricefood");
    const imgUrl = document.getElementById("imgfood");
    if(selectedFoodImageFile){
        const img = await uploadImageToCloudinary(selectedFoodImageFile);
    }
    let id = 1; // tu tao
    const foods = await getAll(URL_FOOD);
    foods.forEach(p => {
        if (id == p.id) {
            id++;
        } else {
            return;
        }
    }
    )
    const newfood = {
        id: idEdit ? idEdit : id,
        name: name.value,
        price: price.value,
        imgUrl: selectedFoodImageFile ? img : imgUrl.src
    }

    if(idEdit) {
       edit(URL_FOOD, newfood);
    }else{
        add(URL_FOOD, newfood);
    }
});

function handledelete(id) {
    const ne = document.querySelector(".iddeleted");
    ne.innerHTML = id;
    const ros = document.querySelector(".ros");
    ros.addEventListener("click", () => {
        deleted(URL_FOOD, id);
    })
}

async function handlesua(id) {
    idEdit = id ; // gán giá trị lại 
    const g = await getAll(URL_FOOD);
    const h = g.find(p => p.id == id);
    const name = document.getElementById("namefood");
    const price = document.getElementById("pricefood");
    const img = document.getElementById("imgfood");
    const title = document.getElementById("title-food");
    const iddfood = document.getElementById("iddfood");
    iddfood.innerText = id;
    btn_addfood.innerText = "Update Food";
    title.innerText = "Modal Edit Food";
    img.src = h.imgUrl;
    name.value = h.name;
    price.value = h.price;
}
// classlist.toggle("d-none");
const use = document.querySelectorAll(".user");
const profile = document.querySelector(".profile-card")
use.forEach(use => {
    use.addEventListener("click", () => {
        profile.classList.toggle("d-none");
    });
})
const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    location.href = "Login.html";
});

const addfood = document.getElementById("addg");
addfood.addEventListener("click", () => {
    const name = document.getElementById("namefood");
    const price = document.getElementById("pricefood");
    const img = document.getElementById("imgfood");
    const title = document.getElementById("title-food");
    btn_addfood.innerText = "Add Food";
    title.innerText = "Modal Add Food";

    img.src = "https://t4.ftcdn.net/jpg/19/32/70/21/360_F_1932702158_ZlrlO4IbOc0qJcu1FNMb0SjSUgg7cfAY.jpg";
    name.value = "";
    price.value = "";
});


const oder = document.querySelector(".oder");
oder.addEventListener("click",async  () => {
    const select = document.querySelector(".select_choose");
    const allOrder = await getAll(URL_ORDER);
    const orderold = allOrder.find(p => p.id == select.value);
    if(!select.value){
           alert("vui long chon ban");
           return;
    }
    const onfood = document.querySelectorAll(".foods .col");
    const bill = orderold ? orderold.bill : [];
    onfood.forEach(p => {
        const quantity = p.querySelector(".quantity").value;
        if(quantity > 0){
         const idFood = p.querySelector("h3").innerText;
        const index =  bill.findIndex(c => c.idFood == idFood);
          if(index != -1){
              bill[index].quantity = parseInt(bill[index].quantity) + parseInt(quantity);
          }else {
               bill.push({idFood , quantity});    
          }
        }
    });
   
    const order = {
         id : select.value,
         bill : bill
    };
    if(orderold){
        edit(URL_ORDER, order);
    }else {
        add(URL_ORDER, order);
    }
    
})