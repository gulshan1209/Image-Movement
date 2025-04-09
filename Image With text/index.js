var elems = document.querySelectorAll(".elem");

elems.forEach(function (val) {
    const image = val.children[1]; // Adjust the index as needed

    val.addEventListener("mouseenter", function () {
        image.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
        image.style.opacity = 0;
    });

    val.addEventListener("mousemove", function (dats) {
        image.style.left = dats.x + "px";
     
    });
});
