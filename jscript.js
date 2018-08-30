function kolor(kolor)
{
document.bgColor=kolor;
}
function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 1);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } 
        if (id = 100)
            document.bgColor="white";
        }
        else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}
