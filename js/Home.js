const a = document.querySelector(".icon");
const list_items = document.querySelectorAll(".item");
const menu = document.querySelector('.menu-show');
const list_li = document.querySelectorAll("nav li");
const list_box = document.querySelectorAll("main .box");
a.addEventListener("click", () => {
    list_items.forEach(x => {
        x.classList.toggle("d-none");
    });
    menu.classList.toggle("menu-show");
});

list_li.forEach((x, index) => {
    x.addEventListener("click", () => {
        list_box.forEach(p => p.style.display = "none")
        list_box[index].style.display = "block";
        localStorage.setItem("index",index);
    })
});

const index = localStorage.getItem("index");
if(index){
     list_box[index].style.display = "block";
}