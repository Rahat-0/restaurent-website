window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    });



var photo = ["../image/menu-2.jpg", "../image/part2_1.jpg","../image/menu-5.jpg"];
var imgtag = document.querySelector("#imgs");
function first(){
    imgtag.src = photo[0];
}

function mid(){
    imgtag.src = photo[1];
}
function last(){
    imgtag.src = photo[2];
}