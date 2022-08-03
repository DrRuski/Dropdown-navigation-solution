
/* Sidenav */

function openNav() {
    document.getElementById("navContainer").style.width="15rem";
}

function closeNav() {
    document.getElementById("navContainer").style.width="0";
}




/* Dropdown */

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display="block";
        }
    })
}