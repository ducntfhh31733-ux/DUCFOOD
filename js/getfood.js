async function showfood() {
    const data = await getAll(URL_FOOD);
    const hello = document.querySelector(".foods");
    data.sort((a,b) => a.id - b.id).forEach(p => {
        hello.innerHTML += `<div class="col">
                                <div class="card adf">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h3>${p.id}</h3>
                                        <h4>${p.price} VND</h4>
                                        <div class="d-flex gap-2">
                                            <i class="fa-solid fa-pen-to-square text-primary"></i>
                                            <i onclick="handledelete(${p.id})" data-bs-toggle="modal" data-bs-target="#deletefood" class="fa-solid fa-trash-can text-danger"></i>
                                        </div>
                                    </div>
                                    <div class="box-img">
                                        <img class="img-food" src=${p.imgUrl} alt="">
                                    </div>
                                    <h6 class="text-center">${p.name}</h6>
                                    <div class="d-flex gap-2 justify-content-center align-items-center">
                                        <button class="btn btn-info text-white d-flex align-items-center"><i
                                                class="fa-solid fa-minus"></i></button>
                                        <input type="text" placeholder="1">
                                        <button class="btn btn-info text-white d-flex align-items-center"><i
                                                class="fa-solid fa-circle-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>`
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


const btn_addfood = document.getElementById("afd");
console.log(btn_addfood);
btn_addfood.addEventListener("click", async () => {
    const name = document.getElementById("namefood");
    const price = document.getElementById("pricefood");
    const img = await uploadImageToCloudinary(selectedFoodImageFile);
    let id = 1;
    const foods = await getAll(URL_FOOD);
    foods.forEach(p => {
        if(id == p.id){
            id++;
        }else{
            return;
        }
    }
    )
    const newfood = {
        id : id,
        name : name.value ,
        price : price.value ,
        imgUrl : img 
    }
    add(URL_FOOD,newfood)
});

function handledelete(id) {
    const ne = document.querySelector(".iddeleted");
    ne.innerHTML = id;
    const ros = document.querySelector(".ros");
ros.addEventListener("click", () => {
    deleted(URL_FOOD,id);
})
}
