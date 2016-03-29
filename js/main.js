var columns = document.getElementById("holder");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

function switchPage(element, direction) {
    var pixels = 333.328;
    if (direction == 'next') {
        pixels = - pixels;
    }
    element.style.left = parseFloat(element.style.left) + pixels + "px";
}

prev.addEventListener("click", function (e) {
    e.preventDefault();
    if (parseInt(columns.style.left) !== 0) {
        switchPage(columns, 'prev');
    } else {
        alert("It's the first page");
        return false;
    }
});

next.addEventListener("click", function (e) {
    e.preventDefault();
    switchPage(columns, 'next');
});
