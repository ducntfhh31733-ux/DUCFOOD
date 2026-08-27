async function showTable() {
    const data = await getAll(URL_TABLE);
    const hello = document.querySelector(".tables");
    data.forEach(p => {
        const img = p.status ? "../img/restaurant.png" : "../img/resto2.jpg";
        const button = p.status ? `<button onClick=getId(${p.id}) data-bs-toggle="modal" data-bs-target="#booking" class="btn btn-warning text-white"><i class="fa-solid fa-circle-plus"></i>
                                        BOOKING</button>`: ` <button class="btn btn-success text-white d-flex align-items-center"><i
                                                class="fa-solid fa-circle-plus"></i>
                                            ADD</button>
                                        <button class="btn btn-danger text-white d-flex align-items-center"><i
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
function getId (id) {
    const a = document.querySelector(".idbooking");
    a.innerText = id;
}
const btn_booking = document.getElementById("booking-table");
btn_booking.addEventListener("click", () => {
     const id = document.querySelector(".idbooking");
    const name = document.getElementById("customername");
    const quantity = document.getElementById("quantity");
   
    const update = {
        "id" : id.innerText,
        "customerName" : name.value,
        "quantity" : quantity.value,
        "status": false
    }
  edit(URL_TABLE,update);
})