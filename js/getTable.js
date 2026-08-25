async function showTable () {
    const data = await getAll(URL_TABLE);
    const hello = document.querySelector(".tables");
    data.forEach(p => {
        hello.innerHTML += `<div class="col">
                            <div class="card zili">
                                <div class="box-img">
                                    <img src="../img/restaurant.png" alt="">
                                </div>
                                <h3>${p.id}</h3>
                                <div class="d-flex gap-4 justify-content-center align-items-center">
                                    <button class="btn btn-warning text-white"><i class="fa-solid fa-circle-plus"></i>
                                        BOOKING</button>
                                </div>
                            </div>
                        </div>`
    })
    
}

showTable();