/*const fullImgBox = documentById("fullImgBox");

fullImg = document.getElementById("fullImg");

function openFullImg(){
    fullImgBox.style.display = "flex"
}

function closeImg(){
    fullImgBox.style.display = 'none'
}*/

/*document.querySelectorAll("modal-container img").forEach(el =>{
    el.addEventListener("click",function(ev){
        ev.stopPropagation
        this.parentNode.classList.add("active")
    })
})*/
/*
const gallery = document.querySelector(".galery");
const containerIMG = document.querySelector(".lightbox");
const img = document.querySelector(".show-img");
const button = document.querySelector("btn");

gallery.addEventListener('click', e=>{
    if(e.target.matches('.galery-img')){
        img.src = e.target.src;
        containerIMG.classList.add('show')
    }
})

button.addEventListener('click', function()){
    button.parentElement.classList.remove('show');
}*/

function cerrarPagina() {
    window.close(); // Cierra la ventana actual
}

function agrandar(img) {
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.position = "fixed";
    img.style.top = "0";
    img.style.left = "0";
    img.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    img.style.zIndex = "1";
    img.onclick = function() {
        restoreSize(img);
    };
}

function restoreSize(img) {
    img.style.width = "";
    img.style.height = "";
    img.style.position = "";
    img.style.top = "";
    img.style.left = "";
    img.style.backgroundColor = "";
    img.style.zIndex = "";
    img.onclick = function() {
        enlargeImg(img);
    };
}
