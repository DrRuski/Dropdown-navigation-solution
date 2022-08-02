function openNav() {
    document.getElementById("navContainer").style.width="15rem";
}

function closeNav() {
    document.getElementById("navContainer").style.width="0";
}

function navFunction() {
    document.getElementById("navDropdown").classList.toggle("show-dropdown")
}

window.onclick = function(event) {
    if (!event.target.matches(".dropdown-btn")) {
        var dropdowns = document.getElementsByClassName("features-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show-dropdown")) {
                openDropdown.classList.remove("show-dropdown");
            }
        }
    }
}