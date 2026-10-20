async function con() {
    const data = await getAll(URL_PAY);
    const allfood = await getAll(URL_FOOD);
    const hello = document.querySelector(".pay");
    data.forEach(p => {
        const item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML += `<div class="card">
                                    <h6 class="bg-success text-white p-2" style="padding-left: 10px;">Table ${p.idTable}</h6>
                                    <div class="p-2">
                                    <div class="card-pay"> </div>
                                      <div class="d-flex border-top border-black  mt-2 p-2 justify-content-between gap-2">
                                        <h6>Tổng cộng: ${p.total} VND</h6>
                                        <p>
                                   Thanh toán lúc: ${new Date(p.creatAt).toLocaleDateString("vi-VN")}
                                        </p>
                                    </div>
                                    </div>
                                </div>`;
        const card_pay = item.querySelector(".card-pay");
        p.bill.forEach(x => {
            const food = allfood.find(y => y.id == x.idFood);
        
            card_pay.innerHTML += `<p class="pt-2">${food.name} x ${x.quantity} = ${x.quantity*food.price} VND
                                            </p>`

        })
                hello.appendChild(item);
    })
}
con();