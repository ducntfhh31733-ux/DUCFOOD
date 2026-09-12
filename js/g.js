async function  con() {
    const data = await getAll(URL_Thep);
    const hello = document.querySelector(".thep");
    data.forEach(p => {
        hello.innerHTML += ` <div class="col mt-4">
                                <div class="card">
                                    <h6 class="bg-success text-white" style="padding-left: 10px;">${p.tableName},${p.id}</h6>
                                    <p class="p-2">${p.description}
                                    </p>
                                    <hr class="w-50 m-auto mt-2">
                                    <div class="d-flex mt-2 p-2 gap-2">
                                        <h6>${p.totalPrice}</h6>
                                        <p>
                                            ${p.createdAt}
                                        </p>
                                    </div>
                                </div>
                            </div>`
    })
}
con()