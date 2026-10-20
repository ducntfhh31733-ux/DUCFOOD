async function sep() {
    const Doung = document.getElementById("duong");
    console.log(Doung);
    const ppp = await getAll(URL_TABLE);
    var count = 0;
    ppp.forEach(p => {
        if (p.status) {
            count++;
        }
    });
    Doung.innerText = count;
}
sep();
async function thien() {
    const vang = document.getElementById("vang");
    const nome = await getAll(URL_ORDER);
    console.log(nome);
    vang.innerText = nome.length;
}
thien()
async function thuy() {
    const doo = document.getElementById("doo");
    const dfaaa = await getAll(URL_PAY);
    var tong = 0;
    dfaaa.forEach(p => {
        if (checkDay(p.creatAt)) {
            tong += p.total
        }
    })
    doo.innerText = tong;
}
thuy();

function checkDay(creatAt) {

    const date = new Date(creatAt);
    const today = new Date();

    if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    ) {
        return true
    } else {
        return false
    }
};
async function thao() {
    const xanh = document.getElementById("xanh");
    const an = await getAll(URL_FOOD);
    xanh.innerText = an.length;

}
thao();


const green = document.getElementById("green");
const blue = document.getElementById("blue");

async function meo() {
    const a = await getAll(URL_PAY);
    const b = await getAll(URL_TABLE);
    const red = document.getElementById("red");
    const ctx = document.createElement("canvas");
       const doanhthu = b.map(p => {
        return { idTable: p.id, total: 0 }
    });
    a.forEach(p => {
        const indexcheck = doanhthu.findIndex(c => c.idTable == p.idTable);
        doanhthu[indexcheck].total = parseInt(doanhthu[indexcheck].total) + parseInt(p.total);

    });
    red.appendChild(ctx);
    const config = {
        type: 'bar',
        data: {
            labels: doanhthu.map(p => p.idTable),
            datasets: [{
                label: 'My First Dataset',
                data: doanhthu.map(p => p.total),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    new Chart(ctx, config)
 

}
meo();

