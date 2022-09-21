const menubtn = document.getElementById('mobile-menu');
const closebtn = document.getElementById('close-btn');
const menuList = document.getElementById('menu-list');

menubtn.onclick = function () {
    if (menuList.style.display !== "none") {
    menuList.style.display = "none";
    } else {
    menuList.style.display = "block";
    }
};

closebtn.onclick = function () {
    if (menuList.style.display !== "none") {
    menuList.style.display = "none";
    } else {
    menuList.style.display = "block";
    }
};