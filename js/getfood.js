async function showfood () {
    const data = await getAll(URL_FOOD);
    const hello = document.querySelector(".foods");
    data.forEach(p => {
        hello.innerHTML += `<div class="col">
                            <div class="card adf">
                                <div class="box-img">
                                    <img class="img-food" src="${p.imgUrl}" alt="">
                                </div>
                                <h3>${p.id}</h3>
                                <h6 class="text-center">${p.name}</h6>
                                <div class="d-flex gap-2 justify-content-center align-items-center">
                                    <button class="btn btn-info text-white d-flex align-items-center"><i
                                            class="fa-solid fa-circle-plus"></i></button>
                                    <input type="text" placeholder="1">
                                    <button class="btn btn-info text-white d-flex align-items-center"><i
                                            class="fa-solid fa-minus"></i>
                                    </button>
                                </div>

                            </div>
                        </div>`
    })
    
}
showfood();