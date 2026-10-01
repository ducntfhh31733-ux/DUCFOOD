async function showTable() {
    const data = await getAll(URL_TABLE);
    const hello = document.querySelector(".tables");
    const select_choose = document.querySelector(".select_choose");
    data.forEach(p => {
        if (!p.status) {
            select_choose.innerHTML += `<option value="${p.id}">Table ${p.id}</option>`
        }
        const img = p.status ? "../img/restaurant.png" : "../img/resto2.jpg";
        const button = p.status ? `<button onClick=getId(${p.id}) data-bs-toggle="modal" data-bs-target="#booking" class="btn btn-warning text-white"><i class="fa-solid fa-circle-plus"></i>
                                        BOOKING</button>`: ` <button onclick=getIdfood(${p.id}) class="btn btn-success text-white d-flex align-items-center"><i
                                                class="fa-solid fa-circle-plus"></i>
                                            ADD</button>
                                        <button onclick=getIdcard(${p.id}) data-bs-toggle="modal" data-bs-target="#cardfood" class="btn btn-danger text-white d-flex align-items-center"><i
                                                class="fa-solid fa-cart-shopping"></i>
                                            CART</button>`;
        hello.innerHTML += `<div class="col">
                            <div class="card zili">
                                <div class="box-img">
                                    <img src=${img} alt="">
                                </div>
                                <h3>${p.id}</h3>
                                <div class="d-flex gap-4 justify-content-center align-items-center">
                                    ${button}
                                </div>
                            </div>
                        </div>`
    })

}

showTable();
function getId(id) {
    const a = document.querySelector(".idbooking");
    a.innerText = id;
}
const btn_booking = document.getElementById("booking-table");
btn_booking.addEventListener("click", () => {
    const id = document.querySelector(".idbooking");
    const name = document.getElementById("customername");
    const quantity = document.getElementById("quantity");

    const update = {
        "id": id.innerText,
        "customerName": name.value,
        "quantity": quantity.value,
        "status": false
    }
    edit(URL_TABLE, update);
})
async function getIdcard(id) {
    const c = document.querySelector(".ghfood");
    c.innerText = id;
    const allorder = await getAll(URL_ORDER);
    const allfood = await getAll(URL_FOOD);
    const order = allorder.find(p => p.id == id);
    const listcard = document.getElementById("listcard");
    let total = 0;
     listcard.innerHTML = "";
    order.bill.forEach((p, index) => {
        const food = allfood.find(x => x.id == p.idFood);
        total += food.price * p.quantity;
        listcard.innerHTML += `<tr>
                                    <th scope="row">${index + 1}</th>
                                    <td>${food.price}VND</td>
                                    <td>${p.quantity}</td>
                                    <td>${food.price * p.quantity} VND</td>
                                </tr>`
    });
    listcard.innerHTML += `<tr>
                                    <th class="text-end" colspan="4">Tổng tiền giá:${total} VND</th>
                                </tr>`;
}
function getIdfood(id) {
    const select = document.querySelector(".select_choose");
     list_box[1].style.display = "none";
      list_box[2].style.display = "block";
      select.value = id;
}