var elems = document.querySelectorAll(".elem");

elems.forEach(function(val) {

    

    val.addEventListener("mouseenter", function() {
        val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave", function() {
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove", function(dets){ 
        val.childNodes[3].style.left = dets.x+"px"
        // val.childNodes[3].style.top = dets.y+"px"
    });
});





// var elemImage = document.querySelector(".elem img")

// elem.addEventListener("mouseenter", function(dets){
//     elemImage.style.opacity = "1"
// })

// elem.addEventListener("mouseleave", function(dets){
//     elemImage.style.opacity = "0"
// })